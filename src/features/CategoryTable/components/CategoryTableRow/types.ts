import { BarDrinksType, BarFoodType, BarHookahsType } from "../../../../services"

export type Props = {
  data: BarDrinksType | BarFoodType | BarHookahsType;
  selectedCategory: string;
}