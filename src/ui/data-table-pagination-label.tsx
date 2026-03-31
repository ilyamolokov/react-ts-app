interface PaginationProps {
  pageFirstItemCount: number;
  pageLastItemCount: number;
  totalItems: number;
}

export const DataTablePaginationLabel = ({
  pageFirstItemCount,
  pageLastItemCount,
  totalItems,
}: PaginationProps) => {
  return (
    <p className="text-grey-500 text-lg">
      <span>{`Показано `}</span>
      <span className="text-[#333333]">{`${pageFirstItemCount === pageLastItemCount ? pageFirstItemCount : pageFirstItemCount + 1}-${pageLastItemCount}`}</span>
      <span>{` из `}</span>
      <span className="text-[#333333]">{totalItems}</span>
    </p>
  );
};
