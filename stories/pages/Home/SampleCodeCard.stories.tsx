import SampleCodeCard from '@/app/pages/Home/components/SampleCodeCard';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Pages/Home/SampleCodeCard',
  component: SampleCodeCard,
};

type Story = StoryObj<typeof SampleCodeCard>;

export const Default: Story = {
  args: {
    header: "Java開発者向け",
    title: "selenide",
    framework: {
      text: 'Selenide',
      url: 'https://selenide.org/'
    },
    language: "Java",
    testingFramework: {
      text: 'JUnit 5',
      url: 'https://junit.org/junit5/'
    },
    codeLink: {
      text: 'コードを見る',
      url: 'https://github.com/testplanisphere/hotel-example-selenide-ja'
    }
  }
}
