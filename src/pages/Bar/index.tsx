import { useNavigate, useParams } from "react-router-dom"

import styles from './styles.module.css';
import { Button } from "../../entities";
import { MapIcon, PointerIcon } from "../../assets";
import { CategoryTable } from "../../features";
import { useEffect, useState } from "react";
import { BarType, getBars } from "../../services";

export const Bar = () => {
  const navigate = useNavigate();
  const [bar, setBar] = useState<BarType>();
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      navigate('/')
    }

    (async () => {
      const data = await getBars();

      if (!data) {
        navigate('/');
        return;
      }

      data.forEach(data => {
        if (data.id === id) {
          setBar(data);
        }
      })
    })()
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <Button w="866px" h="114px" paddingLeft="50px" paddingRight="20px" disabled outline>{bar?.name}</Button>
        <Button w="97px" h="97px"><MapIcon /></Button>
      </div>

      <div className={styles.contacts}>
        <div>
          <PointerIcon />
          <p>{bar?.city}</p>
        </div>

        <p>
          Phone number - {bar?.phone}
        </p>

        <p>
          Website - {bar?.website}
        </p>
      </div>

      <CategoryTable id={id!} />
    </div>
  )
}