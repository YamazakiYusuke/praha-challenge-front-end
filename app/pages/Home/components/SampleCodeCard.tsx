
type LinkData = {
  text: string;
  url: string;
};

type HomeCard2Props = {
  header: string;
  title: string;
  framework: LinkData;
  language: string;
  testingFramework: LinkData;
  codeLink: LinkData;
};

export default function SampleCodeCard({
  header, title, framework, language, testingFramework, codeLink
}: Readonly<HomeCard2Props>) {
  return (
    <div className="card shadow rounded mr-7 border">
      <div className="card-header bg-gray-100 border-b p-3">{header}</div>
      <div className="card-body p-3">
        <h5 className="card-title text-xl font-medium mb-2">{title}</h5>
        <dl className="small">
          <dt className="text-sm font-semibold">フレームワーク</dt>
          <dd className="pb-2"><a className="text-blue-500 text-xs" href={framework.url}>{framework.text}</a></dd>
          <dt className="text-sm font-semibold">プログラミング言語</dt>
          <dd className="pb-2">{language}</dd>
          <dt className="text-sm font-semibold">テスティングフレームワーク</dt>
          <dd className="pb-2"><a className="text-blue-500 text-xs" href={testingFramework.url}>{testingFramework.text}</a></dd>
        </dl>
        <a href={codeLink.url} className="card-link text-blue-500">{codeLink.text}</a>
      </div>
    </div>
  );
}