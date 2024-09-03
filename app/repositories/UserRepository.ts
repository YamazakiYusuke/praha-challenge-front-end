import { getUsers } from '@/app/api/getUsers';
import { UserResponse } from '@/app/api/response/userResponse';
import { IUserRepository } from './IUserRepository';

export class UserRepository implements IUserRepository {
  async fetchUserData(): Promise<UserResponse[]> {
    // Simulate fetching data
    return getUsers()
  }
}