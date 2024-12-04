import Navigation from '@/app/components/Layout/Navigation';
import NavigationButton from '@/app/components/UI/NavigationButton';
import NavigationItem from '@/app/components/UI/NavigationItem';
import type { StoryObj } from '@storybook/react';

export default {
  title: 'Components/Layout/Navigation',
  component: Navigation,
};

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  args: {
    children: [
      <NavigationItem key="home" title="ホーム" path="/pages/Home" />,
      <NavigationItem key="plans" title="宿泊予約" path="/pages/Plans" />,
      <NavigationItem key="signup" title="会員登録" path="/pages/Signup" />,
      <NavigationItem key="mypage" title="マイページ" path="/pages/Mypage" />,
      <NavigationButton key="login" title="ログイン" />
    ],
  },
};
