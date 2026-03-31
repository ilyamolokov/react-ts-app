export const formatPrice = (num: number) => {
  const dollars = Math.floor(num);
  const cents = Math.round((num - dollars) * 100);

  return {
    dollars: dollars.toLocaleString(),
    cents: cents.toString().padStart(2, '0'),
  };
};
