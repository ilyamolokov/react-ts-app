interface ProductsTableTitleCellProps {
  title: string;
  category: string;
  thumbnail: string;
}

export const ProductsTableTitleCell = ({
  title,
  category,
  thumbnail,
}: ProductsTableTitleCellProps) => {
  return (
    <div className="flex gap-[18px]">
      <img
        src={thumbnail}
        alt={`${title} image`}
        width={48}
        height={48}
        className="rounded-[8px] border border-[#ECECEB]"
      />
      <div className="flex flex-col gap-[10px] items-start justify-center">
        <p className="leading-4 font-bold">{title}</p>
        <p className="text-sm leading-[14px] text-[#B2B3B9]">{category}</p>
      </div>
    </div>
  );
};
