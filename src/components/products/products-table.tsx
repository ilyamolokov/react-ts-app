import { IGetProductsResponse } from "@/api/responses";
import { ProductsTableContent } from "./products-table-content";
import { ProductsTableHeader } from "./products-table-header";

export const ProductsTable = ({
  data,
  isFetching,
  error,
}: {
  data: IGetProductsResponse | undefined;
  isFetching: boolean;
  error: Error | null;
}) => {
  return (
    <div className="p-7.5 bg-white space-y-10">
      <ProductsTableHeader />
      <ProductsTableContent data={data} isFetching={isFetching} error={error} />
    </div>
  );
};
