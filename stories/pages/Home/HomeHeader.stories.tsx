import HomeHeader from '@/app/pages/Home/components/HomeHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeHeader> = {
  title: 'Pages/Home/HomeHeader',
  component: HomeHeader,
};

export default meta;

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  args: {
    title: 'HOTEL PLANISPHERE'
  },
};
