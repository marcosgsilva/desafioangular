import { User } from "./user.interface";

export type UserPlayload = Omit<User, 'id'>