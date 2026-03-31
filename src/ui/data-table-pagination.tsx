import { cn } from "@/lib/utils";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { getPagination } from "@/lib/get-pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  nextsPageDisabled: boolean;
  nextPage: () => void;
  previousPageDisabled: boolean;
  previousPage: () => void;
}

export const DataTablePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  nextsPageDisabled,
  nextPage,
  previousPageDisabled,
  previousPage,
}: PaginationProps) => {
  const pages = getPagination({ currentPage, totalPages });

  if (!pages.length) {
    return null;
  }

  return (
    <PaginationComponent className="gap-2">
      <PaginationContent>
        <PaginationItem
          className={cn({
            "pointer-events-none opacity-50": previousPageDisabled,
          })}
        >
          <PaginationPrevious onClick={previousPage} />
        </PaginationItem>
      </PaginationContent>

      <PaginationContent className="gap-2">
        {pages.map((value, index) => {
          return value ? (
            <PaginationItem key={index}>
              <PaginationLink
                isActive={value === currentPage}
                onClick={() => onPageChange(value - 1)}
              >
                {value}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink>{"..."}</PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>

      <PaginationContent>
        <PaginationItem
          className={cn({
            "pointer-events-none opacity-50": nextsPageDisabled,
          })}
        >
          <PaginationNext onClick={nextPage} />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};
