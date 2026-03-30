import { DataTablePagination } from "@/ui/data-table-pagination";

export const ProductsTableFooter = () => {
  return (
    <div className="w-full flex items-center justify-between py-[11px]">
      <p className="text-[#B2B3B9] text-lg">
        <span>{`Показано `}</span>
        <span className="text-[#333333]">{`1-20`}</span>
        <span>{` из `}</span>
        <span className="text-[#333333]">{120}</span>
      </p>
      <DataTablePagination
        currentPage={1}
        pages={[
          {
            value: 1,
            active: true,
          },
          {
            value: 2,
            active: false,
          },
        ]}
        onPageChange={() => {}}
      />
    </div>
  );
};
