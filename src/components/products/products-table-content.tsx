import { DataTable } from "@/ui/data-table";
import { IGetProductsResponse, IProduct } from "@/api/responses";
import { DataTableLoader } from "@/ui/data-table-loader";
import { DataTableError } from "@/ui/data-table-error";
import { productTableColumns } from "./product-table-columns";

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
    return <DataTableLoader />;
  }

  if (!data || error) {
    return <DataTableError error={error} />;
  }

  return (
    <DataTable
      columns={productTableColumns}
      data={data.products}
      getRowId={(row: IProduct) => row.id.toString()}
    />
  );
};
