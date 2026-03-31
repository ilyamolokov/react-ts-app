import { DataTable } from "@/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ProductsTableTitleCell } from "./products-table-title-cell";
import { Icon } from "@/ui/icon";
import { ProductsTableLoader } from "./products-table-loader";
import { ProductsTableError } from "./products-table-error";
import { IGetProductsResponse, IProduct } from "@/api/responses";
import { ProductsTableSortableHeader } from "./products-table-sortable-header";
import { formatPrice } from "@/lib/format-price";
import { DASH } from "@/lib/const";
import { Checkbox } from "@/ui/checkbox";

const sortableColumns = {
  TITLE: "title",
  BRAND: "brand",
  SKU: "sku",
  RATING: "rating",
  PRICE: "price",
};

const columns: ColumnDef<IProduct>[] = [
  {
    id: "select-col",
    header: ({ table }) => (
      <Checkbox
        className="border-grey-500"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        className="border-grey-500"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: sortableColumns.TITLE,
    header: () => (
      <ProductsTableSortableHeader
        accessorKey={sortableColumns.TITLE}
        label="Наименование"
      />
    ),
    cell: ({ row }) => (
      <ProductsTableTitleCell
        title={row.original.title}
        category={row.original.category}
        thumbnail={row.original.thumbnail}
      />
    ),
  },
  {
    accessorKey: sortableColumns.BRAND,
    header: () => (
      <ProductsTableSortableHeader
        accessorKey={sortableColumns.BRAND}
        label="Вендор"
      />
    ),
    cell: ({ row }) => (
      <p className="font-bold text-[#222222]">{row.original.brand ?? DASH}</p>
    ),
  },
  {
    accessorKey: sortableColumns.SKU,
    header: () => (
      <ProductsTableSortableHeader
        accessorKey={sortableColumns.SKU}
        label="Артикул"
      />
    ),
    cell: ({ row }) => (
      <p className="text-[#222222] font-roboto">{row.original.sku}</p>
    ),
  },
  {
    accessorKey: sortableColumns.RATING,
    header: () => (
      <ProductsTableSortableHeader
        accessorKey={sortableColumns.RATING}
        label="Оценка"
      />
    ),
    cell: ({ row }) => {
      const rating = row.original.rating;
      return (
        <p className="text-[#222222] font-roboto">
          <span className={rating < 3.5 ? "text-red-400" : "text-[#222222]"}>
            {rating}
          </span>
          {"/5"}
        </p>
      );
    },
  },
  {
    accessorKey: sortableColumns.PRICE,
    header: () => (
      <ProductsTableSortableHeader
        accessorKey={sortableColumns.PRICE}
        label="Цена, ₽"
      />
    ),
    cell: ({ row }) => {
      const { dollars, cents } = formatPrice(row.original.price);
      return (
        <p className="text-[#222222] font-roboto">
          {dollars}
          <span className="text-[#999999]">,{cents}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "settings",
    header: "",
    cell: () => {
      return (
        <div className="flex justify-center items-center gap-8">
          <div className="text-white bg-blue-400 rounded-full min-w-[52px] min-h-[27px] flex justify-center items-center">
            <Icon name="plus" />
          </div>
          <Icon name="circle-dots-three" size={32} />
        </div>
      );
    },
  },
];

export const ProductsTableContent = ({
  data,
  isFetching,
  error,
}: {
  data: IGetProductsResponse | undefined;
  isFetching: boolean;
  error: Error | null;
}) => {
  if (!data && isFetching) {
    return <ProductsTableLoader />;
  }

  if (!data || error) {
    return <ProductsTableError error={error} />;
  }

  return (
    <DataTable
      columns={columns}
      data={data.products}
      getRowId={(row: IProduct) => row.id.toString()}
    />
  );
};
