import { Paths } from "@/router/enums";
import { Button } from "@/ui/button";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 max-w-75">
        <Button
          variant="primary"
          onClick={() => navigate(Paths.Auth)}
          fullWidth
        >
          {"Страница авторизации"}
        </Button>
        <Button
          variant="primary"
          onClick={() => navigate(Paths.Products)}
          fullWidth
        >
          {"Страница с товарами"}
        </Button>
      </div>
    </div>
  );
};
