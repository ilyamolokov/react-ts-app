import { IGetProductsResponse } from "@/api/responses";
import { ProductsTableContent } from "./products-table-content";
import { ProductsTableHeader } from "./products-table-header";

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
    <div className="p-7.5 bg-white space-y-10">
      <ProductsTableHeader refetch={refetch} />
      <ProductsTableContent
        data={data}
        isFetching={isFetching}
        error={error}
      />
    </div>
  );
};
