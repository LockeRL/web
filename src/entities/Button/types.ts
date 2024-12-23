import { ReactNode } from "react"

export type Props = {
  children: ReactNode;
  rightSection?: ReactNode;
  leftSection?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outline?: boolean;
  disabled?: boolean;
  paddingLeft?: string;
  paddingRight?: string;
  w?: string,
  h?: string,
}