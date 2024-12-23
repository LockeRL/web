import { TextInput } from "@mantine/core"
import { Props } from "./types"

export const Input: React.FC<Props> = ({
  label = '',
  placeholder = '',
  leftSection,
  rightSection,
  onChange,
}) => {
  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      leftSection={leftSection}
      rightSection={rightSection}
      radius="xl"
      styles={{
        input: {
          backgroundColor: "var(--color-primary)"
        }
      }}
    />
  )
}