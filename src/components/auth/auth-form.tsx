import { InputGroup, InputGroupInput, InputGroupAddon } from "@/ui/input-group";
import { Field, FieldLabel } from "@/ui/field";
import { Button } from "@/ui/button";
import { Checkbox } from "@/ui/checkbox";
import { Label } from "@/ui/label";
import { Icon } from "../../ui/icon";

export const AuthForm = () => {
  return (
    <div className="w-full max-w-128.75 rounded-[40px] shadow-[0px_19px_31px_-15px_rgba(34,60,80,0.1)] bg-white border-6 border-white overflow-hidden">
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

        <form className="flex flex-col gap-5 w-full max-w-100">
          <div className="space-y-4">
            <Field>
              <FieldLabel htmlFor="login">Логин</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Icon name="user" />
                </InputGroupAddon>
                <InputGroupInput
                  id="login"
                  type="text"
                  placeholder="Введите логин"
                />
                <InputGroupAddon align="inline-end">
                  <Icon name="x" width={14} height={16} />
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Пароль</FieldLabel>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <Icon name="lock" />
                </InputGroupAddon>
                <InputGroupInput
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                />
                <InputGroupAddon align="inline-end">
                  <Icon name="eye-off" />
                </InputGroupAddon>
              </InputGroup>
            </Field>
          </div>

          <Field orientation="horizontal">
            <Checkbox id="save-data" name="terms-checkbox" />
            <Label htmlFor="save-data">{"Запомнить данные"}</Label>
          </Field>

          <div className="space-y-4">
            <Button variant="primary" fullWidth>
              {"Войти"}
            </Button>
            <div className="flex gap-2.5 w-full justify-center items-center">
              <div className="h-px flex-1 bg-grey-50"></div>
              <p className="text-grey-100">{"или"}</p>
              <div className="h-px flex-1 bg-grey-50"></div>
            </div>
          </div>
        </form>

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
    </div>
  );
};
