import { Field } from "@/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/ui/input-group";
import { Icon } from "@/ui/icon";

export const SearchProducts = ({ disabled }: { disabled: boolean }) => {
  return (
    <div className="py-[26px] px-[30px] w-full bg-white flex items-center gap-3">
      <h3 className="text-[24px] text-black font-semibold">{"Товары"}</h3>

      <div className="w-full flex justify-center items-center">
        <Field className="w-full max-w-[1023px]">
          <InputGroup className="max-w-auto">
            <InputGroupAddon align="inline-start">
              <Icon name="search" />
            </InputGroupAddon>
            <InputGroupInput
              id="login"
              type="text"
              placeholder="Найти"
              disabled={disabled}
            />
          </InputGroup>
        </Field>
      </div>
    </div>
  );
};
