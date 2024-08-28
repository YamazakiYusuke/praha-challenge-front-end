import { Meta, StoryFn, StoryObj } from '@storybook/react';
import HomeGridItem from '../../../app/pages/Home/components/HomeGridItem';

export default {
  title: 'Pages/Home/HomeGridItem',
  component: HomeGridItem,
};

type Story = StoryObj<typeof HomeGridItem>;

export const Default: Story = {
  args: {
    title: 'Sample Title',
    content: 'This is a sample content for the HomeGridItem component.',
  },
};
