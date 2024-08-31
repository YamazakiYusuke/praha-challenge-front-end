
import OrdinaryButton, { OrdinaryButtonBackgroundColor, OrdinaryButtonSize } from '@/app/components/UI/OrdinaryButton';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Components/UI/OrdinaryButton',
  component: OrdinaryButton,
};

type Story = StoryObj<typeof OrdinaryButton>;

export const RedButton: Story = {
  args: {
    children: [
      <p>Red Button</p>,
      <p>ボタンを押すとアラートが表示されます。</p>,
    ],
    color: OrdinaryButtonBackgroundColor.RED,
    size: OrdinaryButtonSize.MEDIUM,
    disabled: false,
    onClick: () => alert('Red Button Clicked'),
  },
};

export const BlueButton: Story = {
  args: {
    children: [
      <p>Blue Button</p>,
      <p>ボタンを押すとアラートが表示されます。</p>,
    ],
    color: OrdinaryButtonBackgroundColor.BLUE,
    size: OrdinaryButtonSize.MEDIUM,
    disabled: false,
    onClick: () => alert('Blue Button Clicked'),
  },
};

export const GreenButton: Story = {
  args: {
    children: [
      <p>Green Button</p>,
      <p>ボタンを押すとアラートが表示されます。</p>,
    ],
    color: OrdinaryButtonBackgroundColor.GREEN,
    size: OrdinaryButtonSize.MEDIUM,
    disabled: false,
    onClick: () => alert('Green Button Clicked'),
  },
};

export const DisabledButton: Story = {
  args: {
    children: [
      <p>Disabled Button</p>,
      <p>ボタンを押しても何も起きません。</p>,
    ],
    color: OrdinaryButtonBackgroundColor.RED,
    size: OrdinaryButtonSize.MEDIUM,
    disabled: true,
    onClick: () => alert('Disabled Button Clicked'),
  },
};

export const SmallButton: Story = {
  args: {
    children: [
      <p>Small Button</p>,
      <p>ボタンを押すとアラートが表示されます。</p>,
    ],
    color: OrdinaryButtonBackgroundColor.BLUE,
    size: OrdinaryButtonSize.SMALL,
    disabled: false,
    onClick: () => alert('Small Button Clicked'),
  },
};

export const LargeButton: Story = {
  args: {
    children: [
      <p>Large Button</p>,
      <p>ボタンを押すとアラートが表示されます。</p>,
    ],
    color: OrdinaryButtonBackgroundColor.GREEN,
    size: OrdinaryButtonSize.LARGE,
    disabled: false,
    onClick: () => alert('Large Button Clicked'),
  },
};

