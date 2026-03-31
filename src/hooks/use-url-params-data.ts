"use client";

import { parseAsInteger, useQueryState } from "nuqs";

enum QueryParams {
  PAGE = "page",
  PER_PAGE = "perPage",
  SEARCH = "search"
}

interface IUseURLParamsData {
  [QueryParams.PER_PAGE]: number;
  [QueryParams.PAGE]: number;
  [QueryParams.SEARCH]: string;
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

  const [search, setSearch] = useQueryState(QueryParams.SEARCH, {
    defaultValue: defaultValues?.[QueryParams.SEARCH] ?? "",
  });


  return {
    perPage,
    setPerPage,

    page,
    setPage,

    search,
    setSearch
  };
};
