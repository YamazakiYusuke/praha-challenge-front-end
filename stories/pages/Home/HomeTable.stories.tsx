import HomeTable from '@/app/pages/Home/components/HomeTable';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Pages/Home/HomeTable',
  component: HomeTable,
} as Meta;

type Story = StoryObj<typeof HomeTable>;

export const Default: Story = {
  args: {
    data: [
      { email: "ichiro@example.com", password: "password", rank: "プレミアム会員" },
      { email: "sakura@example.com", password: "pass1234", rank: "一般会員" },
      { email: "jun@example.com", password: "pa55w0rd!", rank: "プレミアム会員" },
      { email: "yoshiki@example.com", password: "pass-pass", rank: "一般会員" }
    ]
  },
};