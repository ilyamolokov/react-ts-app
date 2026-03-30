import { InputGroup, InputGroupInput, InputGroupAddon } from "@/ui/input-group";
import { Field, FieldError, FieldLabel } from "@/ui/field";
import { Button } from "@/ui/button";
import { Checkbox } from "@/ui/checkbox";
import { Label } from "@/ui/label";
import { Icon } from "../../ui/icon";
import { ILoginRequestBody } from "@/http/requests";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

const LoginSchema = z.object({
  username: z.string().min(1, "Логин должен содержать минимум 1 символ"),
  password: z.string().min(1, "Пароль должен содержать минимум 1 символ"),
  checked: z.boolean().optional(),
});

export type ILoginSchema = z.infer<typeof LoginSchema>;

interface AuthFormProps {
  onLogin: (body: ILoginRequestBody) => void;
  isPending: boolean;
  isSuccess: boolean;
}

export const AuthForm = ({ onLogin, isPending, isSuccess }: AuthFormProps) => {
  const { handleSubmit, control, reset } = useForm<ILoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
      checked: false,
    },
  });

  const onSubmit: SubmitHandler<ILoginSchema> = (data) => {
    const {
      username,
      password,
      // checked
    } = data;
    onLogin({ username, password });
  };

  useEffect(() => {
    if (!isSuccess) return;
    reset();
  }, [isSuccess]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-128.75 rounded-[40px] shadow-[0px_19px_31px_-15px_rgba(34,60,80,0.1)] bg-white border-6 border-white overflow-hidden"
    >
      <div className="flex flex-col gap-8 items-center shadow-[inset_0px_9px_20px_-5px_rgba(34,60,80,0.1)] p-6 lg:p-12">
        <Icon name="logo" size={52} />

        <div className="space-y-3">
          <p className="text-center font-semibold text-[40px] leading-[110%] text-grey-900">
            {"Добро пожаловать!"}
          </p>
          <p className="text-center font-medium text-lg text-grey-100 leading-[150%]">
            {"Пожалуйста, авторизируйтесь"}
          </p>
        </div>

        <div className="flex flex-col gap-5 w-full max-w-100">
          <div className="space-y-4">
            <Controller
              name="username"
              control={control}
              render={({
                field: { name, onChange, onBlur, value },
                fieldState,
              }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={name}>Логин</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <Icon name="user" />
                    </InputGroupAddon>
                    <InputGroupInput
                      id={name}
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      type="text"
                      placeholder="Введите логин"
                      aria-invalid={fieldState.invalid}
                      disabled={isPending}
                    />
                    <InputGroupAddon align="inline-end">
                      <Icon name="x" width={14} height={16} />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({
                field: { name, onChange, onBlur, value },
                fieldState,
              }) => (
                <Field>
                  <FieldLabel htmlFor={name}>Пароль</FieldLabel>
                  <InputGroup>
                    <InputGroupAddon align="inline-start">
                      <Icon name="lock" />
                    </InputGroupAddon>
                    <InputGroupInput
                      id={name}
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      aria-invalid={fieldState.invalid}
                      type="password"
                      placeholder="Введите пароль"
                      disabled={isPending}
                    />
                    <InputGroupAddon align="inline-end">
                      <Icon name="eye-off" />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>

          <Controller
            name="checked"
            control={control}
            render={({ field }) => (
              <Field orientation="horizontal">
                <Checkbox id={field.name} disabled={isPending} />
                <Label htmlFor={field.name}>{"Запомнить данные"}</Label>
              </Field>
            )}
          />

          <div className="space-y-4">
            <Button
              variant="primary"
              fullWidth
              type="submit"
              disabled={isPending}
            >
              {isPending && <Loader2 className="mr-2 animate-spin" />}
              {"Войти"}
            </Button>
            <div className="flex gap-2.5 w-full justify-center items-center">
              <div className="h-px flex-1 bg-grey-50"></div>
              <p className="text-grey-100">{"или"}</p>
              <div className="h-px flex-1 bg-grey-50"></div>
            </div>
          </div>
        </div>

        <p className="text-lg text-grey-600">
          {"Нет аккаунта? "}
          <a
            href="#"
            className="underline text-primary font-semibold"
            style={{ textUnderlineOffset: "4px" }}
          >
            {"Создать"}
          </a>
        </p>
      </div>
    </form>
  );
};
