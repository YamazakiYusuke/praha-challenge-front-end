import { UserData } from '@/app/hooks/pageHooks/useHomeState';

export default function HomeTable({ data }: { data: UserData[] }) {
  return (
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
        {data.map((user, index) => {
          const isLastItem = index === data.length - 1;
          const borderClass = isLastItem ? '' : 'border-b';
          return (
            <tr key={index}>
              <td className={`px-4 py-3 ${borderClass}`}>{index + 1}</td>
              <td className={`px-4 py-3 ${borderClass}`}>
                <code className="text-red-500">{user.email}</code>
              </td>
              <td className={`px-4 py-3 ${borderClass}`}>
                <code className="text-red-500">{user.password}</code>
              </td>
              <td className={`px-4 py-3 ${borderClass}`}>{user.rank}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}