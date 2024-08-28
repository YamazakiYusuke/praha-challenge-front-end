import { Meta, StoryFn } from '@storybook/react';
import HomeGridItem from '../../../app/pages/Home/components/HomeGridItem';

export default {
  title: 'Pages/Home/HomeGridItem',
  component: HomeGridItem,
} as Meta;

const Template: StoryFn<{ title: string; content: string }> = (args) => <HomeGridItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  content: 'This is a sample content for the HomeGridItem component.',
};
