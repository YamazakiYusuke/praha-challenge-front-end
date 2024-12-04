"use client";

import { UserResponse } from '@/app/api/response/userResponse';
import { UserRepository } from '@/app/repositories/UserRepository';
import { useEffect, useState } from 'react';

const useUsersState = () => {
  const [userData, setUserData] = useState<UserResponse[]>([]);
  const userRepository = new UserRepository();

  useEffect(() => {
    const fetchData = async () => {
      const result = await userRepository.fetchUserData();
      setUserData(result);
    };

    fetchData();
  }, []);

  return { userData };
};

export default useUsersState;