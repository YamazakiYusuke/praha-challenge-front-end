import NavigationButton from '../../../app/components/UI/NavigationButton';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/UI/NavigationButton',
  component: NavigationButton,
};

type Story = StoryObj<typeof NavigationButton>;

export const Default: Story = {
  args: {
    title: 'ログイン',
    id: 'login-holder',
  },
};
