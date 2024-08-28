import NavigationButton from '../../../app/components/UI/NavigationButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof NavigationButton> = {
  title: 'Components/UI/NavigationButton',
  component: NavigationButton,
};

export default meta;

type Story = StoryObj<typeof NavigationButton>;

export const Default: Story = {
  args: {
    title: 'ログイン',
    id: 'login-holder',
  },
};
