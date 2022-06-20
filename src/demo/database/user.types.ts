export interface IUser {
  id: number;
  username: string;
}

export interface UserRequestDto {
  username: string;
}

export interface IDatabaseState {
  users: IUser[];
}
