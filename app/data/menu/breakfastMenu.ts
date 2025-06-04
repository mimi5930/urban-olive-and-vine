import {
  type MenuSection,
  type MenuSelection,
  type MenuItem,
} from "~/components/Menu";

const wafflesItems: MenuItem[] = [
  {
    name: "Nutella & Banana Nordic Waffle",
    price: "$10.25",
    description: "Nutella and sliced bananas stuffed in a Nordic Waffle.",
    details: ["add strawberries in waffle +$1"],
  },
  {
    name: "Bacon & Portabella Stuffed Nordic Waffle",
    price: "$11.75",
    description:
      "Crumbled bacon, egg, havarti cheese, portabella mushrooms and plum sauce stuffed in a Nordic Waffle.",
  },
  {
    name: "Salmon & Dill Nordic Waffle",
    price: "$12.25",
    description:
      "Cold smoked salmon, egg, lemon caper dill cream cheese, spinach & fresh dill stuffed in a Nordic Waffle.",
  },
  {
    name: "Greek Gyro Nordic Waffle",
    price: "$12.25",
    description:
      "Gyro meat, egg, Roma tomatoes and tzatziki sauce stuffed in a Nordic Waffle.",
  },
  {
    name: "Ham & Goat Cheese Nordic Waffle",
    price: "$11.75",
    description:
      "Honey baked ham, egg, goat cheese, fresh spinach and truffle balsamic glaze stuffed in a Nordic Waffle.",
  },
  {
    name: "Fruit Stuffed Nordic Waffle",
    price: "$10.75",
    description:
      "Nordic Waffle with fresh berries & cream cheese whipped with fruit preserves. Topped with whipped cream & Spence's maple syrup.",
  },
  {
    name: "Kids Nordic Waffle",
    price: "$8.75",
    description:
      "Nordic Waffle stuffed with fresh berries, topped with whipped cream and Spence's maple syrup.",
  },
];

const scramblesItems: MenuItem[] = [
  {
    name: "Meat, Cheese & Egg Scramble",
    price: "$11.25",
    description:
      "Bacon or Ham, your choice of cheese and scrambled eggs on top of fresh spinach.",
  },
  {
    name: "Portabella, Veggie & Egg Scramble",
    price: "$11.75",
    description:
      "Portabellas, caramelized onions, roasted red peppers, sun-dried tomatoes, provolone, scrambled eggs, and Croix Valley Garlic and Herb sauce on fresh spinach.",
    details: ["make it vegan by substituting tofu for eggs and no cheese"],
  },
];

const specialtiesItems: MenuItem[] = [
  {
    name: "Urban Breakfast Board",
    price: "$14.00",
    description:
      "Cold smoked salmon, lemon caper dill cream cheese, fresh fruit, white ciabatta toast or warm croissant, butter, and preserves.",
    details: ["Sub two pieces GF toast for $2.00"],
  },
  {
    name: "Meat & Cheese Croissant Sandwich",
    price: "$11.25",
    description:
      "Bacon or ham, your choice of cheese and scrambled eggs on a warm croissant. Served with fresh fruit.",
    details: ["Sub two pieces GF toast for croissant for $2.00"],
  },
  {
    name: "Quiche",
    price: "$13.25",
    description:
      "Home-made potato crusted quiche in a variety of ever-changing flavors with fresh fruit and a mini muffin.",
  },
  {
    name: "Quiche",
    price: "$13.25",
    description:
      "Home-made potato crusted quiche in a variety of ever-changing flavors with fresh fruit and a mini muffin.",
  },
  {
    name: "Urban Combo - Choose any 2",
    price: "14.00",
    description:
      "Your choice of a small garden, Caesar, or Greek salad, or a cup of one of our delicious soups, or our homemade quiche",
  },
];

const sidesItems: MenuItem[] = [
  {
    name: "Gluten-Free Toast (1 piece)",
    price: "$2.00",
    description: "with butter and preserves",
  },
  {
    name: "Ciabatta Toast or Warm Croissant",
    price: "$3.00",
    description: "with butter and preserves",
  },
  {
    name: "Fresh Fruit Plate",
    price: "$5.50",
  },
  {
    name: "Scrambled Eggs",
    price: "$4.50",
  },
  {
    name: "Sliced Avocado Half",
    price: "$2.50",
  },
  {
    name: "Hard-Boiled Egg",
    price: "$2.00",
  },
  {
    name: "Side of Spence's local Maple Syrup",
    price: "$1.00",
  },
];

const breakfastMenuSelections: MenuSelection[] = [
  {
    title: "WAFFLES",
    notes: [
      "Not your average waffle! Our Norwegian-style waffles are thin and soft, reminiscent of a crepe. When you add our unique twist on fillings, these waffless are out of this world!",
      "served with fresh fruit",
    ],
    items: wafflesItems,
  },
  {
    title: "SCRAMBLES",
    notes: ["served with fresh fruit"],
    items: scramblesItems,
  },
  {
    title: "SPECIALTIES",
    items: specialtiesItems,
  },
  {
    title: "SIDES",
    items: sidesItems,
  },
];

export const breakfastMenuData: MenuSection = {
  menuTitle: "BREAKFAST",
  menuSelections: breakfastMenuSelections,
};
