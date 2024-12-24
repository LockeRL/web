import { AppShell } from "@mantine/core"

import styles from './styles.module.css';
import { Input } from "../../entities";
import { SearchIcon, UserIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const path = !localStorage.getItem('ACCESS_TOKEN') ? '/login' : '/profile'

  return (
    <AppShell.Header>
      <div className={styles.container}>
        <div className={styles['right-section']}>
          <Input rightSection={<SearchIcon />} />
          <span onClick={() => navigate(path)}>
            <UserIcon />
          </span>
        </div>
      </div>
    </AppShell.Header>
  )
}