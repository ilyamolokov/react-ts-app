"use client";

import { parseAsInteger, useQueryState } from "nuqs";

enum QueryParams {
  PAGE = "page",
  PER_PAGE = "perPage"
}

interface IUseURLParamsData {
  [QueryParams.PER_PAGE]: number;
  [QueryParams.PAGE]: number;
}

export const useURLParamsData = (
  defaultValues?: Partial<IUseURLParamsData>,
) => {
  const [perPage, setPerPage] = useQueryState(
    QueryParams.PER_PAGE,
    parseAsInteger.withDefault(defaultValues?.[QueryParams.PER_PAGE] ?? 5),
  );

  const [page, setPage] = useQueryState(
    QueryParams.PAGE,
    parseAsInteger.withDefault(defaultValues?.[QueryParams.PAGE] ?? 1),
  );


  return {
    perPage,
    setPerPage,

    page,
    setPage,
  };
};
