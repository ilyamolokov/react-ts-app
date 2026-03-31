import { Button } from "@/ui/button";
import { Icon } from "../../ui/icon";

export const ProductsTableHeader = ({ refetch }: { refetch: () => void }) => {
  // const { setSortBy, setOrder } = useURLParamsData();

  // const reset = async () => {
  //   await setSortBy("");
  //   await setOrder("");
  // };

  return (
    <div className="w-full flex items-center justify-between">
      <h4 className="text-black text-[20px] font-semibold">{"Все позиции"}</h4>

      <div className="flex items-center gap-2">
        <Button size="icon" onClick={refetch}>
          {<Icon name="refresh" size={22} />}
        </Button>
        <Button size="icon">{<Icon name="sort" size={22} />}</Button>
        <Button variant="primary" size="sm">
          <Icon name="circle-plus" size={22} />
          {"Добавить"}
        </Button>
      </div>
    </div>
  );
};
