import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>HOTEL PLANISPHERE - テスト自動化練習サイト</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      <div className="bg-gray-100">
        <div className="h-40 flex items-center justify-center">
          <h1 className="text-center text-7xl font-extralight my-5">HOTEL PLANISPHERE</h1>
        </div>
        <nav className="bg-gray-800 py-2 h-20 flex items-center">
          <div className="container mx-auto flex justify-center items-center max-w-6xl">
            <ul className="lg:flex lg:justify-between text-base text-white pt-4 lg:pt-0">
            <li className="px-8 active flex items-center">
              <Link href="/pages/Home" className="text-gray-400 hover:text-white">ホーム</Link>
            </li>
            <li className="px-8 flex items-center">
              <Link href="/pages/Plans" className="text-gray-400 hover:text-white">宿泊予約</Link>
            </li>
            <li className="px-8 block flex items-center" id="signup-holder">
              <Link href="/pages/Signup" className="text-gray-400 hover:text-white">会員登録</Link>
            </li>
            <li className="px-8 hidden flex items-center" id="mypage-holder">
              <Link href="/pages/Mypage" className="text-gray-400 hover:text-white">マイページ</Link>
            </li>
            <li className="bg-transparent rounded px-8 block flex items-center" id="login-holder">
              <button className="bg-transparent hover:bg-gray-500 text-gray-500 hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                ログイン
              </button>
            </li>
            </ul>
          </div>
        </nav>
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white my-3 p-8 shadow mt-5">
            <h2 className="text-3xl mb-4">このサイトはテスト自動化の学習用の練習サイトです。</h2>
            <p className="text-base mb-4">Seleniumなどのブラウザテスト自動化を学習したい方が、実際にテストスクリプトを実行するための<strong>テスト対象サイト</strong>として作成されています。</p>
            <p className="text-base mb-4">書籍やブログなどでのサンプルやデモにもお使いいただけます。ライセンスは<a className="text-blue-500" href="https://github.com/testplanisphere/hotel-example-site/blob/master/LICENSE">MIT License</a>です。</p>
            <p className="text-base">自動テストの学習を目的として作成されていますが、テスト設計や技法の学習に使うことも可能です。</p>
          </div>
          <div className="bg-white my-3 p-8 shadow">
            <h3 className="text-3xl mb-4">サイトの構成</h3>
            <p className="text-base">ホテルの予約サイトを模した作りになっています。ログイン・会員登録・ホテルの宿泊予約のそれぞれの入力フォームを用意しています。レスポンシブデザインに対応しているためモバイルブラウザでも表示できます。</p>
            <h4 className="text-2xl my-4 text-md">ご利用上の注意</h4>
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
            <h4 className="text-2xl my-4 text-md">構成の詳細</h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <h5 className="text-xl my-2 text-md">ログイン画面</h5>
                <p className="text-base">シンプルなテキストインプットとボタンの画面です。ログイン情報はCookieに保存されます。会員登録画面で保存したユーザの他、登録済みのユーザ（下記）があります。</p>
              </div>
              <div>
                <h5 className="text-xl my-2 text-md">会員登録画面</h5>
                <p className="text-base">複数種類のインプットがある画面です。この画面で登録したユーザはLocal Storageに保存され、ログインに使用することができるようになります。</p>
              </div>
              <div>
                <h5 className="text-xl my-2 text-md">マイページ画面</h5>
                <p className="text-base">ログイン後に表示される画面です。登録したユーザ情報が表示され、確認に使うことができます。また、新規登録したユーザの場合アイコン画像の設定と退会（情報削除）ができます。</p>
              </div>
            </div>
            <hr className="my-5" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <h5 className="text-xl my-2 text-md">宿泊プラン一覧画面</h5>
                <p className="text-base">「宿泊予約」のメニューから表示できる画面です。表示されるプランは「未ログイン」「一般会員」「プレミアム会員」によって変わります。プラン情報はAjaxで非同期に読み込まれます（トップの一つを除く）。</p>
              </div>
              <div>
                <h5 className="text-xl my-2 text-md">宿泊予約画面</h5>
                <p className="text-base">宿泊の予約を行う画面です。新規ウィンドウで開きます。複数種類のインプットのほか、合計金額が入力内容で動的に計算され表示されます。基本料および宿泊数・人数の許容値は選択したプランで変わります。</p>
              </div>
              <div>
                <h5 className="text-xl my-2 text-md">宿泊予約確認画面</h5>
                <p className="text-base">宿泊予約の確定後に表示される画面です。予約で入力した内容の確認表示があります。また、アニメーション付きのダイアログが表示されます。</p>
              </div>
            </div>
            <div className="my-4">
              <p className="text-base"><a href="/about" target="_blank" className="text-blue-500">より詳しい解説はこちら（研修を作る方向け）</a></p>
            </div>
            <table className="table-auto my-3 w-full">
              <thead>
                <tr>
                  <th className="px-4 py-3 border-t border-b-2 text-left">#</th>
                  <th className="px-4 py-3 border-t border-b-2 text-left">メールアドレス</th>
                  <th className="px-4 py-3 border-t border-b-2 text-left">パスワード</th>
                  <th className="px-4 py-3 border-t border-b-2 text-left">会員ランク</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b">1</td>
                  <td className="px-4 py-3 border-b"><code className="text-red-500">ichiro@example.com</code></td>
                  <td className="px-4 py-3 border-b"><code className="text-red-500">password</code></td>
                  <td className="px-4 py-3 border-b">プレミアム会員</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">2</td>
                  <td className="px-4 py-3 border-b"><code className="text-red-500">sakura@example.com</code></td>
                  <td className="px-4 py-3 border-b"><code className="text-red-500">pass1234</code></td>
                  <td className="px-4 py-3 border-b">一般会員</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b">3</td>
                  <td className="px-4 py-3 border-b"><code className="text-red-500">jun@example.com</code></td>
                  <td className="px-4 py-3 border-b"><code className="text-red-500">pa55w0rd!</code></td>
                  <td className="px-4 py-3 border-b">プレミアム会員</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4</td>
                  <td className="px-4 py-3"><code className="text-red-500">yoshiki@example.com</code></td>
                  <td className="px-4 py-3"><code className="text-red-500">pass-pass</code></td>
                  <td className="px-4 py-3">一般会員</td>
                </tr>
              </tbody>
            </table>
            <p className="text-left ml-2 text-gray-500">登録済みユーザ</p>
          </div>
          <div className="bg-white my-3 p-8 shadow">
            <h3 className="text-3xl mb-4">サンプルコード</h3>
            <p className="text-base mb-3">このサイトをテスト対象とした自動テストスクリプトです。学習の参考としてお使いください。</p>
            <div className="grid grid-cols-4">
              <div className="card shadow rounded mr-7 border">
                <div className="card-header bg-gray-100 border-b p-3">Java開発者向け</div>
                <div className="card-body p-3">
                  <h5 className="card-title text-xl font-medium mb-2">selenide</h5>
                  <dl className="small">
                    <dt className="text-sm font-semibold">フレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://selenide.org/">Selenide</a></dd>
                    <dt className="text-sm font-semibold">プログラミング言語</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://selenide.org/">Java</a></dd>
                    <dt className="text-sm font-semibold">テスティングフレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://junit.org/junit5/">JUnit 5</a></dd>
                  </dl>
                  <a href="https://github.com/testplanisphere/hotel-example-selenide-ja" className="card-link text-blue-500">コードを見る</a>
                </div>
              </div>
              <div className="card shadow rounded mr-7 border">
                <div className="card-header bg-gray-100 border-b p-3">JavaScript開発者向け</div>
                <div className="card-body p-3">
                  <h5 className="card-title text-xl font-medium mb-2">webdriverio</h5>
                  <dl className="small">
                    <dt className="text-sm font-semibold">フレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://webdriver.io/">WebDriverIO</a></dd>
                    <dt className="text-sm font-semibold">プログラミング言語</dt>
                    <dd className="pb-2">JavaScript</dd>
                    <dt className="text-sm font-semibold">テスティングフレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://mochajs.org/">Mocha</a></dd>
                  </dl>
                  <a href="https://github.com/testplanisphere/hotel-example-webdriverio-ja" className="card-link text-blue-500">コードを見る</a>
                </div>
              </div>
              <div className="card shadow rounded mr-7 border">
                <div className="card-header bg-gray-100 border-b p-3">Ruby開発者向け</div>
                <div className="card-body p-3">
                  <h5 className="card-title text-xl font-medium mb-2">capybara</h5>
                  <dl className="small">
                    <dt className="text-sm font-semibold">フレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://teamcapybara.github.io/capybara/">Capybara</a></dd>
                    <dt className="text-sm font-semibold">プログラミング言語</dt>
                    <dd className="pb-2">Ruby</dd>
                    <dt className="text-sm font-semibold">テスティングフレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://rspec.info/">RSpec</a></dd>
                  </dl>
                  <a href="https://github.com/testplanisphere/hotel-example-capybara-ja" className="card-link text-blue-500">コードを見る</a>
                </div>
              </div>
              <div className="card shadow rounded border">
                <div className="card-header bg-gray-100 border-b p-3">Java開発者向け</div>
                <div className="card-body p-3">
                  <h5 className="card-title text-xl font-medium mb-2">selenium4-java</h5>
                  <dl className="small">
                    <dt className="text-sm font-semibold">フレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://www.selenium.dev/">Selenium WebDriver</a></dd>
                    <dt className="text-sm font-semibold">プログラミング言語</dt>
                    <dd className="pb-2">Java</dd>
                    <dt className="text-sm font-semibold">テスティングフレームワーク</dt>
                    <dd className="pb-2"><a className="text-blue-500 text-xs" href="https://junit.org/junit5/">JUnit 5</a></dd>
                  </dl>
                  <a href="https://github.com/testplanisphere/hotel-example-selenium4-java-ja" className="card-link text-blue-500">コードを見る</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="text-center py-10">
          <div className="container">
            <ul className="list-inline">
              <li className="list-inline-item text-blue-500 pb-5"><a href="https://github.com/testplanisphere/hotel-example-site">GitHub</a></li>
            </ul>
            <p className="text-sm text-gray-500">© 2020 Test Planisphere</p>
          </div>
        </footer>
        <script src="/dist/index.bundle.js"></script>
      </div>
    </>
  );
}