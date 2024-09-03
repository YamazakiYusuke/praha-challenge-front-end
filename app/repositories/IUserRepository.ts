import { UserResponse } from "@/app/api/response/userResponse";

export interface IUserRepository {
  fetchUserData(): Promise<UserResponse[]>;
}