import { TextInput } from "@mantine/core"
import { Props } from "./types"

export const Input: React.FC<Props> = ({
  label = '',
  placeholder = '',
  leftSection,
  rightSection,
  onChange,
  styles,
  type,
  disabled = false,
  value
}) => {
  return (
    <TextInput
      disabled={disabled}
      type={type}
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      leftSection={leftSection}
      rightSection={rightSection}
      radius="xl"
      styles={{
        input: {
          backgroundColor: "var(--color-primary)"
        },
        ...styles
      }}
    />
  )
}