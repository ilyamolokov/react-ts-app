import { Button } from "@/ui/button";
import { Field, FieldLabel, FieldError } from "@/ui/field";
import { InputGroup, InputGroupInput } from "@/ui/input-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import z from "zod";
import { SORTABLE_COLUMNS_LABEL } from "./product-table-columns";
import { IProduct } from "@/api/responses";
import { createClientProduct } from "@/lib/create-client-product";
import { toast } from "sonner";

const AddProductSchema = z.object({
  title: z.string().min(1, "Наименование должно содержать минимум 1 символ"),
  brand: z.string().min(1, "Вендор должен содержать минимум 1 символ"),
  sku: z.string().min(1, "Артикул должен содержать минимум 1 символ"),
  price: z.string(),
});

export type IAddProductSchema = z.infer<typeof AddProductSchema>;

interface AddProductFormProps {
  addClientProduct: (product: IProduct) => void;
  onClose: () => void;
}

export const AddProductForm = ({
  addClientProduct,
  onClose,
}: AddProductFormProps) => {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(AddProductSchema),
    defaultValues: {
      title: "",
      brand: "",
      sku: "",
      price: "",
    },
  });

  const onSubmit: SubmitHandler<IAddProductSchema> = (data) => {
    const { title, brand, sku, price } = data;
    addClientProduct(
      createClientProduct({ title, brand, sku, price: Number(price) }),
    );
    onClose();
    toast.success("Продукт успешно добавлен");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <Controller
          name="title"
          control={control}
          render={({
            field: { name, onChange, onBlur, value },
            fieldState,
          }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={name}>
                {SORTABLE_COLUMNS_LABEL.TITLE}
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Введите наименование"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="brand"
          control={control}
          render={({
            field: { name, onChange, onBlur, value },
            fieldState,
          }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={name}>
                {SORTABLE_COLUMNS_LABEL.BRAND}
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Введите вендор"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="sku"
          control={control}
          render={({
            field: { name, onChange, onBlur, value },
            fieldState,
          }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={name}>
                {SORTABLE_COLUMNS_LABEL.SKU}
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  type="text"
                  placeholder="Введите артикул"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Controller
          name="price"
          control={control}
          render={({
            field: { name, onChange, onBlur, value },
            fieldState,
          }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={name}>
                {SORTABLE_COLUMNS_LABEL.PRICE}
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id={name}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  type="number"
                  min={0}
                  placeholder="Введите цену"
                  aria-invalid={fieldState.invalid}
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        <Button variant="primary" fullWidth type="submit">
          {"Добавить"}
        </Button>
      </div>
    </form>
  );
};
