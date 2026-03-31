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
    <div className="flex gap-4.5">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={`${title} image`}
          width={48}
          height={48}
          className="rounded-[8px] border border-[#ECECEB]"
        />
      ) : (
        <div className="rounded-[8px] border-2 border-[#ECECEB] w-12 h-12" />
      )}
      <div className="flex flex-col gap-2.5 items-start justify-center">
        <p className="leading-4 font-bold">{title}</p>
        <p className="text-sm leading-3.5 text-grey-500">{category}</p>
      </div>
    </div>
  );
};
