import {
  type MenuSection,
  type MenuSelection,
  type MenuItem,
} from "~/components/Menu";

// Salads Soups and Quiche
const saladsSoupsAndQuicheItems: MenuItem[] = [
  {
    name: "Garden Salad",
    price: "$12.25",
    description:
      "Carrot, cucumber, red onion, and tomato on top of a bed of spring greens with your choice of dressing",
    isVegan: true,
  },
  {
    name: "Caesar Salad",
    price: "$13.25",
    description:
      "Romaine iceberg blend topped with Parmesan cheese, croutons, and UO&V truffle balsamic glaze with a side of Caesar dressing. (Croutons are not gluten free)",
  },
  {
    name: "Greek Salad",
    price: "$14.50",
    description:
      "Romaine iceberg blend, tomato, red onion, cucumber, Kalamata olive, banana pepper, and feta cheese with Greek dressing. Add warm sliced gyro for $3.50",
  },
  {
    name: "Urban Salad",
    price: "$14.50",
    description:
      "Beets, red onion, granny smith apple, dried cranberry, pecans, and goat cheese on top of spring greens with house made apple fig balsamic vinaigrette",
  },
  {
    name: "St. Croix Cobb Salad",
    price: "$17.50",
    description:
      "Romaine iceberg lettuce blend, tomato, red onion, blue cheese, hard-boiled egg, ham, bacon, and turkey with your choice of dressing",
  },
  {
    name: "Black Bean Quinoa Salad",
    price: "$13.75",
    description:
      "Red quinoa, roasted red pepper, fresh cilantro, green onion, feta cheese and chili lime black bean salsa on a bed of spinach with a lime wedge",
  },
  {
    name: "Asparagus Cashew Quinoa Salad",
    price: "$13.75",
    description:
      "Red quinoa, diced asparagus, cashews, roasted red pepper, green onions and an orange marmalade coconut sauce on a bed of spinach topped with toasted coconut and an orange slice",
    isVegan: true,
  },
  {
    name: "Today's Soups",
    price: "$7.00 / $12.00",
    details: [
      "Mushroom Caramelized Onion and Brie",
      "Tomato Basil (GF with no crostini)",
      "Soup of the Day",
    ],
  },
  {
    name: "Soup Sampler",
    price: "$12.00",
    description: "Can't decide which soup to get? Try three!",
    isSpecial: true,
  },
  {
    name: "Chef's Quiche & Fruit",
    price: "$13.25",
    description:
      "Rotating flavors of our popular homemade gluten free quiche served with fresh fruit and a mini muffin (muffin not gluten free)",
    isGlutenFree: true,
  },
  {
    name: "Urban Combo - Choose any 2",
    price: "$14.00",
    description:
      "Your choice of a small garden, Caesar, or Greek salad, or a cup of one of our delicious soups, or our homemade quiche",
    isSpecial: true,
  },
];

// Small Plates
const smallPlatesItems: MenuItem[] = [
  {
    name: "Warm Goat Cheese & Fig",
    price: "$12.50",
    description:
      "Goat cheese topped with fig, pecans and fig balsamic glaze. Served with fresh baguette (not GF).",
    isGlutenFree: true,
  },
  {
    name: "Spinach Artichoke Dip",
    price: "$12.50",
    description:
      "A warm blend of artichoke, spinach, cream cheese, parmesan, garlic and lemon. Topped with shredded parmesan and served with fresh baguette (not GF).",
    isGlutenFree: true,
  },
  {
    name: "Spicy Feta",
    price: "$12.50",
    description:
      "A spicy blend of feta cheese, tomato, green onion, chilies, and garlic. Served with corn tortilla chips.",
    isGlutenFree: true,
  },
  {
    name: "Baguette and Olive Oil Board",
    price: "$9.50",
    description:
      "A selection of Urban Olive & Vine seasoned olive oils and fresh baguette.",
  },
  {
    name: "Nibble Plate",
    price: "$14.50",
    description:
      "Sun-dried tomato pesto, Kalamata olive tapenade, basil pesto, goat cheese with balsamic glaze, and mixed olives. Served with crackers and baguette (not GF).",
    isGlutenFree: true,
  },
  {
    name: "Hummus & Veggies",
    price: "$12.50",
    description:
      "Select from traditional, Kalamata olive, basil pesto, or sun-dried tomato. Served with toasted flatbread (not GF) and fresh veggies. Basil pesto is not vegan.",
    isGlutenFree: true,
    isVegan: true,
  },
  {
    name: "Warm Brie & Baguette",
    price: "$13.75",
    description:
      "Warm Ile De France Brie topped with your choice of either sweet or spicy Terrapin Ridge sauce. Ask your server for today's selection. Served with fresh baguette (not GF).",
    isGlutenFree: true,
  },
  {
    name: "Cheddar Stuffed Pretzel",
    price: "$11.75",
    description:
      "Jumbo cheddar cheese-stuffed pretzel, baked and topped with crumbled bacon and chipotle seasoned olive oil. Served with chipotle ranch.",
  },
  {
    name: "Spinach & Feta Stuffed Pretzel",
    price: "$11.75",
    description:
      "Jumbo pretzel stuffed with spinach and feta cheese, baked and topped with garlic olive oil and crumbled feta cheese. Served with Greek dressing.",
  },
  {
    name: "Grilled Cheese Pretzel & Tomato Basil Soup Combo",
    price: "$14.00",
    description:
      "Grilled cheese stuffed pretzel paired with a cup of our homemade tomato basil soup. A perfect combination!",
    details: ["No substitutions, please. Subject to product availability."],
  },
  {
    name: "Muhammara",
    price: "$12.50",
    description:
      "Middle Eastern dip of roasted red peppers, walnuts, pomegranate molasses, and cayenne that is savory, sweet, and spicy with a hint of smokey. Served with veggies and toasted white flatbread (not GF).",
    isGlutenFree: true,
  },
];

