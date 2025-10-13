import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import {
  Control,
  Resolver,
  useFieldArray,
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";
import { Menus } from "~/components";
import { MenuSection, MenuSelection } from "~/components/Menu";
// import HoursForm from "~/components/Forms/HoursForm";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
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
type MenuFormSelection = z.infer<typeof formMenuSelection>;

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
    watch,
    control,
    formState: { errors },
  } = useForm<MenuFormValues>({
    resolver: zodResolver(formMenuSection),
    defaultValues: {
      menuTitle: "",
      menuDocumentLink: "",
      menuSelections: [],
    },
  });

  const menuSelections = watch("menuSelections");

  // Menu Selection Fields
  const {
    fields: menuSelectionFields,
    append: appendMenuSelection,
    remove: removeMenuSelection,
  } = useFieldArray({
    control,
    name: "menuSelections",
  });

  // Append New Menu Section
  const appendHandler = () => {
    appendMenuSelection({
      title: "",
      items: [],
    });
  };

  // Remove Menu Section
  const removeHandler = (index: number) => {
    removeMenuSelection(index);
  };

  // Add Note to Notes Array
  const addNewNote = (menuIndex: number) => {
    // Add a new empty note
    const updatedNotes = [...(menuSelections[menuIndex].notes || ""), ""];
    setValue(`menuSelections.${menuIndex}.notes`, updatedNotes);
  };

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
        className="mb-14 flex flex-col justify-center gap-4 px-10"
      >
        {/* Menu Title Input */}
        <div className="flex flex-wrap gap-4">
          <Label htmlFor="menu-title">Menu Title</Label>
          <Input
            id="menu-title"
            type="text"
            className="bg-white"
            {...register("menuTitle")}
          />
        </div>

        {/* PDF Menu Input */}
        <div className="flex flex-wrap gap-4">
          <Label htmlFor="menu-title">
            Upload Menu PDF for Customer Download (optional)
          </Label>
          <Input
            id="menu-title"
            type="file"
            accept=".pdf"
            className="bg-white"
            {...register("menuDocumentLink")}
          />
        </div>

        {/* Menu Sections */}
        {menuSelectionFields.map((menuSelection, menuIndex) => {
          return (
            <div key={menuSelection.id}>
              <div>
                <Label htmlFor={`menu-selection-title-${menuSelection.id}`}>
                  Menu Section Title
                </Label>
                <Input
                  id={`menu-selection-title-${menuSelection.id}`}
                  {...register(`menuSelections.${menuIndex}.title`)}
                />
              </div>

              {/* Notes */}
              <div className="mb-4">
                <Label>Notes</Label>
                {menuSelections[menuIndex]?.notes?.map((_, noteIndex) => (
                  <MenuNotesField
                    parentIndex={menuIndex}
                    menuSelections={menuSelections}
                    noteIndex={noteIndex}
                    register={register}
                    setValue={setValue}
                    key={noteIndex}
                  />
                ))}
                <Button type="button" onClick={() => addNewNote(menuIndex)}>
                  Add Note
                </Button>

                {/* Menu Items */}
                <MenuItemsField
                  control={control}
                  parentFieldIndex={menuIndex}
                  register={register}
                  setValue={setValue}
                  watch={watch}
                />

                {/* Vegan, Gluten Free, and Special Radios */}
                <div>
                  <Label htmlFor={`vegan-${menuSelection.id}`}>
                    Menu Item is Vegan
                  </Label>
                  <Checkbox id={`vegan-${menuSelection.id}`} />
                </div>
                <div>
                  <Label htmlFor={`GF-${menuSelection.id}`}>
                    Menu Item is Gluten Free
                  </Label>
                  <Checkbox id={`GF-${menuSelection.id}`} />
                </div>
                <div>
                  <Label htmlFor={`vegan-${menuSelection.id}`}>
                    This Item is a Special
                  </Label>
                  <Checkbox id={`vegan-${menuSelection.id}`} />
                </div>

                {/* Remove menu section */}
                <Button type="button" onClick={() => removeHandler(menuIndex)}>
                  Remove Menu Section
                </Button>
              </div>
            </div>
          );
        })}

        {/* Add new menu section */}
        <Button type="button" onClick={() => appendHandler()}>
          Add Menu Section
        </Button>
      </form>
    </>
    // <HoursForm />;
  );
}

