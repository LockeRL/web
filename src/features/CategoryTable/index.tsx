import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Props } from './types';
import { CategoryTableRow } from './components/CategoryTableRow';
import { BarDrinksType, BarFoodType, BarHookahsType, getBarDrinks, getBarFood, getBarHookahs } from '../../services';

export const CategoryTable: React.FC<Props> = ({
  id,
  categories = ['Foods', 'Drinks', 'Hookahs']
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0] || '');

  const [drinks, setDrinks] = useState<BarDrinksType[]>([]);
  const [foods, setFood] = useState<BarFoodType[]>([]);
  const [hookahs, setHookahs] = useState<BarHookahsType[]>([]);

  useEffect(() => {
    (async () => {
      const [drinks = [], food = [], hookahs = []] = await Promise.all([
        getBarDrinks(id),
        getBarFood(id),
        getBarHookahs(id),
      ]);

      setDrinks(drinks);
      setFood(food);
      setHookahs(hookahs);
    })()
  }, [id]);

  const renderTableRows = () => {
    switch (selectedCategory) {
      case 'Foods':
        return foods.map((data, key) => (
          <CategoryTableRow data={data} key={key} />
        ))
      case 'Drinks':
        return drinks.map((data, key) => (
          <CategoryTableRow data={data} key={key} />
        ))
      case 'Hookahs':
        return hookahs.map((data, key) => (
          <CategoryTableRow data={data} key={key} />
        ))
      default:
        return null;
    }
  }

  return (
    <div className={styles.container}>

      <div className={styles.header}>
        {categories.map((category, index) => (
          <div key={index} className={styles.category} onClick={() => setSelectedCategory(category)} style={{ backgroundColor: selectedCategory === category ? 'var(--color-secondary)' : 'var(--color-primary)' }}>
            {category}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        {renderTableRows()}
      </div>
    </div >
  )
}