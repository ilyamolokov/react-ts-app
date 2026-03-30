import { DataTable } from "@/ui/data-table";
import type { ColumnDef } from "@tanstack/react-table";
import { ProductsTableTitleCell } from "./products-table-title-cell";
import { Icon } from "@/ui/icon";

const formantPrice = (num: number) => {
  return {
    dollars: Number(num.toFixed(0)).toLocaleString(),
    cents: Number(
      num.toString().slice(num.toString().indexOf(".") + 1),
    ).toLocaleString(),
  };
};

interface IItem extends Record<string, unknown> {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  brand: string;
  sku: string;
  thumbnail: string;
}

const MOCK_DATA = [
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 9.84,
    rating: 3.3,
    stock: 89,
    tags: ["beauty", "face powder"],
    brand: "Velvet Touch",
    sku: "BEA-VEL-POW-003",
    weight: 8,
    dimensions: {
      width: 29.27,
      height: 27.93,
      depth: 20.59,
    },
    warrantyInformation: "3 months warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Alexander Jones",
        reviewerEmail: "alexander.jones@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Elijah Cruz",
        reviewerEmail: "elijah.cruz@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very dissatisfied!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Avery Perez",
        reviewerEmail: "avery.perez@x.dummyjson.com",
      },
    ],
    returnPolicy: "No return policy",
    minimumOrderQuantity: 22,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "8418883906837",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    discountPercentage: 12.16,
    rating: 4.36,
    stock: 91,
    tags: ["beauty", "lipstick"],
    brand: "Chic Cosmetics",
    sku: "BEA-CHI-LIP-004",
    weight: 1,
    dimensions: {
      width: 18.11,
      height: 28.38,
      depth: 22.17,
    },
    warrantyInformation: "3 year warranty",
    shippingInformation: "Ships in 1 week",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Great product!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Ruby Andrews",
        reviewerEmail: "ruby.andrews@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Would buy again!",
        date: "2025-04-30T09:41:02.053Z",
        reviewerName: "Clara Berry",
        reviewerEmail: "clara.berry@x.dummyjson.com",
      },
    ],
    returnPolicy: "7 days return policy",
    minimumOrderQuantity: 40,
    meta: {
      createdAt: "2025-04-30T09:41:02.053Z",
      updatedAt: "2025-04-30T09:41:02.053Z",
      barcode: "9467746727219",
      qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
];

const columns: ColumnDef<IItem>[] = [
  {
    accessorKey: "title",
    header: "Наименование",
    cell: ({ row }) => (
      <ProductsTableTitleCell
        title={row.original.title}
        category={row.original.category}
        thumbnail={row.original.thumbnail}
      />
    ),
  },
  {
    accessorKey: "brand",
    header: "Вендор",
    cell: ({ row }) => (
      <p className="font-bold text-[#222222]">{row.original.brand}</p>
    ),
  },
  {
    accessorKey: "sku",
    header: "Артикул",
    cell: ({ row }) => (
      <p className="text-[#222222] font-roboto">{row.original.sku}</p>
    ),
  },
  {
    accessorKey: "rating",
    header: "Оценка",
    cell: ({ row }) => {
      const rating = row.original.rating;
      return (
        <p className="text-[#222222] font-roboto">
          <span className={rating < 3.5 ? "text-red-400" : "text-[#222222]"}>
            {rating}
          </span>
          {"/5"}
        </p>
      );
    },
  },
  {
    accessorKey: "price",
    header: "Цена, ₽",
    cell: ({ row }) => {
      const { dollars, cents } = formantPrice(row.original.price);
      return (
        <p className="text-[#222222] font-roboto">
          {dollars}
          <span className="text-[#999999]">,{cents}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "settings",
    header: "",
    cell: () => {
      return (
        <div className="flex justify-center items-center gap-8">
          <div className="text-white bg-blue-400 rounded-full py-[1.5px] px-[14px]">
            <Icon name="plus" />
          </div>
          <Icon name="circle-dots-three" size={32} />
        </div>
      );
    },
  },
];

export const ProductsTableContent = () => {
  return <DataTable columns={columns} data={MOCK_DATA} />;
};
