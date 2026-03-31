export const ProductsTableError = ({ error }: { error: Error | null }) => {
  return (
    <h2 className="mx-auto w-full text-center text-red-500">
      {error ? error.message : "Что-то пошло не так"}
    </h2>
  );
};
