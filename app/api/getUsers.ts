import { UserResponse } from "@/app/api/response/userResponse";

export const getUsers = async (): Promise<UserResponse[]> => {
  // mock response
  return [
    { email: "ichiro@example.com", password: "password", rank: "プレミアム会員" },
    { email: "sakura@example.com", password: "pass1234", rank: "一般会員" },
    { email: "jun@example.com", password: "pa55w0rd!", rank: "プレミアム会員" },
    { email: "yoshiki@example.com", password: "pass-pass", rank: "一般会員" }
  ];
};