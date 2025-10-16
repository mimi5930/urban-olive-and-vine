import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { z } from "zod";
import { MenuSelection } from "~/components/Menu";
import { GlutenFreeIcon, VeganIcon } from "~/components/svg";
// import HoursForm from "~/components/Forms/HoursForm";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const formMenuItem = z.object({
  name: z.string().min(1, "Menu item must have a name"),
  description: z.string().optional(),
  details: z.array(z.string().min(1, "Detail must have text")).optional(),
  price: z.string().optional(),
  isVegan: z.boolean().optional(),
  isGlutenFree: z.boolean().optional(),
  isSpecial: z.boolean().optional(),
});

const formMenuSelection = z.object({
  title: z.string().min(1, "The menu section must have a title"),
  notes: z.array(z.string().min(1, "Note must have text")).optional(),
  items: z
    .array(formMenuItem)
    .min(1, "Each section must have at least one menu item"),
});

const formMenuSection = z.object({
  menuTitle: z.string().min(1, "The menu must have a title"),
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

    // Replace all form values with parsed data
    reset({
      menuTitle: "",
      menuDocumentLink: "",
      menuSelections: sections.map((section) => ({
        title: section.title,
        notes: section.notes ?? [],
        items: section.items.map((item) => ({
          name: item.name,
          description: item.description ?? "",
          details: item.details ?? [],
          price: item.price ?? "",
          isVegan: false,
          isGlutenFree: false,
          isSpecial: false,
        })),
      })),
    });
  };

  const handleMenuSubmit: SubmitHandler<MenuFormValues> = (data) => {
    console.log("data submitted");
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    reset,
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
        onSubmit={handleSubmit(handleMenuSubmit)}
        className="mb-14 flex flex-col justify-center gap-4 px-10"
      >
        {/* Menu Title Input */}
        <div className="flex w-48 flex-wrap gap-4 rounded-md bg-feldgrau p-4 text-white">
          <Label htmlFor="menu-title" className="text-bold">
            MENU TITLE
          </Label>
          <Input
            id="menu-title"
            type="text"
            className="bg-white text-black"
            {...register("menuTitle")}
            placeholder="SUMMER SPECIALS"
          />
        </div>
        {/* Menu Title Error Message */}
        <p className="text-red-500">{errors.menuTitle?.message}</p>

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
                <Label
                  htmlFor={`menu-selection-title-${menuSelection.id}`}
                  className="text-2xl font-semibold uppercase"
                >
                  Menu Section Title
                </Label>
                <Input
                  id={`menu-selection-title-${menuSelection.id}`}
                  {...register(`menuSelections.${menuIndex}.title`)}
                  className="mb-2 bg-white"
                  placeholder="SANDWICHES & WRAPS"
                />
                {/* Menu Section Title Error */}
                <p className="text-sm text-red-500">
                  {errors.menuSelections?.[menuIndex]?.title?.message}
                </p>
                <div className="border-b-8 border-double border-feldgrau" />
              </div>

              {/* Notes */}
              <div className="mb-4">
                <Label className="mr-4">Notes</Label>
                <div className="divide-y">
                  {menuSelections[menuIndex]?.notes?.map((_, noteIndex) => (
                    <MenuNotesField
                      parentIndex={menuIndex}
                      menuSelections={menuSelections}
                      noteIndex={noteIndex}
                      register={register}
                      setValue={setValue}
                      key={noteIndex}
                      errors={errors}
                    />
                  ))}
                </div>
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
                  errors={errors}
                />

                {/* Remove menu section */}
                <Button
                  type="button"
                  variant={"destructive"}
                  className="mt-4"
                  onClick={() => removeHandler(menuIndex)}
                >
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
        <Button type="submit">Submit</Button>
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
  errors,
}: {
  parentIndex: number;
  noteIndex: number;
  menuSelections: MenuFormSelection[];
  register: UseFormRegister<MenuFormValues>;
  setValue: UseFormSetValue<MenuFormValues>;
  errors: FieldErrors<MenuFormValues>;
}) {
  const removeNote = () => {
    // Remove the note at this index
    const updatedNotes = [...(menuSelections[parentIndex].notes || "")];
    updatedNotes.splice(noteIndex, 1);
    setValue(`menuSelections.${parentIndex}.notes`, updatedNotes);
  };

  return (
    <div>
      <div className="flex gap-2 py-2">
        <Input
          {...register(`menuSelections.${parentIndex}.notes.${noteIndex}`)}
          className="bg-white"
          placeholder="Choice of ciabatta or white or wheat flatbread."
        />
        <Button
          type="button"
          onClick={() => removeNote()}
          variant="destructive"
        >
          Remove
        </Button>
      </div>
      <p className="text-sm text-red-500">
        {errors.menuSelections?.[parentIndex]?.notes?.[noteIndex]?.message}
      </p>
    </div>
  );
}

