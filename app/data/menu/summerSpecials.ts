import {
  type MenuSection,
  type MenuSelection,
  type MenuItem,
} from "~/components/Menu";

// Featured Beverages
const featuredBeverages: MenuItem[] = [
  {
    name: "Sailor Mercy Elderberry Lemonade",
    price: "$6.00",
    description:
      'Locally made and "small batched with love." 8 oz bottle of delicious springtime flavor!',
  },
  {
    name: "Mixed Berry Latte",
    price: "$4.50 short $5.00 tall",
    description:
      "A handcrafted blend of espresso, steamed milk, and all the berry syrups - blackberry, raspberry, and strawberry. Sweet summer goodness! Also tasty iced (tall only).",
    details: ["Soy milk, almond milk or coconut milk + .75", "Oat milk + .80"],
  },
  {
    name: "Spiced Irish Cream White Mocha",
    price: "$4.50 short $5.00 tall",
    description:
      "A rich, creamy confection of espresso, white chocolate (contains dairy), Irish cream syrup, and milk. Also tasty iced (tall only).",
    details: ["Soy milk, almond milk or coconut milk + .75", "Oat milk + .80"],
  },
  {
    name: "Lavender Matcha Latte",
    price: "$4.75 short $5.50 tall",
    description:
      "A great pick me up without the jitters! A refreshing blend of ceremonial grade matcha tea, all-natural lavender syrup and steamed milk. Also tasty iced (tall only)",
    details: ["Soy milk, almond milk or coconut milk + .75", "Oat milk + .80"],
  },
  {
    name: "Iced Dirty Chai Latte",
    price: "$5.00",
    description:
      "What's better than a chai latte? A dirty chai! Made with organic Oregon Chai, milk, cinnamon, and a shot of espresso served over ice. Also available hot (short $4.50 / tall $5.00).",
    details: ["Soy milk, almond milk or coconut milk + .75", "Oat milk + .80"],
  },
  {
    name: "Green Apple Italian Soda",
    price: "$3.50",
    description:
      "Do you like green apple jolly ranchers? Then you will love our Green Apple Italian soda. A refreshing blend of all-natural green apple syrup with sparkling soda. Carol's favorite!",
    details: [
      "Other Italian Soda flavors: raspberry, cherry, strawberry, blackberry, peach, mango, pina colada, pineapple, peach rose, or spicy mango.",
      "Add whipped cream for .50",
    ],
  },
  {
    name: "Fresh Squeezed Lemonade",
    price: "$3.50",
    description:
      "It's back! There's nothing quite like a refreshing glass of fresh squeezed lemonade.",
    details: [
      "Add blackberry, lavender, peach, strawberry, raspberry, cherry or mango flavor shot + .75",
    ],
  },
  {
    name: "Yellow & Blue Herbal Hot Tea",
    price: "$3.50",
    description:
      "An herbal blend that combines chamomile, lavender, and cornflowers.. Simple, soothing, and caffeine-free.",
  },
];

// Summer Specials (food)
const summerSpecials: MenuItem[] = [
  {
    name: "Caprese & Baguette",
    price: "$12.75",
    description:
      "A medley of mozzarella, tomatoes, and fresh basil from Carol's garden tossed with roasted garlic olive oil and seasonings on a bed of fresh spinach. Topped with balsamic glaze and served with fresh baguette (not GF).",
    isGlutenFree: true,
  },
  {
    name: "Mango Salsa Guacamole",
    price: "$11.50",
    description:
      "A blend of mango salsa and guacamole served with tortilla chips and a lime wedge.",
    isGlutenFree: true,
    isVegan: true,
  },
  {
    name: "Berry Mint Watermelon Salad",
    price: "$13.75",
    description:
      "Fresh diced watermelon topped with blueberries, sliced almonds, fresh mint from Carol's herb wall, goat cheese, blueberry preserves, and Grand Fete's chocolate balsamic. Served on a bed of fresh spinach. Vegan without goat cheese.",
    isGlutenFree: true,
  },
  {
    name: "Pineapple Strawberry Salad",
    price: "$14.50 ",
    description:
      "Fresh pineapple and strawberries, red onion, walnuts, and feta on spring greens. Served with pineapple strawberry vinaigrette, made with Grand Fete pineapple balsamic, and fresh baguette (not GF). Vegan without feta.",
    isGlutenFree: true,
  },
  {
    name: "Italian Pasta Salad",
    price: "$15.75",
    description:
      "Homemade pasta salad on top of fresh spinach. Made with Tinkyada gluten-free brown rice pasta, roasted red pepper, red onion, salami, pepperoni, and balsamic vinaigrette. Topped with parmesan cheese and fresh basil from Carol's garden. Served with gluten free crackers. Vegan without cheese.",
    isGlutenFree: true,
  },
  {
    name: "Greek Quinoa Salad",
    price: "$13.75",
    description:
      "Red quinoa mixed with diced Roma tomato, diced cucumber, red onions, feta, and Greek dressing. Topped with kalamata olives and banana peppers. Served with fresh baguette.",
    isGlutenFree: true,
  },
  {
    name: "Chicken Salad Lettuce Wraps",
    price: "$13.25",
    description:
      "Homemade white meat chicken salad on top of romaine lettuce leaves. Choose ONE of the 2 flavors. Pesto Chicken Salad, topped with parmesan and balsamic glaze, or Buffalo Chicken Salad, topped with blue cheese and green onions. Served with a side of veggies and lemon dill ranch dip.",
    details: ["Add a warm croissant for $2"],
    isGlutenFree: true,
  },
  {
    name: "Chipotle Club Wrap",
    price: "$13.25",
    description:
      "Romaine iceberg blend, bacon, rotisserie chicken, tomato, red onion, blue cheese, and chipotle ranch sauce wrapped in a spinach tortilla. Served with veggies and lemon dill ranch.",
    isSpecial: true,
  },
  {
    name: "EJ's Pepperoni Sandwich",
    price: "$13.25",
    description:
      "Pepperoni, spicy giardiniera vegetables, EJ's Pizzeria's homemade marinara sauce, and double provolone cheese. Served on white flatbread with a side of veggies and lemon dill ranch dip.",
    isSpecial: true,
  },
  {
    name: "Adult PB&J with Chicken",
    price: "$14.25",
    description:
      "From The Ground Up Farm's Hinicker's Honey Roasted Peanut Butter, Terrapin Ridge Farm's Blueberry Bourbon Pecan Jam, warm rotisserie chicken, and Havarti cheese on toasted white ciabatta.",
    isSpecial: true,
  },
];

const summerSpecialsSelections: MenuSelection[] = [
  { title: "FEATURED BEVERAGES", items: featuredBeverages },
  {
    title: "SUMMER SPECIALS",
    notes: [
      "Most menu items can be prepared gluten free with the substitution of GF crackers (for baguette), GF bread or a GF wrap for an upcharge. Please let us know of any food sensitivities; we will do our best to accommodate.",
    ],
    items: summerSpecials,
  },
];

export const summerSpecialsMenu: MenuSection = {
  menuTitle: "SUMMER SPECIALS",
  menuSelections: summerSpecialsSelections,
};
