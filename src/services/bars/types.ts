export type BarType = {
  id: string,
  org: {
    category: string,
    description: string,
    id: string,
    name: string,
  },
  score: string,
  name: string,
  phone: string,
  website: string,
  city: string,
  longitude: number,
  latitude: number,
  schedule: string,
}

export type BarFoodType = {
  id: string,
  name: string,
  ingredients: string,
  price: number,
}

export type BarDrinksType = {
  id: string,
  name: string,
  ingredients: string,
  type: string,
  price: number,
}

export type BarHookahsType = {
  id: string,
  name: string,
  description: string,
  type: string,
  price: number,
}