export const constructParams = ({
  page,
  perPage,
}: {
  perPage: number;
  page: number;
}) => {
  return {
    limit: perPage,
    skip: perPage * (page - 1),
  };
};