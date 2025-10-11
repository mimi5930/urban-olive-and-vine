import { useState } from "react";
// import HoursForm from "~/components/Forms/HoursForm";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export default function Admin() {
  const [fileContent, setFileContent] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    // parse
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    const menuDiv = doc.querySelector(".imp-menu");
    const sections = [];
    let currentSection = null;

    menuDiv?.childNodes.forEach((node) => {
      if (!(node instanceof Element)) return;

      // Menu Selections
      if (node.querySelector(".imp-normal-heading")) {
        currentSection = {
          title: node.querySelector(".imp-normal-heading")?.textContent.trim(),
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
          currentSection.notes.push(text);
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
          const notes =
            item.querySelector(".imp-extras")?.textContent.trim() ?? "";
          const notesArray = notes.split(/\s{4,}-\s*/g).filter(Boolean);

          currentSection.items.push({
            name,
            price,
            description,
            notes: notesArray,
          });
        });
      }
    });

    console.log("sections", sections);
    // setFileContent(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="menu-file">Menu</Label>
      <Input id="menu-file" type="file" accept=".html" />
      <Button>Submit</Button>
    </form>

    // <HoursForm />;
  );
}
