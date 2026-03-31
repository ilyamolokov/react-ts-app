import { ProductsTableContent } from "./products-table-content";
import { ProductsTableHeader } from "./products-table-header";
import { IGetProductsResponse } from "@/api/responses";

export const ProductsTable = ({
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
  return (
    <div className="p-7.5 bg-white space-y-10 h-168.75">
      <ProductsTableHeader />
      <ProductsTableContent
        data={data}
        isFetching={isFetching}
        error={error}
        refetch={refetch}
      />
    </div>
  );
};
