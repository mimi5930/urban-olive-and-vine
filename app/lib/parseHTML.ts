import { MenuSelection } from "~/components/Menu";

export function parseHTML(htmlString: string) {
  // parse file html
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");

  const menuDiv = doc.querySelector(".imp-menu");
  const sections: MenuSelection[] = [];
  let currentSection: MenuSelection | null = null;

  menuDiv?.childNodes.forEach((node) => {
    if (!(node instanceof Element)) return;

    // Menu Selections
    if (node.querySelector(".imp-normal-heading")) {
      currentSection = {
        title:
          node
            .querySelector(".imp-normal-heading")
            ?.textContent.trim()
            .toUpperCase() ?? "",
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

  return sections;
}
