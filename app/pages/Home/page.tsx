import Footer from '@/app/components/Layout/Footer';
import Navigation from '@/app/components/Layout/Navigation';
import NavigationButton from '@/app/components/UI/NavigationButton';
import NavigationItem from '@/app/components/UI/NavigationItem';
import HomeGridItem from '@/app/pages/Home/components/HomeGridItem';
import HomeHeader from '@/app/pages/Home/components/HomeHeader';
import HomeTable from '@/app/pages/Home/components/HomeTable';
import SampleCodeCard from '@/app/pages/Home/components/InfoCard';
import HomeCard2 from '@/app/pages/Home/components/SampleCodeCard';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HOTEL PLANISPHERE - テスト自動化練習サイト</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="bg-gray-100">
        <HomeHeader title="HOTEL PLANISPHERE" />
        <Navigation>
          <NavigationItem title="ホーム" path="/pages/Home" />
          <NavigationItem title="宿泊予約" path="/pages/Plans" />
          <NavigationItem title="会員登録" path="/pages/Signup" />
          <NavigationItem title="マイページ" path="/pages/Mypage" />
          <NavigationButton title="ログイン" id="login-holder" />
        </Navigation>
        <div className="container mx-auto max-w-6xl">
          <SampleCodeCard title="このサイトはテスト自動化の学習用の練習サイトです。">
            <p className="text-base mb-4">Seleniumなどのブラウザテスト自動化を学習したい方が、実際にテストスクリプトを実行するための<strong>テスト対象サイト</strong>として作成されています。</p>
            <p className="text-base mb-4">書籍やブログなどでのサンプルやデモにもお使いいただけます。ライセンスは<a className="text-blue-500" href="https://github.com/testplanisphere/hotel-example-site/blob/master/LICENSE">MIT License</a>です。</p>
            <p className="text-base">自動テストの学習を目的として作成されていますが、テスト設計や技法の学習に使うことも可能です。</p>
          </SampleCodeCard>

          <SampleCodeCard title="サイトの構成">
            <p className="text-base">ホテルの予約サイトを模した作りになっています。ログイン・会員登録・ホテルの宿泊予約のそれぞれの入力フォームを用意しています。レスポンシブデザインに対応しているためモバイルブラウザでも表示できます。</p>
            <h4 className="text-2xl my-4">ご利用上の注意</h4>
            <ul className="list-disc pl-5 text-base ml-6">
              <li>2020年7月時点でのGoogle Chromeの最新版で動作確認をしています。</li>
              <li>サイトはGitHub Pagesでホストされています。</li>
              <li>入力データについて
                <ul className="list-disc pl-10">
                  <li>データはブラウザのCookieおよびSession Storage、Local Storageに保存されます。</li>
                  <li>DBなどサーバ側での保存はありません。</li>
                  <li>HTMLの仕様上、フォームへの入力内容はURLの末尾に付加されて送信されます。Githubサーバのログなどに残る可能性があるのでお気をつけください。</li>
                </ul>
              </li>
              <li>負荷テストには利用しないでください。</li>
              <li>このサイトを利用することによって生じた損害などにつきましては、一切の責任を負いません。</li>
            </ul>
            <h4 className="text-2xl my-4">構成の詳細</h4>
            <div className="grid grid-cols-3 gap-4">
              <HomeGridItem
                title="ログイン画面"
                content="シンプルなテキストインプットとボタンの画面です。ログイン情報はCookieに保存されます。会員登録画面で保存したユーザの他、登録済みのユーザ（下記）があります。"
              />
              <HomeGridItem
                title="会員登録画面"
                content="複数種類のインプットがある画面です。この画面で登録したユーザはLocal Storageに保存され、ログインに使用することができるようになります。"
              />
              <HomeGridItem
                title="マイページ画面"
                content="ログイン後に表示される画面です。登録したユーザ情報が表示され、確認に使うことができます。また、新規登録したユーザの場合アイコン画像の設定と退会（情報削除）ができます。"
              />
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-3 gap-4">
              <HomeGridItem
                title="宿泊プラン一覧画面"
                content="「宿泊予約」のメニューから表示できる画面です。表示されるプランは「未ログイン」「一般会員」「プレミアム会員」によって変わります。プラン情報はAjaxで非同期に読み込まれます（トップの一つを除く）。"
              />
              <HomeGridItem
                title="宿泊予約画面"
                content="宿泊の予約を行う画面です。新規ウィンドウで開きます。複数種類のインプットのほか、合計金額が入力内容で動的に計算され表示されます。基本料および宿泊数・人数の許容値は選択したプランで変わります。"
              />
              <HomeGridItem
                title="宿泊予約確認画面"
                content="宿泊予約の確定後に表示される画面です。予約で入力した内容の確認表示があります。また、アニメーション付きのダイアログが表示されます。"
              />
            </div>
            <div className="my-4">
              <p className="text-base"><a href="/about" target="_blank" className="text-blue-500">より詳しい解説はこちら（研修を作る方向け）</a></p>
            </div>
            <HomeTable data={[
              { email: "ichiro@example.com", password: "password", rank: "プレミアム会員" },
              { email: "sakura@example.com", password: "pass1234", rank: "一般会員" },
              { email: "jun@example.com", password: "pa55w0rd!", rank: "プレミアム会員" },
              { email: "yoshiki@example.com", password: "pass-pass", rank: "一般会員" }
            ]} />

            <p className="text-left ml-2 text-gray-500">登録済みユーザ</p>
          </SampleCodeCard>

          <SampleCodeCard title="サンプルコード">
            <p className="text-base mb-3">このサイトをテスト対象とした自動テストスクリプトです。学習の参考としてお使いください。</p>
            <div className="grid grid-cols-4">
              <HomeCard2
                header="Java開発者向け"
                title="selenide"
                framework={{
                  text: 'Selenide',
                  url: 'https://selenide.org/'
                }}
                language="Java"
                testingFramework={{
                  text: 'JUnit 5',
                  url: 'https://junit.org/junit5/'
                }}
                codeLink={{
                  text: 'コードを見る',
                  url: 'https://github.com/testplanisphere/hotel-example-selenide-ja'
                }}
              />

              <HomeCard2
                header="JavaScript開発者向け"
                title="webdriverio"
                framework={{
                  text: 'WebDriverIO',
                  url: 'https://webdriver.io/'
                }}
                language="JavaScript"
                testingFramework={{
                  text: 'Mocha',
                  url: 'https://mochajs.org/'
                }}
                codeLink={{
                  text: 'コードを見る',
                  url: 'https://github.com/testplanisphere/hotel-example-webdriverio-ja'
                }}
              />
              <HomeCard2
                header="Ruby開発者向け"
                title="capybara"
                framework={{
                  text: 'Capybara',
                  url: 'https://teamcapybara.github.io/capybara/'
                }}
                language="Ruby"
                testingFramework={{
                  text: 'RSpec',
                  url: 'https://rspec.info/'
                }}
                codeLink={{
                  text: 'コードを見る',
                  url: 'https://github.com/testplanisphere/hotel-example-capybara-ja'
                }}
              />
              <HomeCard2
                header="Java開発者向け"
                title="selenium4-java"
                framework={{
                  text: 'Selenium WebDriver',
                  url: 'https://www.selenium.dev/'
                }}
                language="Java"
                testingFramework={{
                  text: 'JUnit 5',
                  url: 'https://junit.org/junit5/'
                }}
                codeLink={{
                  text: 'コードを見る',
                  url: 'https://github.com/testplanisphere/hotel-example-selenium4-java-ja'
                }}
              />
            </div>
          </SampleCodeCard>
        </div>
        <Footer />
        <script src="/dist/index.bundle.js"></script>
      </div>
    </>
  );
}