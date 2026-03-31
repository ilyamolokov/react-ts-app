export const formatPrice = (num: number) => {
  return {
    dollars: Number(num.toFixed(0)).toLocaleString(),
    cents: Number(
      num.toString().slice(num.toString().indexOf(".") + 1),
    ).toLocaleString(),
  };
};
