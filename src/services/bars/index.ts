import { apiInstance } from "../api";
import { BarDrinksType, BarFoodType, BarHookahsType, BarType } from "./types";

export const getBars = async (): Promise<BarType[]> => {
  const { data } = await apiInstance.get('/bars');

  return data;
}

export const getBarFood = async (id: string): Promise<BarFoodType[]> => {
  const { data } = await apiInstance.get(`/bars/${id}/foods`);

  return data;
}

export const getBarHookahs = async (id: string): Promise<BarHookahsType[]> => {
  const { data } = await apiInstance.get(`/bars/${id}/hookahs`);

  return data;
}

export const getBarDrinks = async (id: string): Promise<BarDrinksType[]> => {
  const { data } = await apiInstance.get(`/bars/${id}/drinks`);

  return data;
}