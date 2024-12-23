import { Button as MantineButton } from "@mantine/core"
import { Props } from "./types"

export const Button: React.FC<Props> = ({
  children,
  onClick,
  rightSection,
  leftSection,
  outline = false,
  w,
  h,
  disabled = false,
  paddingLeft = "0px",
  paddingRight = "0px",
}) => {

  const styles = !outline ? {
    inner: {
      backgroundColor: 'var(--color-accent)',
      color: 'var(--color-primary)',
      paddingLeft,
      paddingRight
    },
    root: {
      background: 'var(--color-accent)',
      borderRadius: '50px'
    }
  } : {
    inner: {
      backgroundColor: 'var(--color-primary)',
      color: 'var(--color-accent)',
      border: '1px solid var(--color-accent)',
      borderRadius: '50px',
      paddingLeft,
      paddingRight
    }, root: {
      background: 'transparent',
      borderRadius: '50px'
    }
  }

  return (
    <MantineButton
      onClick={onClick}
      leftSection={leftSection}
      rightSection={rightSection}
      disabled={disabled}
      w={w}
      h={h}
      style={{ fontSize: "52px" }}
      styles={{ root: styles.root, inner: { display: "flex", flexDirection: "row", justifyContent: "space-between", ...styles.inner } }}
    >
      {children}
    </MantineButton >
  )
}