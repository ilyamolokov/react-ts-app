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
import { DataTablePagination } from "./data-table-pagination";

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
    <div className="w-full space-y-10">
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

      <div className="w-full flex items-center justify-between py-[11px]">
        <p className="text-[#B2B3B9] text-lg">
          <span>{`Показано `}</span>
          <span className="text-[#333333]">{`1-20`}</span>
          <span>{` из `}</span>
          <span className="text-[#333333]">{120}</span>
        </p>
        <DataTablePagination
          currentPage={1}
          pages={[
            {
              value: 1,
              active: true,
            },
            {
              value: 2,
              active: false,
            },
          ]}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
}