function MenuNotesField({
  parentIndex,
  noteIndex,
  menuSelections,
  setValue,
  register,
}: {
  parentIndex: number;
  noteIndex: number;
  menuSelections: MenuFormSelection[];
  register: UseFormRegister<MenuFormValues>;
  setValue: UseFormSetValue<MenuFormValues>;
}) {
  const removeNote = () => {
    // Remove the note at this index
    const updatedNotes = [...(menuSelections[parentIndex].notes || "")];
    updatedNotes.splice(noteIndex, 1);
    setValue(`menuSelections.${parentIndex}.notes`, updatedNotes);
  };

  return (
    <div className="mb-2 flex gap-2">
      <Input
        {...register(`menuSelections.${parentIndex}.notes.${noteIndex}`)}
      />
      <Button type="button" onClick={() => removeNote()} variant="destructive">
        Remove
      </Button>
    </div>
  );
}

function MenuItemsField({
  control,
  register,
  parentFieldIndex,
  setValue,
  watch,
}: {
  control: Control<MenuFormValues>;
  register: UseFormRegister<MenuFormValues>;
  parentFieldIndex: number;
  setValue: UseFormSetValue<MenuFormValues>;
  watch: UseFormWatch<MenuFormValues>;
}) {
  // useFieldArray hook
  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: `menuSelections.${parentFieldIndex}.items`,
  });

  const menuSelections = watch("menuSelections");

  const addNewDetail = (menuIndex: number, itemIndex: number) => {
    const updatedDetails = [
      ...(menuSelections[menuIndex].items[itemIndex].details || []),
      "",
    ];
    setValue(
      `menuSelections.${menuIndex}.items.${itemIndex}.details`,
      updatedDetails,
    );
  };

  return (
    <div>
      {itemFields.map((item, itemIndex) => {
        return (
          <div key={item.id}>
            {/* Item name */}
            <div>
              <Label htmlFor={`menu-item-name-${item.id}`}>Name</Label>
              <Input
                id={`menu-item-name-${item.id}`}
                {...register(
                  `menuSelections.${parentFieldIndex}.items.${itemIndex}.name`,
                )}
              />
            </div>

            {/* Item description */}
            <div>
              <Label htmlFor={`menu-description-${item.id}`}>Description</Label>
              <Input
                id={`menu-description-${item.id}`}
                {...register(
                  `menuSelections.${parentFieldIndex}.items.${itemIndex}.description`,
                )}
              />
            </div>

            {/* Item Details */}
            <div className="mt-2">
              <Label>Details</Label>
              {menuSelections[parentFieldIndex]?.items?.[
                itemIndex
              ]?.details?.map((_, detailIndex) => (
                <MenuDetailsField
                  key={detailIndex}
                  parentMenuIndex={parentFieldIndex}
                  itemIndex={itemIndex}
                  detailIndex={detailIndex}
                  menuSelections={menuSelections}
                  register={register}
                  setValue={setValue}
                />
              ))}
            </div>
            <Button
              type="button"
              onClick={() => addNewDetail(parentFieldIndex, itemIndex)}
            >
              Add Detail
            </Button>

            {/* Price */}
            <div>
              <Label htmlFor={`menu-item-price-${item.id}`}>Price</Label>
              <Input
                id={`menu-item-price-${item.id}`}
                {...register(
                  `menuSelections.${parentFieldIndex}.items.${itemIndex}.price`,
                )}
              />
            </div>

            {/* Remove Menu Item */}
            <Button
              type="button"
              variant="destructive"
              onClick={() => removeItem(itemIndex)}
            >
              Remove Item
            </Button>
          </div>
        );
      })}

      {/* Append Menu Item */}
      <Button
        type="button"
        onClick={() => appendItem({ name: "", details: [] })}
      >
        Add Item
      </Button>
    </div>
  );
}

function MenuDetailsField({
  parentMenuIndex,
  itemIndex,
  detailIndex,
  menuSelections,
  register,
  setValue,
}: {
  parentMenuIndex: number;
  itemIndex: number;
  detailIndex: number;
  menuSelections: MenuFormSelection[];
  register: UseFormRegister<MenuFormValues>;
  setValue: UseFormSetValue<MenuFormValues>;
}) {
  const removeDetail = () => {
    const updatedDetails = [
      ...(menuSelections[parentMenuIndex].items[itemIndex].details || []),
    ];
    updatedDetails.splice(detailIndex, 1);
    setValue(
      `menuSelections.${parentMenuIndex}.items.${itemIndex}.details`,
      updatedDetails,
    );
  };

  return (
    <div>
      <Input
        {...register(
          `menuSelections.${parentMenuIndex}.items.${itemIndex}.details.${detailIndex}`,
        )}
      />
      <Button
        type="button"
        onClick={() => removeDetail()}
        variant="destructive"
      >
        Remove
      </Button>
    </div>
  );
}
