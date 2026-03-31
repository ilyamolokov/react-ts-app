import { Field } from "@/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/ui/input-group";
import { Icon } from "@/ui/icon";
import { ChangeEvent } from "react";

export const SearchProducts = ({
  value,
  disabled,
  onChange,
}: {
  value: string;
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="py-6.5 px-7.5 w-full bg-white flex items-center gap-3">
      <h3 className="text-[24px] text-black font-semibold">{"Товары"}</h3>

      <div className="w-full flex justify-center items-center">
        <Field className="w-full max-w-255.75">
          <InputGroup className="max-w-auto">
            <InputGroupAddon align="inline-start">
              <Icon name="search" />
            </InputGroupAddon>
            <InputGroupInput
              id="login"
              type="text"
              placeholder="Найти"
              disabled={disabled}
              value={value}
              onChange={onChange}
            />
          </InputGroup>
        </Field>
      </div>
    </div>
  );
};
