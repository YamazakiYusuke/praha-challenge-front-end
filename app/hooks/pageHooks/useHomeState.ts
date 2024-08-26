"use client";

import useUsersState from '@/app/hooks/usersState';
import { useEffect, useState } from 'react';

export interface UserTableData {
  email: string;
  password: string;
  rank: string;
}

interface HomeState {
  userData: UserTableData[];
}

const useHomeState = () => {
  const { userData } = useUsersState();
  const [value, setValue] = useState<HomeState>({ userData: [] });

  useEffect(() => {
    setValue({ userData });
  }, [userData]);

  return { state: value };
};

export default useHomeState;