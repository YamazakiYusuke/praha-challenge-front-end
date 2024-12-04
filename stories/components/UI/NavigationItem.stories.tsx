import NavigationItem from '../../../app/components/UI/NavigationItem';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/UI/NavigationItem',
  component: NavigationItem,
};

type Story = StoryObj<typeof NavigationItem>;

export const Default: Story = {
  args: {
    title: 'ホーム',
    path: '/pages/Home',
  },
};

export const Plans: Story = {
  args: {
    title: '宿泊予約',
    path: '/pages/Plans',
  },
};

export const Signup: Story = {
  args: {
    title: '会員登録',
    path: '/pages/Signup',
  },
};

export const Mypage: Story = {
  args: {
    title: 'マイページ',
    path: '/pages/Mypage',
  },
};
