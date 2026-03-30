const iconSrc = {
  logo: "./svg/logo.svg",
  x: "./svg/x.svg",
  user: "./svg/user.svg",
  lock: "./svg/lock.svg",
  "eye-off": "./svg/eye-off.svg",
  "eye-on": "./svg/eye-on.svg",
  search: "./svg/search.svg",
  "circle-plus": "./svg/circle-plus.svg",
  "circle-dots-three": "./svg/circle-dots-three.svg",
  refresh: "./svg/refresh.svg",
  sort: "./svg/sort.svg",
  plus: "./svg/plus.svg",
};

interface IconProps {
  name:
    | "logo"
    | "x"
    | "user"
    | "lock"
    | "eye-off"
    | "eye-on"
    | "search"
    | "circle-plus"
    | "circle-dots-three"
    | "refresh"
    | "plus"
    | "sort";
  size?: number;
  width?: number;
  height?: number;
}

export const Icon = ({ name, width, height, size = 24 }: IconProps) => {
  return (
    <img
      src={iconSrc[name]}
      width={width ?? size}
      height={height ?? size}
    ></img>
  );
};
