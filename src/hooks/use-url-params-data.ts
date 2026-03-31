"use client";

import { parseAsInteger, useQueryState } from "nuqs";

enum QueryParams {
  PAGE = "page",
  PER_PAGE = "perPage",
  SEARCH = "search",
  SORT_BY = "sortBy",
  ORDER = "order"
}

interface IUseURLParamsData {
  [QueryParams.PER_PAGE]: number;
  [QueryParams.PAGE]: number;
  [QueryParams.SEARCH]: string;
  [QueryParams.SORT_BY]: string;
  [QueryParams.ORDER]: string;
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

  const [sortBy, setSortBy] = useQueryState(QueryParams.SORT_BY, {
    defaultValue: defaultValues?.[QueryParams.SORT_BY] ?? "",
  });


  const [order, setOrder] = useQueryState(QueryParams.ORDER, {
    defaultValue: defaultValues?.[QueryParams.ORDER] ?? "",
  });


  return {
    perPage,
    setPerPage,

    page,
    setPage,

    search,
    setSearch,

    sortBy,
    setSortBy,

    order,
    setOrder
  };
};
