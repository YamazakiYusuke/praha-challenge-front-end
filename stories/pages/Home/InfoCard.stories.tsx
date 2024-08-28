import InfoCard from '@/app/pages/Home/components/InfoCard';
import { StoryObj } from '@storybook/react';

export default {
  title: 'Pages/Home/InfoCard',
  component: InfoCard,
};

type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
  args: {
    title: "このサイトはテスト自動化の学習用の練習サイトです。",
    children: [
      <>
        <p className="text-base mb-4">Seleniumなどのブラウザテスト自動化を学習したい方が、実際にテストスクリプトを実行するための<strong>テスト対象サイト</strong>として作成されています。</p>
        <p className="text-base mb-4">書籍やブログなどでのサンプルやデモにもお使いいただけます。ライセンスは<a className="text-blue-500" href="https://github.com/testplanisphere/hotel-example-site/blob/master/LICENSE">MIT License</a>です。</p>
        <p className="text-base">自動テストの学習を目的として作成されていますが、テスト設計や技法の学習に使うことも可能です。</p>
      </>
    ]
  },
};