export type UserType = {
  id: string,
  login: string,
  firstName: string,
  secondName: string,
}

export type RegisterUserType = {
  password: string,
} & UserType;

export type LoginUserType = {
  token: string,
} & UserType;