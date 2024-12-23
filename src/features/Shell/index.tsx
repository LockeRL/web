import { AppShell } from "@mantine/core"
import { Outlet } from "react-router-dom"
import { Navbar } from "../Navbar"

export const Shell = () => {
  return (
    <AppShell
      header={{ height: 82 }}
      bg="var(--color-primary)"
      padding="md"
    >
      <Navbar />
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}