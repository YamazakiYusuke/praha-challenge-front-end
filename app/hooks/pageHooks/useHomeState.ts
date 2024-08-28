"use client";

import useUsersState from '@/app/hooks/usersState';
import { UserTableData } from '@/app/pages/Home/components/HomeTable';
import { useEffect, useState } from 'react';

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