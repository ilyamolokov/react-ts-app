import { http } from "@/http";
import { ILoginRequestBody } from "@/http/requests";
import { ILoginResponse } from "@/http/responses";
import { AuthForm } from "@/components/auth/auth-form";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const AuthPage = () => {
  const { mutate, isPending, isSuccess } = useMutation<
    ILoginResponse,
    AxiosError<{ message: string }>,
    ILoginRequestBody
  >({
    mutationFn: (body) => http.login(body),
    onError: (error) => {
      toast.error(error.response?.data.message ?? error.message);
    },
  });

  const onLogin = (body: ILoginRequestBody) => {
    mutate(body);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <AuthForm
        onLogin={onLogin}
        isPending={isPending}
        isSuccess={isSuccess}
      />
    </div>
  );
};
