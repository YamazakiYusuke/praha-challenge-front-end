import HomeHeader from '@/app/pages/Home/components/HomeHeader';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Pages/Home/HomeHeader',
  component: HomeHeader,
};

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  args: {
    title: 'HOTEL PLANISPHERE'
  },
};
