import { api } from "@/api";
import { ILoginRequestBody } from "@/api/requests";
import { ILoginResponse } from "@/api/responses";
import { AuthForm } from "@/components/auth/auth-form";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { StorageKeyEnum } from "@/storage/enums";
import { localStorageService, sessionStorageService } from "@/storage";

export const AuthPage = () => {
  const { mutate, isPending, isSuccess } = useMutation<
    ILoginResponse,
    AxiosError<{ message: string }>,
    ILoginRequestBody
  >({
    mutationFn: (body) => api.login(body),
    onSuccess: (data, { checked }) => {
      localStorageService.clear();
      sessionStorageService.clear();
      if (checked) {
        localStorageService.set(StorageKeyEnum.ACCESS_TOKEN, data.accessToken);
      } else {
        sessionStorageService.set(
          StorageKeyEnum.ACCESS_TOKEN,
          data.accessToken,
        );
      }
    },
    onError: (error) => {
      toast.error(error.response?.data.message ?? error.message);
    },
  });

  const onLogin = (body: ILoginRequestBody) => {
    mutate(body);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <AuthForm isSuccess={isSuccess} onLogin={onLogin} isPending={isPending} />
    </div>
  );
};
