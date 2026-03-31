"use client";

import { useQueryState } from "nuqs";

enum QueryParams {
  SEARCH = "search",
  SORT_BY = "sortBy",
  ORDER = "order"
}

interface IUseURLParamsData {
  [QueryParams.SEARCH]: string;
  [QueryParams.SORT_BY]: string;
  [QueryParams.ORDER]: string;
}

export const useURLParamsData = (
  defaultValues?: Partial<IUseURLParamsData>,
) => {

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
    search,
    setSearch,

    sortBy,
    setSortBy,

    order,
    setOrder
  };
};
