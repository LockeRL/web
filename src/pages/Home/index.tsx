import { useNavigate } from "react-router-dom"
import { ChevronRightIcon } from "../../assets"
import { Button } from "../../entities"
import { Hero } from "../../features"

import styles from './styles.module.css'

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Hero />

      <h1 className={styles.text}>ALL HOOKAHS IN ONE PLACE</h1>
      <Button paddingLeft="50px" paddingRight="20px" rightSection={<ChevronRightIcon />} w="1098px" h="108px" onClick={() => navigate('/bars')}>
        Bars List
      </Button>
    </div>
  )
}