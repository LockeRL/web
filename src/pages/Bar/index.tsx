import { useNavigate, useParams } from "react-router-dom"

import styles from './styles.module.css';
import { Button } from "../../entities";
import { MapIcon, PointerIcon } from "../../assets";
import { CategoryTable } from "../../features";

export const Bar = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  if (!id) {
    navigate('/')
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.location}>
        <Button w="866px" h="114px" paddingLeft="50px" paddingRight="20px" disabled outline>Какая-нибудь хуета</Button>
        <Button w="97px" h="97px"><MapIcon /></Button>
      </div>

      <div className={styles.contacts}>
        <div>
          <PointerIcon />
          <p>Moscow</p>
        </div>

        <p>
          Phone number - 8989898989
        </p>
      </div>

      <CategoryTable id={id} />
    </div>
  )
}