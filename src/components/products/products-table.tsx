import { IGetProductsResponse, IProduct } from "@/api/responses";
import { ProductsTableContent } from "./products-table-content";
import { ProductsTableHeader } from "./products-table-header";

export const ProductsTable = ({
  data,
  clientProductsData,
  isFetching,
  error,
  refetch,
  addClientProduct,
}: {
  data: IGetProductsResponse | undefined;
  clientProductsData: IProduct[];
  isFetching: boolean;
  error: Error | null;
  refetch: () => void;
  addClientProduct: (product: IProduct) => void;
}) => {
  return (
    <div className="p-7.5 bg-white space-y-10">
      <ProductsTableHeader
        refetch={refetch}
        addClientProduct={addClientProduct}
      />
      <ProductsTableContent
        clientProductsData={clientProductsData}
        data={data}
        isFetching={isFetching}
        error={error}
      />
    </div>
  );
};
