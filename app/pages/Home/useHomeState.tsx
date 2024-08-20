"use client";

import { useState, useEffect } from 'react';

interface HomeState {
  userData: UserData[]
}

export interface UserData {
  email: string;
  password: string;
  rank: string;
}

const useHomeState = () => {
  const [value, setValue] = useState<HomeState>({ userData: [] });

  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const result: UserData[] = [
        { email: "ichiro@example.com", password: "password", rank: "プレミアム会員" },
        { email: "sakura@example.com", password: "pass1234", rank: "一般会員" },
        { email: "jun@example.com", password: "pa55w0rd!", rank: "プレミアム会員" },
        { email: "yoshiki@example.com", password: "pass-pass", rank: "一般会員" }
      ];
      setValue({ userData: result });
    };

    fetchData();
  }, []);

  return { state: value };
};

export default useHomeState;