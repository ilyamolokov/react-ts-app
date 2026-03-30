"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  // isFetching?: boolean;
  // // pages: IPaginationLink[];
  // // refetch?: () => void;
  // // meta?: IMeta;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  // isFetching = false,
  // pages,
  // refetch,
  // meta,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      // pagination: meta ? { pageSize: meta.per_page } : {},
    },
  });

  return (
    <div className="flex flex-col justify-between">
      {/*{refetch && (
        <div className="mb-2 min-h-7">
          <DataTableActiveFilters refetch={refetch} />
        </div>
      )}*/}

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center">
                Нет результатов
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/*{Boolean(pages.length) && (
        <div className="py-4">
          <DataTablePagination disabled={isFetching} pages={pages} />
        </div>
      )}*/}
    </div>
  );
}
