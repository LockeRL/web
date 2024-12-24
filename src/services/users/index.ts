import { apiInstance } from "../api";
import { LoginUserType, RegisterUserType } from "./types";

export const registerUser = async (body: RegisterUserType): Promise<number> => {
  const { status } = await apiInstance.post('/users', { ...body });

  if (status === 400) {
    throw new Error('Invalid input or missing data');
  }

  if (status === 409) {
    throw new Error('User already exists')
  }

  return status
}

export const loginUser = async (login: string, password: string): Promise<LoginUserType> => {
  const { data, status } = await apiInstance.get(`/users/${login}/${password}`);

  if (status === 400) {
    throw new Error('Invalid input or missing data');
  }

  if (status === 404) {
    throw new Error('User not found')
  }

  return data;
}