import { http } from "@/api/http";
import { ILoginRequestBody } from "@/api/requests";
import { ILoginResponse } from "@/api/responses";
import { AuthForm } from "@/components/auth/auth-form";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const AuthPage = () => {
  const { mutate, isPending, error } = useMutation<
    ILoginResponse,
    AxiosError,
    ILoginRequestBody
  >({
    mutationFn: (body) => http.login(body),
    onSuccess: () => {},
  });

  const onLogin = (body: ILoginRequestBody) => {
    mutate(body);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <AuthForm onLogin={onLogin} isPending={isPending} error={error} />
    </div>
  );
};
