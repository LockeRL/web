import { ReactNode } from "react";

export type Props = {
  label?: string;
  placeholder?: string;
  rightSection?: ReactNode;
  leftSection?: ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}