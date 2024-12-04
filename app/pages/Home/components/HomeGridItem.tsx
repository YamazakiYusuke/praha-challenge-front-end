
export default function HomeGridItem({
  title,
  content,
}: Readonly<{
  title: string,
  content: string;
}>) {
  return (
    <div>
      <h5 className="text-xl my-2">{title}</h5>
      <p className="text-base">{content}</p>
    </div>
  );
}