import type { StoryObj } from '@storybook/react';
import NavigationButton from '../../../app/components/UI/NavigationButton';

export default {
  title: 'Components/UI/NavigationButton',
  component: NavigationButton,
};

type Story = StoryObj<typeof NavigationButton>;

export const Default: Story = {
  args: {
    title: 'ログイン',
  },
};
