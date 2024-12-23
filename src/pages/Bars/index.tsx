import { useNavigate } from 'react-router-dom'
import { CocktailIcon } from '../../assets'
import { Button } from '../../entities'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { BarType, getBars } from '../../services'

export const Bars = () => {
  const navigate = useNavigate();

  const [bars, setBars] = useState<BarType[]>([])

  useEffect(() => {
    (async () => {
      const data = await getBars();

      setBars(data || []);
    })();
  }, []);
  console.log(bars)
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Bars List</h1>

      {bars.map(({ id, name }) => (
        <Button key={id} paddingLeft='50px' paddingRight='20px' rightSection={<CocktailIcon />} outline h="108px" w="100%" onClick={() => navigate(`/bars/${id}`)}>{name}</Button>
      ))}
    </div>
  )
}