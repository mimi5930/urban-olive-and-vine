import { z } from "zod";

export const formMenuItem = z.object({
  name: z.string().min(1, "Menu item must have a name"),
  description: z.string().optional(),
  details: z.array(z.string().min(1, "Detail must have text")).optional(),
  price: z.string().optional(),
  isVegan: z.boolean().optional(),
  isGlutenFree: z.boolean().optional(),
  isSpecial: z.boolean().optional(),
});

export const formMenuSelection = z.object({
  title: z.string().min(1, "The menu section must have a title"),
  notes: z.array(z.string().min(1, "Note must have text")).optional(),
  items: z
    .array(formMenuItem)
    .min(1, "Each section must have at least one menu item"),
});

export const formMenuSection = z.object({
  menuTitle: z.string().min(1, "The menu must have a title"),
  menuSelections: z.array(formMenuSelection),
  menuDocumentLink: z.string().optional(),
});

export type MenuFormValues = z.infer<typeof formMenuSection>;
export type MenuFormSelection = z.infer<typeof formMenuSelection>;
