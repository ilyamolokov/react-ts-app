import { DataTable } from "@/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { ProductsTableTitleCell } from "./products-table-title-cell";
import { Icon } from "@/ui/icon";
import { IGetProductsResponse, IProduct } from "@/api/responses";
import { ProductsTableLoader } from "./products-table-loader";
import { ProductsTableError } from "./products-table-error";

const formatPrice = (num: number) => {
  return {
    dollars: Number(num.toFixed(0)).toLocaleString(),
    cents: Number(
      num.toString().slice(num.toString().indexOf(".") + 1),
    ).toLocaleString(),
  };
};

const columns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "title",
    header: "Наименование",
    cell: ({ row }) => (
      <ProductsTableTitleCell
        title={row.original.title}
        category={row.original.category}
        thumbnail={row.original.thumbnail}
      />
    ),
  },
  {
    accessorKey: "brand",
    header: "Вендор",
    cell: ({ row }) => (
      <p className="font-bold text-[#222222]">{row.original.brand}</p>
    ),
  },
  {
    accessorKey: "sku",
    header: "Артикул",
    cell: ({ row }) => (
      <p className="text-[#222222] font-roboto">{row.original.sku}</p>
    ),
  },
  {
    accessorKey: "rating",
    header: "Оценка",
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
    accessorKey: "price",
    header: "Цена, ₽",
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
  refetch,
}: {
  data: IGetProductsResponse | undefined;
  isFetching: boolean;
  error: Error | null;
  refetch: () => void;
}) => {
  if (!data && isFetching) {
    return <ProductsTableLoader />;
  }

  if (!data || error) {
    return <ProductsTableError error={error} />;
  }

  return <DataTable columns={columns} data={data.products} />;
};