// Sandwiches and Wraps
const sandwichesAndWrapsItems: MenuItem[] = [
  {
    name: "Urban Fig & Chicken",
    price: "$13.50",
    description: "Rotisserie chicken, fig spread, Havarti, spring mix",
  },
  {
    name: "Grown Up Grilled Cheese",
    price: "$11.00",
    description: "Havarti & Swiss cheese, granny smith apples & honey",
  },
  {
    name: "Smoked Pork Philly",
    price: "$14.25",
    description:
      "Pulled smoked pork, caramelized onion, roasted red pepper, and provolone cheese with a chipotle cherry barbeque sauce and mustard seeds",
  },
  {
    name: "Cranberry Turkey & Swiss",
    price: "$13.50",
    description:
      "Turkey breast, Swiss cheese, caramelized onion, dried cranberries, spring greens, and cranberry aioli",
  },
  {
    name: "Cuban",
    price: "$14.25",
    description:
      "Honey ham, pulled smoked pork, Swiss cheese, pickles, mayo, and mustard",
  },
  {
    name: "Greek Gyro with Tzaziki",
    price: "$14.25",
    description:
      "Warm gyro meat (lamb & beef) with lettuce, tomato, cucumber, red onion, banana pepper, and tzatziki sauce on warm white flatbread. (Gyro meat is not GF)",
  },
  {
    name: "Tuscan Salami",
    price: "$13.25",
    description:
      "Italian salami, roasted red pepper, sun-dried tomato, provolone cheese, basil pesto aioli, and spring mix",
  },
  {
    name: "Portabella Veggie",
    price: "$13.50",
    description:
      "Roasted portabella, roasted red pepper, sun-dried tomato, caramelized onion, dill, provolone, spring mix, and garlic & herb sauce. ",
    details: ["can be prepared vegan upon request"],
  },
  {
    name: "Roast Beef, Portabella, Fried Onion & Provolone Sandwich",
    price: "$14.25",
    description:
      "Roast beef topped with portabella mushrooms, fried onions, provolone cheese, and roasted garlic aioli.",
    details: ["can be prepared gluten free"],
  },
  {
    name: "Chicken Caesar Wrap",
    price: "$13.25",
    description:
      "Lettuce, tomato, Parmesan, cold rotisserie chicken, and Caesar dressing wrapped in a spinach tortilla",
  },
  {
    name: "Spicy Asian Chicken Wrap",
    price: "$13.25",
    description:
      "Lettuce, cabbage, cilantro, green onion, roasted red pepper, cold rotisserie chicken, and spicy Thai peanut sauce wrapped in a spinach tortilla (sauce not GF)",
    details: ["can be prepared vegan (including sub tofu for chicken)"],
  },
  {
    name: "Avocado BLT Wrap",
    price: "$13.25",
    description:
      "Lettuce, crumbled bacon, tomato, red onion, and avocado aioli wrapped in a spinach tortilla",
    details: ["can be prepared vegan (including sub tofu for bacon)"],
  },
  {
    name: "Sweet Thai Chili Stir Fry Tofu Wrap",
    price: "$13.25",
    description:
      "Lettuce, cabbage, cilantro, green onion, roasted red pepper, carrot, snap peas, seasoned baked tofu and sweet Thai chili sauce wrapped in a spinach tortilla.",
    details: ["Vegan with balsamic dip instead of lemon dill ranch"],
    isVegan: true,
  },
];

const mainMenuSelections: MenuSelection[] = [
  {
    title: "SALADS, SOUPS, & QUICHE",
    notes: [
      "Add warm rotisserie chicken to any salad $3.50",
      "Add cold smoked salmon to any salad $5.50",
      "Add warm marinated tofu to any salad $2.75",
      "Dressings:  All dressings are gluten free - Blue Cheese, Lemon Dill Ranch, Greek, Caesar, Chipotle Ranch, Apple Fig Vinaigrette, Balsamic Vinaigrette. (upcharge for extra dressing)",
      "All salads are Gluten Free except for baguette and croutons. Substitute GF crackers.",
      "Sub vegan white flatbread for baguette +$1.25",
    ],
    items: saladsSoupsAndQuicheItems,
  },

  {
    title: "SMALL PLATES",
    notes: [
      "GF = Gluten Free INGREDIENTS. If GF is desired, GF crackers or bread are available for an upcharge.",
      "Substitute vegan white flatbread for baguette +$1.25",
      "Most menu items can be prepared gluten free with the substitution of GF crackers (for baguette), GF bread or a GF wrap. Please let your server know of any food sensitivities; we will do our best to accommodate.",
    ],
    items: smallPlatesItems,
  },
  {
    title: "SANDWICHES & WRAPS",
    notes: [
      "Sandwiches & wraps served with veggies and lemon dill ranch dip. Add kettle chips for $2.75. Add a small Garden or Caesar salad or cup of soup for $7",
      "Choice of ciabatta or white or wheat flatbread.",
      "All sandwich and wrap ingredients are gluten-free except for bread and where noted. Substitute GF bread or a GF wrap for $3.50",
    ],
    items: sandwichesAndWrapsItems,
  },
];

export const mainMenuData = {
  menuTitle: "MAIN",
  menuSelections: mainMenuSelections,
};
