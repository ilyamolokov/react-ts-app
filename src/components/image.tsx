const imageSrc = {
  logo: "./svg/logo.svg",
  x: "./svg/x.svg",
  user: "./svg/user.svg",
  lock: "./svg/lock.svg",
  "eye-off": "./svg/eye-off.svg",
};

interface ImageProps {
  name: "logo" | "x" | "user" | "lock" | "eye-off";
  size?: number;
  width?: number;
  height?: number;
}

export const Image = ({ name, width, height, size = 24 }: ImageProps) => {
  return (
    <img
      src={imageSrc[name]}
      width={width ?? size}
      height={height ?? size}
    ></img>
  );
};
