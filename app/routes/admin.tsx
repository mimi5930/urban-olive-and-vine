import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Menus } from "~/components";
import { MenuSection, MenuSelection } from "~/components/Menu";
// import HoursForm from "~/components/Forms/HoursForm";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const formMenuItem = z.object({
  name: z.string().min(1, "Menu item must have a name"),
  description: z.string().optional(),
  details: z.array(z.string()).optional(),
  price: z.string().optional(),
  isVegan: z.boolean().optional(),
  isGlutenFree: z.boolean().optional(),
  isSpecial: z.boolean().optional(),
});

const formMenuSelection = z.object({
  title: z.string().min(1, "Section of menu must have a name"),
  notes: z.array(z.string()).optional(),
  items: z.array(formMenuItem),
});

const formMenuSection = z.object({
  menuTitle: z.string().min(1, "The Menu must have a title"),
  menuSelections: z.array(formMenuSelection),
  menuDocumentLink: z.string().optional(),
});

type MenuFormValues = z.infer<typeof formMenuSection>;

export default function Admin() {
  const [fileContent, setFileContent] = useState<MenuSelection[] | null>(null);

  const handleFileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fileInput =
      e.currentTarget.querySelector<HTMLInputElement>("#menu-file");
    const file = fileInput?.files?.[0];

    if (!file) {
      console.error("No file selected");
      return;
    }

    // Read the file as text
    const text = await file.text();

    // parse file html
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const menuDiv = doc.querySelector(".imp-menu");
    const sections: MenuSelection[] = [];
    let currentSection: MenuSelection | null = null;

    menuDiv?.childNodes.forEach((node) => {
      if (!(node instanceof Element)) return;

      // Menu Selections
      if (node.querySelector(".imp-normal-heading")) {
        currentSection = {
          title:
            node.querySelector(".imp-normal-heading")?.textContent.trim() ?? "",
          notes: [],
          items: [],
        };
        sections.push(currentSection);

        // Menu Notes
      } else if (node.querySelector(".imp-subheading") && currentSection) {
        const text = node.querySelector(".imp-subheading")?.textContent.trim();
        // replace
        const cleanText = text?.replace(/\s\n/g, " ").replace(/^[u,´]/g, "");
        const splitText = cleanText?.split("\n");
        splitText?.forEach((text) => {
          currentSection?.notes?.push(text);
        });

        // Menu Items
      } else if (node.querySelector(".imp-food-item") && currentSection) {
        node.querySelectorAll(".imp-food-item").forEach((item) => {
          const name =
            item
              .querySelector(".imp-name")
              ?.textContent.trim()
              .replace(/^[u,´]/g, "") ?? "";
          const price =
            item
              .querySelector(".imp-price")
              ?.textContent.trim()
              .replace(/\s{3,}/g, "/") ?? "";
          const description =
            item
              .querySelector(".imp-description")
              ?.textContent.trim()
              .replace(/\s+/g, " ")
              .replace(/\\"/g, "") ?? "";

          // collect all extras
          const details =
            item.querySelector(".imp-extras")?.textContent.trim() ?? "";
          const detailsArray = details.split(/\s{4,}-\s*/g).filter(Boolean);

          currentSection?.items.push({
            name,
            price,
            description,
            details: detailsArray,
          });
        });
      }
    });

    console.log("sections", sections);
    setFileContent(sections);
  };

  const handleMenuSubmit = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<MenuFormValues>({ resolver: zodResolver(formMenuSection) });

  const {
    fields: menuSelectionFields,
    append: menuSelectionFieldAppend,
    remove: menuSelectionFieldRemove,
  } = useFieldArray({
    control,
    name: "menuSelections",
  });

  return (
    <>
      <form onSubmit={handleFileSubmit}>
        <Label htmlFor="menu-file">Menu</Label>
        <Input id="menu-file" type="file" accept=".html" />
        <Button>Upload</Button>
      </form>
      {fileContent &&
        fileContent.map((menu, i) => {
          return <MenuSelection menuSelection={menu} key={i} />;
        })}

      {/* Menu Form */}
      <form
        onSubmit={handleMenuSubmit}
        className="mb-14 flex flex-wrap justify-center gap-4"
      >
        <div className="mb-14 flex flex-wrap gap-4">
          <Label htmlFor="menu-title">Menu Title</Label>{" "}
          <Input
            id="menu-title"
            type="text"
            className="bg-white"
            {...register("menuTitle")}
          />
        </div>
        <div className="mb-14 flex flex-wrap gap-4">
          <Label htmlFor="menu-title">Upload Menu PDF (optional)</Label>{" "}
          <Input
            id="menu-title"
            type="text"
            className="bg-white"
            {...register("menuDocumentLink")}
          />
        </div>
        {menuSelectionFields.map((field, index) => {
          return (
            <div key={field.id}>
              <div>
                <Label htmlFor={`menu-selection-title-${field.id}`}>
                  Menu Section Title
                </Label>
                <Input
                  id={`menu-selection-title-${field.id}`}
                  {...register(`menuSelections.${index}.title`)}
                />
              </div>
              {/* TODO: NEXT Add notes */}
            </div>
          );
        })}
        <Button
          type="button"
          onClick={() =>
            menuSelectionFieldAppend({ title: "", items: [{ name: "" }] })
          }
        >
          Add Menu Section
        </Button>
      </form>
    </>
    // <HoursForm />;
  );
}
