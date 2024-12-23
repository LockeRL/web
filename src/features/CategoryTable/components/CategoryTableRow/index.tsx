import { useDisclosure } from '@mantine/hooks'
import { RoundedPlusIcon } from '../../../../assets'
import styles from './styles.module.css'
import { Collapse } from '@mantine/core';
import { Props } from './types';

export const CategoryTableRow: React.FC<Props> = ({
  data
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  const { name, price } = data;

  return (
    <>
      <div className={styles.product} onClick={toggle}>
        <p>
          {name}
        </p>

        <div>
          {price}₽
          <RoundedPlusIcon />
        </div>

      </div>
      {/* @ts-ignore */}
      {"ingredients" in data && (
        <Collapse in={opened}>
          <div className={styles.collapse}>
            <div>
              <h3>Compound</h3>
              <p>
                {data.ingredient}
              </p>
            </div>
          </div>
        </Collapse>
      )}
    </>
  )
}