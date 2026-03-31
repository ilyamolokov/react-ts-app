"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  RowSelectionState,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";
import { DataTablePagination } from "./data-table-pagination";
import { useState } from "react";
import { DataTablePaginationLabel } from "./data-table-pagination-label";
import { cn } from "@/lib/utils";
import { INITIAL_PAGE, INITIAL_PER_PAGE } from "@/lib/const";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  getRowId: (row: TData) => string;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  getRowId,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});

  const [pagination, setPagination] = useState({
    pageIndex: INITIAL_PAGE,
    pageSize: INITIAL_PER_PAGE,
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination, rowSelection },
    onPaginationChange: setPagination,
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getRowId,
  });

  return (
    <div className="w-full h-125 flex flex-col justify-between gap-2 bg-white">
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
                data-state={row.getIsSelected() ? "selected" : null}
                onClick={row.getToggleSelectedHandler()}
                className={cn(
                  row.getIsSelected() &&
                    "shadow-[inset_2px_0_0_var(--color-blue-400)]",
                )}
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

      <div className="flex w-full items-center gap-2 justify-between py-2.75">
        <DataTablePaginationLabel
          pageFirstItemCount={
            table.getState().pagination.pageSize *
            table.getState().pagination.pageIndex
          }
          pageLastItemCount={
            table.getState().pagination.pageSize *
              table.getState().pagination.pageIndex +
            table.getRowModel().rows.length
          }
          totalItems={table.getRowCount()}
        />
        <DataTablePagination
          currentPage={table.getState().pagination.pageIndex + 1}
          totalPages={table.getPageCount()}
          onPageChange={(value) => table.setPageIndex(value - 1)}
          nextsPageDisabled={!table.getCanNextPage()}
          nextPage={() => table.nextPage()}
          previousPageDisabled={!table.getCanPreviousPage()}
          previousPage={() => table.previousPage()}
        />
      </div>
    </div>
  );
}
