import { zodResolver } from "@hookform/resolvers/zod";
import {
  Control,
  Controller,
  FieldErrors,
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { GlutenFreeIcon, VeganIcon } from "~/components/svg";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { parseHTML } from "~/lib/parseHTML";
import {
  formMenuSection,
  MenuFormSelection,
  MenuFormValues,
} from "./formSchema";
import { createContext, useContext } from "react";
import { MenuSelection } from "../Menu";

type MenuFormContextProps = {
  control: Control<MenuFormValues>;
  register: UseFormRegister<MenuFormValues>;
  setValue: UseFormSetValue<MenuFormValues>;
  errors: FieldErrors<MenuFormValues>;
  menuSelectionsWatch: MenuSelection[];
};

// Menu Form Context
const MenuFormContext = createContext<MenuFormContextProps | null>(null);

// Menu Form Context Hook
function useMenuForm() {
  const context = useContext(MenuFormContext);

  if (!context)
    throw new Error("useMenuForm must be used within a <MenuForm />");

  return context;
}

export default function MenuForm() {
  // Menu html submission
  const handleFileSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // file
    const fileInput =
      e.currentTarget.querySelector<HTMLInputElement>("#menu-file");
    const file = fileInput?.files?.[0];

    // return null if no file is selected
    if (!file) {
      console.error("No file selected");
      return;
    }

    // Read the file as text
    const text = await file.text();

    // parse file html
    const parsedMenuSelections = parseHTML(text);

    console.log("sections", parsedMenuSelections);

    // Replace all form values with parsed data
    reset({
      menuTitle: "",
      menuDocumentLink: "",
      menuSelections: parsedMenuSelections.map((section) => ({
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

  // Menu Form Submission
  const handleMenuSubmit: SubmitHandler<MenuFormValues> = (data) => {
    console.log("data submitted");
    console.log(data);
    // TODO: Add functionality with DB
  };

  // react-hook-form useForm hook
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

  // Menu object that updates on field changes
  const menuSelectionsWatch = watch("menuSelections");

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
    const updatedNotes = [...(menuSelectionsWatch[menuIndex].notes || ""), ""];
    setValue(`menuSelections.${menuIndex}.notes`, updatedNotes);
  };

  return (
    <>
      {/* TODO: Make this a better UX */}
      <form onSubmit={handleFileSubmit}>
        <Label htmlFor="menu-file">Menu</Label>
        <Input id="menu-file" type="file" accept=".html" />
        <Button>Upload</Button>
      </form>

      {/* Menu Form */}
      <MenuFormContext.Provider
        value={{ control, register, setValue, errors, menuSelectionsWatch }}
      >
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
                    {menuSelectionsWatch[menuIndex]?.notes?.map(
                      (_, noteIndex) => (
                        <MenuNotesField
                          parentIndex={menuIndex}
                          menuSelections={menuSelectionsWatch}
                          noteIndex={noteIndex}
                          key={noteIndex}
                        />
                      ),
                    )}
                  </div>
                  <Button type="button" onClick={() => addNewNote(menuIndex)}>
                    Add Note
                  </Button>

                  {/* Menu Items */}
                  <MenuItemsField parentFieldIndex={menuIndex} />

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
      </MenuFormContext.Provider>
    </>
  );
}

function MenuNotesField({
  parentIndex,
  noteIndex,
  menuSelections,
}: {
  parentIndex: number;
  noteIndex: number;
  menuSelections: MenuFormSelection[];
}) {
  const { setValue, register, errors } = useMenuForm();
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

// Menu Items Field Component
function MenuItemsField({ parentFieldIndex }: { parentFieldIndex: number }) {
  // useFormFunctions from parent
  const { control, register, setValue, menuSelectionsWatch, errors } =
    useMenuForm();

  // useFieldArray hook
  const {
    fields: itemFields,
    append: appendItem,
    remove: removeItem,
  } = useFieldArray({
    control,
    name: `menuSelections.${parentFieldIndex}.items`,
  });

  const addNewDetail = (menuIndex: number, itemIndex: number) => {
    const updatedDetails = [
      ...(menuSelectionsWatch[menuIndex].items[itemIndex].details || []),
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
                menuSelectionsWatch[parentFieldIndex].items[itemIndex]
                  .isSpecial && "border-2 border-double border-feldgrau p-2"
              }`}
            >
              {menuSelectionsWatch[parentFieldIndex].items[itemIndex]
                .isGlutenFree && <GlutenFreeIcon />}
              {menuSelectionsWatch[parentFieldIndex].items[itemIndex]
                .isVegan && <VeganIcon />}
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
                {menuSelectionsWatch[parentFieldIndex]?.items?.[
                  itemIndex
                ]?.details?.map((_, detailIndex) => (
                  <MenuDetailsField
                    key={detailIndex}
                    parentMenuIndex={parentFieldIndex}
                    itemIndex={itemIndex}
                    detailIndex={detailIndex}
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

// Menu Details Field Component
function MenuDetailsField({
  parentMenuIndex,
  itemIndex,
  detailIndex,
}: {
  parentMenuIndex: number;
  itemIndex: number;
  detailIndex: number;
}) {
  const { register, setValue, errors, menuSelectionsWatch } = useMenuForm();
  const removeDetail = () => {
    const updatedDetails = [
      ...(menuSelectionsWatch[parentMenuIndex].items[itemIndex].details || []),
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
