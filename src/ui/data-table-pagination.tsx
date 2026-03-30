import { cn } from "@/lib/utils";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

interface PaginationProps {
  currentPage: number;
  disabled?: boolean;
  pages: {
    value: number;
    active: boolean;
  }[];
  onPageChange: (page: number) => void;
}

export const DataTablePagination = ({
  currentPage,
  disabled,
  pages,
  onPageChange,
}: PaginationProps) => {
  if (!pages.length) {
    return null;
  }

  return (
    <PaginationComponent className="gap-2">
      <PaginationContent>
        <PaginationItem
          className={cn({
            "pointer-events-none opacity-50": currentPage <= 1 || disabled,
          })}
        >
          <PaginationPrevious onClick={() => onPageChange(currentPage - 1)} />
        </PaginationItem>
      </PaginationContent>

      <PaginationContent className="gap-2">
        {pages.map(({ value }, index) => {
          return (
            <PaginationItem
              key={index}
              className={cn({ "pointer-events-none opacity-50": disabled })}
            >
              <PaginationLink
                isActive={value === currentPage}
                onClick={() => onPageChange(value)}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>

      <PaginationContent>
        <PaginationItem
          className={cn({
            "pointer-events-none opacity-50":
              currentPage >= pages.length || disabled,
          })}
        >
          <PaginationNext onClick={() => onPageChange(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};