function MenuItemsField({
  control,
  register,
  parentFieldIndex,
  setValue,
  watch,
  errors,
}: {
  control: Control<MenuFormValues>;
  register: UseFormRegister<MenuFormValues>;
  parentFieldIndex: number;
  setValue: UseFormSetValue<MenuFormValues>;
  watch: UseFormWatch<MenuFormValues>;
  errors: FieldErrors<MenuFormValues>;
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
    <div className="mt-4 rounded-sm border-2 p-8">
      <h2 className="text-2xl font-semibold">Menu Items</h2>
      <p className="text-sm text-red-500">
        {errors.menuSelections?.[parentFieldIndex]?.items?.message}
      </p>
      {itemFields.map((item, itemIndex) => {
        return (
          <div key={item.id} className="my-4">
            <h3
              className={`flex items-center gap-1 font-semibold ${
                menuSelections[parentFieldIndex].items[itemIndex].isSpecial &&
                "border-2 border-double border-feldgrau p-2"
              }`}
            >
              {menuSelections[parentFieldIndex].items[itemIndex]
                .isGlutenFree && <GlutenFreeIcon />}
              {menuSelections[parentFieldIndex].items[itemIndex].isVegan && (
                <VeganIcon />
              )}
              Menu Item {itemIndex + 1}
            </h3>
            <div className="flex w-full gap-4">
              {/* Item name */}
              <div className="flex-grow">
                <Label htmlFor={`menu-item-name-${item.id}`}>Name</Label>
                <Input
                  id={`menu-item-name-${item.id}`}
                  {...register(
                    `menuSelections.${parentFieldIndex}.items.${itemIndex}.name`,
                  )}
                  className="bg-white"
                  placeholder="Sailor Mercy Elderberry Lemonade"
                />
                {/* Menu Item Name Error */}
                <p className="text-sm text-red-500">
                  {
                    errors.menuSelections?.[parentFieldIndex]?.items?.[
                      itemIndex
                    ]?.name?.message
                  }
                </p>
              </div>

              {/* Price */}
              <div className="flex-grow">
                <Label htmlFor={`menu-item-price-${item.id}`}>Price</Label>
                <Input
                  className="bg-white"
                  id={`menu-item-price-${item.id}`}
                  {...register(
                    `menuSelections.${parentFieldIndex}.items.${itemIndex}.price`,
                  )}
                  placeholder="$4.50 short $5.00 tall"
                />
              </div>
            </div>

            {/* Item description */}
            <div>
              <Label htmlFor={`menu-description-${item.id}`}>Description</Label>
              <Textarea
                id={`menu-description-${item.id}`}
                {...register(
                  `menuSelections.${parentFieldIndex}.items.${itemIndex}.description`,
                )}
                className="bg-white"
                placeholder='Locally made and "small batched with love." 8 oz bottle of delicious springtime flavor!'
              />
            </div>

            {/* Item Details */}
            <div className="my-2">
              <Label>Extra Details</Label>
              <div className="flex flex-col gap-2">
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
                    errors={errors}
                  />
                ))}
              </div>
            </div>
            <Button
              type="button"
              onClick={() => addNewDetail(parentFieldIndex, itemIndex)}
            >
              Add Detail
            </Button>

            {/* Vegan, Gluten Free, and Special Radios */}
            <div className="mt-2 flex flex-col gap-2">
              {/* Vegan */}
              <div className="flex items-center gap-1">
                <Controller
                  control={control}
                  name={`menuSelections.${parentFieldIndex}.items.${itemIndex}.isVegan`}
                  render={({ field }) => (
                    <>
                      <Label htmlFor={`vegan-${item.id}`}>
                        Menu Item is Vegan
                      </Label>
                      <Checkbox
                        id={`vegan-${item.id}`}
                        checked={!!field.value}
                        onCheckedChange={(checked) => field.onChange(!!checked)}
                      />
                    </>
                  )}
                />
              </div>

              {/* Gluten Free */}
              <div className="flex items-center gap-1">
                <Controller
                  control={control}
                  name={`menuSelections.${parentFieldIndex}.items.${itemIndex}.isGlutenFree`}
                  render={({ field }) => (
                    <>
                      <Label htmlFor={`GF-${item.id}`}>
                        Menu Item is Gluten Free
                      </Label>
                      <Checkbox
                        id={`GF-${item.id}`}
                        checked={!!field.value}
                        onCheckedChange={(checked) => field.onChange(!!checked)}
                      />
                    </>
                  )}
                />
              </div>

              {/* Special */}
              <div className="flex items-center gap-1">
                <Controller
                  control={control}
                  name={`menuSelections.${parentFieldIndex}.items.${itemIndex}.isSpecial`}
                  render={({ field }) => (
                    <>
                      <Label htmlFor={`special-${item.id}`}>
                        Menu Item is a Special
                      </Label>
                      <Checkbox
                        id={`special-${item.id}`}
                        checked={!!field.value}
                        onCheckedChange={(checked) => field.onChange(!!checked)}
                      />
                    </>
                  )}
                />
              </div>
            </div>

            {/* Remove Menu Item */}
            <Button
              type="button"
              variant="destructive"
              className="my-2"
              onClick={() => removeItem(itemIndex)}
            >
              Remove Menu Item {itemIndex + 1}
            </Button>
          </div>
        );
      })}

      {/* Append Menu Item */}
      <Button
        type="button"
        onClick={() => appendItem({ name: "", details: [] })}
      >
        Add Menu Item
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
  errors,
}: {
  parentMenuIndex: number;
  itemIndex: number;
  detailIndex: number;
  menuSelections: MenuFormSelection[];
  register: UseFormRegister<MenuFormValues>;
  setValue: UseFormSetValue<MenuFormValues>;
  errors: FieldErrors<MenuFormValues>;
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
      <div className="flex items-center gap-2">
        <p>— </p>
        <Input
          className="bg-white"
          {...register(
            `menuSelections.${parentMenuIndex}.items.${itemIndex}.details.${detailIndex}`,
          )}
          placeholder="Oat milk + .80"
        />
        <Button
          type="button"
          onClick={() => removeDetail()}
          variant="destructive"
        >
          Remove
        </Button>
      </div>
      <p className="text-sm text-red-500">
        {
          errors.menuSelections?.[parentMenuIndex]?.items?.[itemIndex]
            ?.details?.[detailIndex]?.message
        }
      </p>
    </div>
  );
}
