import { AppShell } from "@mantine/core"

import styles from './styles.module.css';
import { Input } from "../../entities";
import { SearchIcon, UserIcon } from "../../assets";

export const Navbar = () => {
  return (
    <AppShell.Header>
      <div className={styles.container}>
        <div className={styles['right-section']}>
          <Input rightSection={<SearchIcon />} />
          <UserIcon />
        </div>
      </div>
    </AppShell.Header>
  )
}