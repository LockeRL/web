import { useDisclosure } from '@mantine/hooks'
import { RoundedPlusIcon } from '../../../../assets'
import styles from './styles.module.css'
import { Collapse } from '@mantine/core';
import { Props } from './types';
import { useEffect } from 'react';

export const CategoryTableRow: React.FC<Props> = ({
  data,
  selectedCategory
}) => {
  const [opened, { toggle, close }] = useDisclosure(false);

  const { name, price } = data;

  useEffect(() => {
    close();
  }, [selectedCategory]);

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
                {data.ingredients || data.description || ''}
              </p>
            </div>
          </div>
        </Collapse>
      )}
    </>
  )
}