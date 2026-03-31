const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => start + idx);
};

export const getPagination = ({
  currentPage = 1,
  totalPages,
  siblingCount = 1,
}: {
  currentPage?: number;
  totalPages: number;
  siblingCount?: number;
}): (number | null)[] => {
  const page = Math.max(1, Math.min(currentPage, totalPages));

  const totalPageNumbers = siblingCount * 2 + 5;
  if (totalPageNumbers >= totalPages) {
    return range(1, totalPages);
  }

  const leftSiblingIndex = Math.max(page - siblingCount, 1);
  const rightSiblingIndex = Math.min(page + siblingCount, totalPages);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPages - 1;

  let pages: (number | null)[] = [];

  if (!showLeftDots && showRightDots) {
    const leftRange = range(1, 2 + 2 * siblingCount);
    pages = [...leftRange, null, totalPages];
  } else if (showLeftDots && !showRightDots) {
    const rightRange = range(totalPages - (2 + 2 * siblingCount), totalPages);
    pages = [1, null, ...rightRange];
  } else if (showLeftDots && showRightDots) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    pages = [1, null, ...middleRange, null, totalPages];
  } else {
    pages = range(1, totalPages);
  }

  return pages;
};
