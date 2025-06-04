import { Menus, Specials } from "~/components";
import { Button } from "~/components/ui/button";
import { capitalizeFirstLetter } from "~/lib/utils";
// import menus from "../mockData/urban-menu.json";
import { mockSpecials } from "~/mockData";
import { useState } from "react";
import { MenuSection } from "~/components/Menu";
import { urbanSpecials } from "~/data";

export default function Menu() {
  const menus: MenuSection[] = [
    {
      menuTitle: "SUMMER SPECIALS",
      menuSelections: [
        {
          title: "FEATURED BEVERAGES",
          items: [
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
              details: [
                "Soy milk, almond milk or coconut milk + .75",
                "Oat milk + .80",
              ],
            },
            {
              name: "Spiced Irish Cream White Mocha",
              price: "$4.50 short $5.00 tall",
              description:
                "A rich, creamy confection of espresso, white chocolate (contains dairy), Irish cream syrup, and milk. Also tasty iced (tall only).",
              details: [
                "Soy milk, almond milk or coconut milk + .75",
                "Oat milk + .80",
              ],
            },
            {
              name: "Lavender Matcha Latte",
              price: "$4.75 short $5.50 tall",
              description:
                "A great pick me up without the jitters! A refreshing blend of ceremonial grade matcha tea, all-natural lavender syrup and steamed milk. Also tasty iced (tall only)",
              details: [
                "Soy milk, almond milk or coconut milk + .75",
                "Oat milk + .80",
              ],
            },
            {
              name: "Iced Dirty Chai Latte",
              price: "$5.00",
              description:
                "What's better than a chai latte? A dirty chai! Made with organic Oregon Chai, milk, cinnamon, and a shot of espresso served over ice. Also available hot (short $4.50 / tall $5.00).",
              details: [
                "Soy milk, almond milk or coconut milk + .75",
                "Oat milk + .80",
              ],
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
          ],
        },
        {
          title: "SUMMER SPECIALS",
          notes: [
            "Most menu items can be prepared gluten free with the substitution of GF crackers (for baguette), GF bread or a GF wrap for an upcharge. Please let us know of any food sensitivities; we will do our best to accommodate.",
          ],
          items: [
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
          ],
        },
      ],
    },
    {
      menuTitle: "BREAKFAST",
      menuSelections: [
        {
          title: "WAFFLES",
          notes: [
            "Not your average waffle! Our Norwegian-style waffles are thin and soft, reminiscent of a crepe. When you add our unique twist on fillings, these waffless are out of this world!",
            "served with fresh fruit",
          ],
          items: [
            {
              name: "Nutella & Banana Nordic Waffle",
              price: "$10.25",
              description:
                "Nutella and sliced bananas stuffed in a Nordic Waffle.",
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
          ],
        },
        {
          title: "SCRAMBLES",
          notes: ["served with fresh fruit"],
          items: [
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
              details: [
                "make it vegan by substituting tofu for eggs and no cheese",
              ],
            },
          ],
        },
        {
          title: "SPECIALTIES",
          items: [
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
          ],
        },
        {
          title: "SIDES",
          items: [
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
          ],
        },
      ],
    },
    {
      menuTitle: "MAIN",
      menuSelections: [
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
          items: [
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
          ],
        },

        {
          title: "SMALL PLATES",
          notes: [
            "GF = Gluten Free INGREDIENTS. If GF is desired, GF crackers or bread are available for an upcharge.",
            "Substitute vegan white flatbread for baguette +$1.25",
            "Most menu items can be prepared gluten free with the substitution of GF crackers (for baguette), GF bread or a GF wrap. Please let your server know of any food sensitivities; we will do our best to accommodate.",
          ],
          items: [
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
              details: [
                "No substitutions, please. Subject to product availability.",
              ],
            },
            {
              name: "Muhammara",
              price: "$12.50",
              description:
                "Middle Eastern dip of roasted red peppers, walnuts, pomegranate molasses, and cayenne that is savory, sweet, and spicy with a hint of smokey. Served with veggies and toasted white flatbread (not GF).",
              isGlutenFree: true,
            },
          ],
        },
        {
          title: "SANDWICHES & WRAPS",
          notes: [
            "Sandwiches & wraps served with veggies and lemon dill ranch dip. Add kettle chips for $2.75. Add a small Garden or Caesar salad or cup of soup for $7",
            "Choice of ciabatta or white or wheat flatbread.",
            "All sandwich and wrap ingredients are gluten-free except for bread and where noted. Substitute GF bread or a GF wrap for $3.50",
          ],
          items: [
            {
              name: "Urban Fig & Chicken",
              price: "$13.50",
              description:
                "Rotisserie chicken, fig spread, Havarti, spring mix",
            },
            {
              name: "Grown Up Grilled Cheese",
              price: "$11.00",
              description:
                "Havarti & Swiss cheese, granny smith apples & honey",
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
              details: [
                "can be prepared vegan (including sub tofu for chicken)",
              ],
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
          ],
        },
      ],
    },
    {
      menuTitle: "BEER",
      menuSelections: [
        {
          title: "Domestics",
          items: [{ name: "Michelob Golden Light", price: "$4.50" }],
        },
        {
          title: "Imports",
          items: [
            { name: "Stella Artois Belgium", price: "$5.25" },
            { name: "Corona Premier", price: "$5.25" },
          ],
        },
        {
          title: "Crafts",
          items: [
            {
              name: "Dogfish Head 90-Minute IPA",
              price: "$5.25",
              description: "Imperial IPA",
            },
            {
              name: "Rush River Amber Ale",
              price: "$5.00",
              description:
                "The Unforgiven Amber Ale is smooth and malty and brewed locally in River Falls, WI",
            },
            {
              name: "New Glarus Spotted Cow",
              price: "$5.00",
            },
            {
              name: "New Glarus Raspberry Tart",
              price: "$5.00",
            },
            {
              name: "New Glarus Moon Man",
              price: "$5.00",
              description: "pale ale",
            },
            {
              name: "New Glarus Cabin Fever Honey Lager",
              price: "$5.00",
            },
          ],
        },
        {
          title: "Hard Cider",
          items: [{ name: "Maiden Rock Honeycrisp", price: "$5.25" }],
        },
        {
          title: "Hard Seltzer",
          items: [{ name: "White Claw Black Cherry", price: "$5.00" }],
        },
        {
          title: "Non Alcoholic",
          items: [
            {
              name: "Ask your server for current nonalcoholic beer selection",
              price: "$4.25",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "WINE",
      menuSelections: [
        {
          title: "WHITE WINES",
          notes: ["Glass / Bottle"],
          items: [
            {
              name: "Porch Swing Pink Lemonade Sweet Wine (Bloomington, IN)",
              price: "$8/$28",
              description:
                "Porch Swing Pink Lemonade is made with lemon extract and premium sweet wine. Ready-to-drink, delightfully sweet and light, with low ABV and a hint of bubble. Carol's favorite!!",
            },
            {
              name: "Seaglass Riesling (Monterey, CA)",
              price: "$9/$32",
              description:
                "Juicy apricot, peaches and melon with a hint of honeysuckle.",
            },
            {
              name: "Ferrari Carano Sauvignon Blanc (Sonoma County, CA)",
              price: "$11/$38",
              description:
                "Aromas and flavors of grapefruit, peach, melon and lemon chiffon.",
            },
            {
              name: "Ca'Stele Pinot Grigio (Italy)",
              price: "$9/$32",
              description:
                "Super crisp with bright flavors of pear, apple and citrus in each sip. Estate grown.",
            },
            {
              name: "Two Birds One Stone White Blend (France)",
              price: "$10/$34",
              description:
                "Blend of Colombard and Uni Blanc grapes, this wine has a light and glossy lemon hue. Delicate aroma of nectarine, grapefruit, and citrus fruits. Crisp and light-bodied, with a pleasant minerality. Woman owned. ",
            },
            {
              name: "Forte Do Cego Vinho Verde Rose (Portugal)",
              price: "$8/$28",
              description:
                "Delicate red berry flavors with a hint of floral notes. Light body and refreshing acidity. ",
            },
            {
              name: "Fly By Chardonnay (California)",
              price: "$10/$34",
              description:
                "Notes of toasted almonds, green apples and pear. Rich and creamy. ",
            },
          ],
        },
        {
          title: "SPARKLING WINES",
          notes: ["Splits"],
          items: [
            {
              name: "Castello del Poggio Moscato (Italy) [187ml]",
              price: "$9",
              description:
                "Sweet and sparkling peach, honey and white flowers.",
            },
            {
              name: "Ruffino Prosecco (Italy) [187ml]",
              price: "$8",
              description:
                "100% Glera. The bouquet is fragrant and bursting with fruit notes of apples, pears and citrus. Crisp, clean and delicate with fine bubbles on the palate.",
            },
          ],
        },
        {
          title: "RED WINES",
          notes: [
            "- Bottomless House Wine $10 - While you dine, and unavailable with split meals. Available Mon - Sat from 11am - 4-pm. Some restrictions apply.",
            "Glass / Bottle",
          ],
          items: [
            {
              name: "Adorn Pinot Noir (California)",
              price: "$9/$32",
              description:
                "Sourced from a selection of heritage vineyards, this wine exhibits great textural richness with notes of cherry, raspberry and vanilla.",
            },
            {
              name: "Dona Paula Estate Malbec (Argentina)",
              price: "$11/$38",
              description:
                "Intense violet color and pure aromas of black fruits, violets and spices. Firm tannins balance with fresh acidity. Vegan.",
            },
            {
              name: "Meiomi Red Blend (California)",
              price: "$11/$38",
              description:
                "A well balanced, richly flavored, and deliciously complex wine. Aromas of dark, jammy fruit and sweet vanilla with a hint of dark roast mocha and blackberry. ",
            },
            {
              name: "Josh Craftsman's Collection Cabernet (California)",
              price: "$9/$32",
              description:
                "This wine bursts with flavors of black cherry and blackberry and scents of oak and vanilla.",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "BEVERAGES",
      menuSelections: [
        {
          title: "Iced Tea",
          notes: [
            "Choose from one of our in-house brewed teas: Classic black or daily featured flavors",
            "Served in your own Gurgle Pot pitcher or to go",
          ],
          items: [{ name: "Iced Tea", price: "$3.50" }],
        },
        {
          title: "Premium Beverages",
          notes: [
            "Choose from one of our in-house brewed teas: Classic black or daily featured flavors",
            "Served in your own Gurgle Pot pitcher or to go",
          ],
          items: [
            {
              name: "Sprecher Soda",
              price: "$2.50",
              description:
                "Sprecher Brewery is a brewery in Glendale, Wisconsin, USA. It was founded in 1985 in Milwaukee by Randal Sprecher, and is Milwaukee's first craft brewery since Prohibition. Sprecher produces an assortment of beers, flavored malt beverages and sodas. Choose from these flavors: Root Beer, Cream Soda, Orange Dream Soda, Seasonal Flavor",
            },
            {
              name: "Cheerwine",
              price: "$2.50",
              description:
                'Cheerwine is a cherry-flavored soft drink produced by Carolina Beverage Corporation of Salisbury, North Carolina. It has been produced since 1917, claiming to be "the oldest continuing soft drink company still run by the same family".',
            },
            {
              name: "Kombucha",
              price: "$5.00",
              description: "Ask for today's flavors",
            },
            {
              name: "Sailor Mercy Elderberry Lemonade (seasonal)",
              price: "$5.00",
              description: "Locally produced in small batches with love!",
            },
          ],
        },
        {
          title: "Sodas, Sparkling Water, Lemonade, Juice",
          items: [
            {
              name: "Coke, Diet Coke, Dr. Pepper, Diet Dr. Pepper, Sprite or Canada Dry Ginger Ale",
              price: "$1.50",
            },
            {
              name: "San Pellegrino Sparkling Fruit Beverage",
              price: "$2.00",
            },
            {
              name: "Perrier Bottled Sparkling Water",
              price: "$2.50",
            },
            {
              name: "Lemonade",
              price: "$3.50",
              details: [
                "Add a flavor shot of  premium 1883 all-natural syrup. - .75",
              ],
            },
            {
              name: "Arnold Palmer (½ Lemonade, ½ Iced Tea)",
              price: "$3.50",
            },
            {
              name: "Italian Soda",
              price: "$3.50",
              description:
                "A refreshing blend of all-natural syrup with sparkling soda. Available in Raspberry, Cherry, Strawberry, Peach and seasonal flavors.  Add whipped cream for .50",
            },
            {
              name: "Juice",
              price: "$2.50",
              description: "Orange, Apple or Cranberry ",
            },
            {
              name: "Juice Box",
              price: "$1.00",
            },
          ],
        },
        {
          title: "Hot Chocolate (Seasonal)",
          notes: ["Gourmet Hot Chocolate with Whipped Cream"],
          items: [
            {
              name: "Original Milk Chocolate, Caramel, Peppermint, Cherry or Coconut",
              price: "$4.50",
            },
            {
              name: "Mayan Hot Chocolate (spicy! with Sweet Heat)",
              price: "$4.50",
            },
            {
              name: "Child Sized",
              price: "$3.50",
            },
          ],
        },
        {
          title: "Coffee",
          notes: ["House Blend, French Roast, or Decaf"],
          items: [
            {
              name: "In house mug with a refill",
              price: "$3.00",
            },
            {
              name: "To go",
              price: "$2.50 short $3.00 tall",
            },
            {
              name: "Depth Charge",
              price: "$4.00",
              description: "In house mug with a shot of espresso",
            },
          ],
        },
        {
          title: "Tea",
          notes: ["Large selection of Hot Teas"],
          items: [
            {
              name: "Pot of Tea",
              price: "$3.50",
              description: "in house or to go",
            },
          ],
        },
        {
          title: "Hand Crafted Espresso & Tea Beverages",
          notes: ["HOT or ICED (Iced is Tall only", "Short / Tall-Iced"],
          items: [
            {
              name: "Latte",
              price: "$3.75/$4.25",
              description: "Espresso, steamed milk",
            },
            {
              name: "Cappuccino (served hot only)",
              price: "$3.50/$4.00",
              description: "Espresso, steamed milk, froth",
            },
            {
              name: "Mocha  - Dark or White Chocolate",
              price: "$4.25/$4.75",
              description: "Espresso, steamed milk, Ghiradelli Chocolate",
            },
            {
              name: "Breve",
              price: "$4.25/$4.75",
              description: "Espresso, steamed half and half",
            },
            {
              name: "Miel",
              price: "$3.90/$4.40",
              description: "Espresso, steamed milk, honey, nutmeg",
            },
            {
              name: "Café Au Lait",
              price: "$3.50/$3.80",
              description: "Coffee, steamed milk",
            },
            {
              name: "Americano",
              price: "$2.75/$3.50",
              description: "Espresso & hot water",
            },
            {
              name: "Matcha Latte",
              price: "$4.75/$5.10",
              description:
                "Matcha tea, steamed milk, a hint of vanilla syrup, froth",
            },
            {
              name: "Chai Latte",
              price: "$3.75/$4.25",
              description: "Organic Oregon Chai, steamed milk, cinnamon",
            },
            {
              name: "Single Shot of Espresso",
              price: "$1.20",
            },
            {
              name: "Double Shot of Espresso",
              price: "$2.40",
            },
          ],
        },
        {
          title: "Turmeric Latte",
          items: [
            {
              name: "Golden Root Organic Turmeric Latte 8 oz",
              price: "$4.00",
              description:
                "Choose from Original or Spicy Unsweetened. A warm, delicious mix of coconut milk powder, coconut sugar (original only), turmeric powder, ginger powder, black pepper, pink salt, cayenne pepper, steamed with your favorite milk and topped with cinnamon. Caffeine free.",
            },
          ],
        },
        {
          title: "Extras",
          items: [
            {
              name: "Soy or Almond or Coconut milk",
              price: "$0.75",
            },
            {
              name: "Oat milk",
              price: "$0.80",
            },
            {
              name: "Add extra shot of espresso in beverage",
              price: "$1.00",
            },
            {
              name: "Add whipped cream",
              price: "$0.50",
            },
            {
              name: "Add a flavor shot of premium 1883 Syrup",
              price: "$0.75",
              description:
                "Almond, Blackberry (seasonal), Caramel, Cherry, Chocolate, Cinnamon, Coconut, Hazelnut, Lavender, Mango (seasonal), Peach, Peppermint, Pineapple  (seasonal), Pumpkin Spice (seasonal), Raspberry, Strawberry, Vanilla",
            },
            {
              name: "Sugar Free premium 1883 Syrup",
              description:
                "Almond, Blackberry (seasonal), Caramel, Cherry, Chocolate, Cinnamon, Coconut, Hazelnut, Lavender, Mango (seasonal), Peach, Peppermint, Pineapple  (seasonal), Pumpkin Spice (seasonal), Raspberry, Strawberry, Vanilla",
            },
            {
              name: "Also Available",
              description: "Torani Sweet Heat",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "COFFEE BAR",
      menuSelections: [
        {
          title: "Hand Crafted Espresso & Tea Beverages",
          notes: ["HOT or ICED (Iced is Tall only", "Short / Tall-Iced"],
          items: [
            {
              name: "Latte",
              price: "$3.75/$4.25",
              description: "Espresso, steamed milk",
            },
            {
              name: "Cappuccino (served hot only)",
              price: "$3.50/$4.00",
              description: "Espresso, steamed milk, froth",
            },
            {
              name: "Mocha  - Dark or White Chocolate",
              price: "$4.25/$4.75",
              description: "Espresso, steamed milk, Ghiradelli Chocolate",
            },
            {
              name: "Breve",
              price: "$4.25/$4.75",
              description: "Espresso, steamed half and half",
            },
            {
              name: "Miel",
              price: "$3.90/$4.40",
              description: "Espresso, steamed milk, honey, nutmeg",
            },
            {
              name: "Café Au Lait",
              price: "$3.50/$3.80",
              description: "Coffee, steamed milk",
            },
            {
              name: "Americano",
              price: "$2.75/$3.50",
              description: "Espresso & hot water",
            },
            {
              name: "Matcha Latte",
              price: "$4.75/$5.10",
              description:
                "Matcha tea, steamed milk, a hint of vanilla syrup, froth",
            },
            {
              name: "Chai Latte",
              price: "$3.75/$4.25",
              description: "Organic Oregon Chai, steamed milk, cinnamon",
            },
            {
              name: "Single Shot of Espresso",
              price: "$1.20",
            },
            {
              name: "Double Shot of Espresso",
              price: "$2.40",
            },
          ],
        },
        {
          title: "Turmeric Latte",
          items: [
            {
              name: "Golden Root Organic Turmeric Latte 8 oz",
              price: "$4.00",
              description:
                "Choose from Original or Spicy Unsweetened. A warm, delicious mix of coconut milk powder, coconut sugar (original only), turmeric powder, ginger powder, black pepper, pink salt, cayenne pepper, steamed with your favorite milk and topped with cinnamon. Caffeine free.",
            },
          ],
        },
        {
          title: "Coffee",
          notes: ["House Blend, French Roast, or Decaf"],
          items: [
            {
              name: "In house mug with a refill",
              price: "$3.00",
            },
            {
              name: "To go",
              price: "$2.50 short $3.00 tall",
            },
            {
              name: "Depth Charge",
              price: "$4.00",
              description: "In house mug with a shot of espresso",
            },
          ],
        },
        {
          title: "Tea",
          notes: ["Large selection of Hot Teas"],
          items: [
            {
              name: "Pot of Tea",
              price: "$3.50",
              description: "in house or to go",
            },
          ],
        },
        {
          title: "Hot Chocolate (Seasonal)",
          notes: ["Gourmet Hot Chocolate with Whipped Cream"],
          items: [
            {
              name: "Original Milk Chocolate, Caramel, Peppermint, Cherry or Coconut",
              price: "$4.50",
            },
            {
              name: "Mayan Hot Chocolate (spicy! with Sweet Heat)",
              price: "$4.50",
            },
            {
              name: "Child Sized",
              price: "$3.50",
            },
          ],
        },
        {
          title: "Extras",
          items: [
            {
              name: "Soy or Almond or Coconut milk",
              price: "$0.75",
            },
            {
              name: "Oat milk",
              price: "$0.80",
            },
            {
              name: "Add extra shot of espresso in beverage",
              price: "$1.00",
            },
            {
              name: "Add whipped cream",
              price: "$0.50",
            },
            {
              name: "Add a flavor shot of premium 1883 Syrup",
              price: "$0.75",
              description:
                "Almond, Blackberry (seasonal), Caramel, Cherry, Chocolate, Cinnamon, Coconut, Hazelnut, Lavender, Mango (seasonal), Peach, Peppermint, Pineapple  (seasonal), Pumpkin Spice (seasonal), Raspberry, Strawberry, Vanilla",
            },
            {
              name: "Sugar Free premium 1883 Syrup",
              description:
                "Almond, Blackberry (seasonal), Caramel, Cherry, Chocolate, Cinnamon, Coconut, Hazelnut, Lavender, Mango (seasonal), Peach, Peppermint, Pineapple  (seasonal), Pumpkin Spice (seasonal), Raspberry, Strawberry, Vanilla",
            },
            {
              name: "Also Available",
              description: "Torani Sweet Heat",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "TEA LIST",
      menuSelections: [
        {
          title: "White Tea",
          notes: ["Pot of Tea ~ in house or to go $3.50"],
          items: [
            {
              name: "Lavender Rose Melange (Organic)",
              description:
                "Organic white tea from Cup of Joy Tea. Lavender and rose are the highlights, with a soft touch of jasmine and slightly minty finish.",
            },
            {
              name: "Heirloom Bartlett Pear",
              description:
                "Silvery white and green Mutan leaves mingle with delicately succulent pieces of pear, apple and peach. Spice notes of nutmeg and 2 kinds of cinnamon add a touch of zing. Contains white tea, peach pieces, pear flavor, nutmeg, cinnamon, white cornflowers, and  peach flavor.",
            },
            {
              name: "Wedding Tea",
              description:
                "Mutan White tea with lemon-vanilla and a touch of pink rosebuds and petals.",
            },
            {
              name: "Winter White Earl Grey",
              description:
                "Combines beautiful Chinese Mutan white tea with the distinctive bergamot citrus fragrance of traditional Earl Grey.",
            },
            {
              name: "Machu Peach-U",
              description:
                "This white tea from China has a prominent peach aroma and a flavor that is very smooth, very peachy, with lots of body.  It is made using White Peony (Bai Mu Dan) white tea. Ingredients: white tea, peach pieces, peach flavor, and calendula petals",
            },
          ],
        },
        {
          title: "Oolong",
          items: [
            {
              name: "Golden Dawn Oolong",
              description:
                "Lovely aromatic oolong from Fujian province of China. The liquor is sweet, floral (think lilacs) and silky with a tiny bit of a mineral edge.",
            },
            {
              name: "Pomegranate Oolong",
              description:
                "Fruity undertones of Ti Quan Yin combine with rich pomegranate flavor.",
            },
            {
              name: "Strawberry Oolong",
              description:
                "This is a wonderfully sweet, smooth, and fruity tea. A semi-curled oolong from Fujian province is blended with flavor to steep up light to medium-bodied with the aroma and taste of fresh strawberries wrapping around you with every sip.",
            },
            {
              name: "Rhubarb Oolong (seasonal)",
              description:
                "This lovely Chinese oolong from Fujian is blended with flavor, rose petals, and rhubarb pieces to produce a tea that steeps up sweet, very smooth, and medium-bodied with a very distinctive fruity-rhubarb tang.",
            },
          ],
        },
        {
          title: "Green Tea",
          items: [
            {
              name: "Clouds & Mist (China)",
              description:
                "Dark green leaf. Exceedingly fresh, slightly sweet, very aromatic.",
            },
          ],
        },
        {
          title: "Flavored Green Tea",
          items: [
            {
              name: "Carrot Cake Green Tea (seasonal)",
              description:
                "Have your cake and eat it, too! This tea balances spicy and sweet notes with a creamy aftertaste. Contains green tea, carrot, natural flavor, apple, and cinnamon.",
            },
            {
              name: "Dragon Pearl Jasmine",
              description:
                "Leaf balls of green and white unfurl to release a highly aromatic bouquet.",
            },
            {
              name: "Green Tea with Thai Flavors-Coconut, Ginger & Vanilla",
              description:
                "An exotic combination of green teas, coconut, ginger, vanilla and lemongrass which make a delicious and distinctive tea blend. Also known as Green with Coconut or Bangkok Green.",
            },
            {
              name: "Blueberry & Green",
              description:
                "Chinese green tea has been artfully blended with lemongrass, blueberry, and vanilla.",
            },
            {
              name: "Moroccan Mint",
              description:
                "Incredibly aromatic! This blend of Gunpowder green tea and spearmint steeps up sweet, smooth, and refreshing.",
            },
            {
              name: "Lemon Ginger Green",
              description:
                "Sweet lemon citrus on a light green tea body with just enough ginger to say hello.  Contains green tea, ginger, lemongrass, lemon peel, and natural flavor.",
            },
            {
              name: "Mango Green",
              description:
                "Smooth, sweet, and silky with an aroma of fresh mango and tropical breezes. Contains green tea, mango flavor, and sunflower blossoms.",
            },
            {
              name: "Cherry Blossom Green",
              description:
                "A blend of green teas and the vibrant flavor of plump, fragrant cherries. Contains green tea, cherry flavor, and vanilla flavor. Contains natural flavors.",
            },
            {
              name: "Pineapple Lime Green",
              description:
                "A light green tea with pineapple sweetness and just enough lime to make everything alright. Contains  green tea, natural flavor, pineapple, and calendula.",
            },
            {
              name: "Prairie Passion",
              description:
                "It is a medium-bodied, slightly sweet tea with a hint of tanginess. Contains black and green tea, papaya, rosehip peels, flavor and sunflower.",
            },
            {
              name: "Minnesota N’Ice",
              description:
                "Tastes like oranges with a floral touch and pairs nicely with a cabin at the lake. Contains black tea, green tea, natural flavors, lemongrass, rose petals, cornflower, and jasmine blossoms.",
            },
          ],
        },
        {
          title: "Dark Tea",
          items: [
            {
              name: "Dark Rose",
              description:
                "This compressed dark tea from Hunan province, China, is medium to full-bodied and smooth with a delicious dusty rose flavor and aroma. Contains Chinese dark tea and rose petals.",
            },
            {
              name: "What is dark tea?",
              description:
                "There are six categories of tea: black, oolong, green, yellow, white, and dark tea. Dark tea is an aged tea from China which has gone through a secondary fermentation process. The manufacture of dark tea dates back to the 1500s. Most dark teas come from three counties (Anhua, Yiqang, and Linxing) in Hunan Province of China. The aroma of dark tea may be slightly earthy, but this typically does not carry over to the flavor. Dark tea can be light to full bodied. It is smooth, with a noticeable sweet, floral flavor.",
            },
          ],
        },
        {
          title: "Black Tea",
          items: [
            {
              name: "Darjeeling",
              description:
                "A blend of 2nd Flush and Autumnal teas. A bright taste with a fragrant nose.",
            },
            {
              name: "English Breakfast",
              description:
                "100% Chinese Keemun. Toasty in aroma, with a taste that is roasty.",
            },
          ],
        },
        {
          title: "Flavored Black Tea",
          items: [
            {
              name: "Holiday (seasonal)",
              description:
                "A holiday favorite! Spiced with citrus, almond, clove and cinnamon.",
            },
            {
              name: "Cranberry Autumn (seasonal)",
              description:
                "A sweet and tart combination of black tea, hibiscus, cranberry, orange pieces, natural cranberry flavor, and natural orange flavor.",
            },
            {
              name: "Sugar Maple (seasonal)",
              description:
                "The name says it all! So sweet & convincing you almost want to pour it on the cakes coming off the griddle. Contains black tea and natural flavor.",
            },
            {
              name: "Earl Grey",
              description:
                "Ceylon black tea with organic oil of bergamot. This makes for a slightly sweet, slightly floral and very satisfying cup of tea.",
            },
            {
              name: "Raspberry Beret",
              description:
                "Thick-bodied, sweet & fruity tea containing black tea, rosehips, natural & artificial flavor, and raspberries.",
            },
            {
              name: "Paris",
              description:
                "A blend of Oil of Bergamot, black currant with warm notes of vanilla and caramel.",
            },
            {
              name: "Earl d’Provence (Organic)",
              description:
                "Custom organic blend from Cup of Joy Tea. Contains black tea, bergamot, lavender, rose, cornflowers, vanilla bean and calendula.",
            },
            {
              name: "Masala Chai",
              description:
                "A traditional Indian chai, this brewed black tea is full-bodied, aromatic, smooth & exotic. Try it with a little milk and sugar for an authentic spiced chai experience.",
            },
            {
              name: "Chocolate Chai Supreme",
              description:
                "Combines the flavors of classic chai with rich chocolate and vanilla. Contains black tea, ginger root, cardamom seeds, chocolate flavor, cardamom flavor, ground cinnamon, nutmeg, cardamom pods, cinnamon chips and vanilla flavor. Contains natural flavors.",
            },
            {
              name: "Peaches and Ginger (also available decaf)",
              description:
                "This blend combines the irresistible flavors of fresh peaches with the 'zing' of ginger. Contains black tea, peach flavor, ginger flavor, peach pieces, and ginger pieces.",
            },
            {
              name: "Chocolate Mint",
              description:
                "Chocolate infused black tea with crisp peppermint leaves.",
            },
            {
              name: "Moon Over Madagascar",
              description:
                "A marvelous blend of China and Ceylon black teas with Bourbon Vanilla from Madagascar. Rich and sumptuous.",
            },
            {
              name: "Hot Cinnamon Spice/Hot Cinnamon Sunset",
              description:
                "Naturally sweet cinnamon, married with sweet clove and orange rind. (also available decaf)",
            },
            {
              name: "Soho",
              description:
                "This blend embodies the flavors of some of Soho’s best sweet shops.   A deliciously mixed black tea with natural and artificial chocolate, coconut and vanilla flavors, amaranth petals.  Light, sweet, nutty.",
            },
          ],
        },
        {
          title: "Caffeine-Free Tea",
          items: [
            {
              name: "Spiced Plum (seasonal)",
              description:
                "A mixture of finely cut hibiscus with cinnamon and plum. Heartier than most herbals, this one has a presence that will surprise you.",
            },
            {
              name: "Pumpkin Spice (seasonal)",
              description:
                "A celebration of autumn harvest , this blend of pumpkin and warming spices is flavorful , yet light bodied.",
            },
            {
              name: "Wonderland Bliss (seasonal) (organic)",
              description:
                "Custom seasonal blend from Cup of Joy. Contains organic dried cranberries, dried currants, dried hibiscus flowers, dried orange peel, cloves, star anise, licorice root and natural plum flavoring. Christmas in a cup!",
            },
            {
              name: "Decaf Hot Cinnamon Spice (seasonal)",
              description:
                "Decaf black tea with cinnamon, sweet cloves, orange peel and cinnamon flavor. An assertive tea but not stimulating!",
            },
            {
              name: "Wellness Spa Blend (organic)",
              description:
                "Soothing and uplifting herbal tisane from Cup of Joy. Contains organic peppermint, sage, lavender, licorice root, lemon verbena.",
            },
            {
              name: "Vanilla Thrilla",
              description:
                "Caffeine-free and creamy sweet. The richness of the vanilla character won’t disappoint. Contains South African rooibos and natural flavor.",
            },
            {
              name: "Ginger Liquorice",
              description:
                "Soothes with the sweet flavor of liquorice, balanced by ginger’s spiciness.",
            },
            {
              name: "Raspberry",
              description:
                "Herbal tisane is a mixture of rosehips, hibiscus, orange peel and raspberry flavor.",
            },
            {
              name: "Red Berries",
              description:
                "Very fruity - made with apple, elderberries, rosehip peels, blackberries, raspberry, hibiscus and sour cherry pieces.",
            },
            {
              name: "Blood Orange",
              description:
                "A blend of dried fruit, with a distinctive twist found in blood oranges. Contains apple pieces, orange peel, rose hips, hibiscus, beet root, safflower petals, marigold petals, orange & raspberry flavor, and grapefruit flavor.",
            },
            {
              name: "Peppermint",
              description:
                "From Oregon, a whispering, lively brew with a fresh finish. Perfect after heavy meals. Mildly cooling and refreshing ",
            },
            {
              name: "Sweet Cinnamon Orange (formerly Montana Gold)",
              description:
                "Spicy-sweet herbal blend that is full-bodied, but caffeine-free.  Cinnamon, orange peel, and clove are blended with rooibos.",
            },
            {
              name: "Birthday Party Tea",
              description:
                "Combines luscious fruit and berry flavors with flowers. Contains rosehips, hibiscus, raspberry, blueberry and pomegranate flavors, marigold, cornflowers, peppermint and vanilla.",
            },
            {
              name: "Chamomile",
              description: "Finest Egyptian chamomile. Mild & naturally sweet.",
            },
            {
              name: "Yellow & Blue",
              description:
                "An herbal blend that combines chamomile, lavender and cornflowers.",
            },
            {
              name: "Rooibos",
              description:
                "This traditional South African drink, also known as “red bush tea.” It has a mild aromatic, slightly citrus sweetness.",
            },
            {
              name: "Ginger Lime Green Rooibos (organic)",
              description:
                "A bright and refreshing blend from Cup of Joy.  Contains organic green rooibos, ginger, lemongrass, lemon myrtle, licorice root, essential orange and lime oils. A staff favorite!",
              isSpecial: true,
            },
            {
              name: "Decaf Peaches & Ginger",
              description:
                "Combines the flavors of juicy peaches and ‘ginger’ zing.  It contains pieces of real peaches and ginger.",
            },
            {
              name: "Lemon Sunset",
              description:
                "A refreshing, lemony blend of organic rooibos, lemongrass, lemon flavor, and lemon pieces.",
            },
            {
              name: "Northern Lights",
              description:
                "Chamomile, rosehips, spearmint, blackberry leaf, raspberry leaf, natural flavor, peppermint, star anise, lavender, lemongrass, stevia, wild cherry bark, lemon peel. (Note: very similar to discontinued Evening in Missoula using natural flavor)",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "YAPPY HOUR",
      menuSelections: [
        {
          title: "Drinks",
          notes: [
            "Every hour is yappy hour for your dog. Featuring treats from Angel's Pet World and Urban's kitchen.",
            "For the safety of our customers & other canine friends, please keep your pup on a leash at all times.",
          ],
          items: [
            {
              name: "Local WI Water",
              price: "Free!",
              description:
                "Nothing but the best! Fresh, locally sourced Hudson tap water for your four-legged friend is available upon request.",
            },
            {
              name: "Bowser Beer",
              price: "$6.00",
              description:
                "Is your dog drinking responsibly?  The answer is “YES!” when you choose Bowser Beer. Contains glucosamine to promote healthy joints.",
              details: ["Available in Pork, Beef or Chicken flavor"],
            },
          ],
        },
        {
          title: "Yappetizers",
          items: [
            {
              name: "Cup of Biscuits - for smaller appetites",
              price: "$.75",
              description: "2 all natural Buddy Biscuits for your buddy",
            },
            {
              name: "Bowl of Biscuits - for larger appetites",
              price: "$1.50",
              description: "4 all natural Buddy Biscuits for hungry dogs",
            },
            {
              name: "Rawhide Alternative Stick (Small)",
              price: "$1.75",
              description:
                "Perfect for smaller dogs! Chicken flavored rawhide alternative is 96% digestible.",
            },
            {
              name: "Homemade Meatballs",
              price: "$2.25",
              description:
                "Two tasty beef and pumpkin meatballs served chilled with dipping sauce.",
            },
            {
              name: "Pig Ear",
              price: "$4.25",
              description:
                "This will keep your furry friend busy while you dine!",
            },
          ],
        },
        {
          title: "Doggy Desserts",
          items: [
            {
              name: "Puppaccino",
              price: "$1.50",
              description: "Whipped cream topped with a treat!",
            },
            {
              name: "Frozen Yogurt Dog Treat",
              price: "$3.50",
              description:
                "Real frozen yogurt for dogs, with billions of special probiotics added per cup, for real health benefits!",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "KID'S MENU (UNDER 10)",
      menuSelections: [
        {
          title: "KID'S MENU (UNDER 10)",
          notes: [
            "Kid's meals include veggies & dip or fruit option.",
            "Sub gluten free bread or wrap +$3",
          ],
          items: [
            {
              name: "Kid's BLT Wrap",
              price: "$8.00",
              description: "with mayonaise",
            },
            {
              name: "Kid's Grilled Cheese",
              price: "$6.75",
            },
            {
              name: "Kid's Ham and Cheddar",
              price: "$7.50",
            },
            {
              name: "Kid's Turkey and Swiss",
              price: "$7.50",
            },
            {
              name: "Kid's Warm PB&J",
              price: "$6.50",
              description: "with strawberry jam",
            },
          ],
        },
      ],
    },
    {
      menuTitle: "DESSERT FEATURES",
      menuSelections: [
        {
          title: "DESSERT FEATURES",
          notes: ["Subject to daily availability"],
          items: [
            {
              name: "Flourless Chocolate Cake",
              price: "$6.25",
              description:
                "It's always a good day for chocolate! Our rich, fudgy flourless chocolate cake is gluten free.",
              isGlutenFree: true,
            },
            {
              name: "Limoncello Marscapone Cake",
              price: "$6.25",
              description:
                "A rich combination of Sicilian lemon infused sponge cake and Italian Mascarpone cream filling, topped with berry drizzle.",
            },
            {
              name: "Chocolate Avocado Pudding",
              price: "$5.50",
              description:
                "A homemade blend of fresh avocado, cocoa, almond milk, agave, and vanilla. Gluten free and dairy free!",
              isGlutenFree: true,
              isVegan: true,
            },
            {
              name: "Mei Mei's Cookie",
              price: "$4.25",
              description:
                "We proudly serve tasty, jumbo cookies from Mei Mei's Cookies & Creamery in River Falls, WI. Baked fresh daily. Ask about today's flavors, including gluten free!",
            },
            {
              name: "Mei Mei's Cookie",
              price: "$4.25",
              description:
                "We proudly serve tasty, jumbo cookies from Mei Mei's Cookies & Creamery in River Falls, WI. Baked fresh daily. Ask about today's flavors, including gluten free!",
            },
            {
              name: "Baklava",
              price: "$4.50",
              description:
                "A warm dessert originating in the Middle East made of phyllo pastry filled with chopped nuts and soaked in honey. Mmmm.",
            },
            {
              name: "Seven Layer Bar",
              price: "$4.25",
              description:
                "Made in-house and gluten friendly. Grab one to take home too.",
              isGlutenFree: true,
            },
            {
              name: "Peanut Butter Crispy Bar",
              price: "$4.25",
              description:
                "Irresistible chocolate covered peanut butter crispy bars, made at Best Maid Cookie Co. in River Falls, WI.",
              isGlutenFree: true,
            },
            {
              name: "Triple Chocolate Cup Cake",
              price: "$4.50",
              description: "A longtime Urban favorite treat.",
            },
            {
              name: "Turnover",
              price: "$4.50",
              description: "Made fresh daily! Ask about today's flavors.",
              isVegan: true,
            },
          ],
        },
      ],
    },
  ];

  const specials = urbanSpecials;
  const [currentMenu, setCurrentMenu] = useState<MenuSection>(menus[0]);

  return (
    <section className="flex size-full flex-col items-center">
      <Specials specials={specials} />
      <section className="flex flex-col items-center justify-center">
        <h2 className="mb-14 mt-28 text-center text-5xl">Our Menus</h2>
        <div className="mb-14 flex flex-wrap justify-center gap-4">
          {menus.map((currentMenu, index) => {
            const { menuTitle: title } = currentMenu;
            return (
              <Button
                size="lg"
                key={index}
                onClick={() => setCurrentMenu(currentMenu)}
              >
                {capitalizeFirstLetter(title)}
              </Button>
            );
          })}
        </div>
        <Menus currentMenu={currentMenu} menus={menus} />
      </section>
    </section>
  );
}
