
export default function SampleCodeCard({
  title,
  children,
}: Readonly<{
  title: string,
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white my-3 p-8 shadow mt-5">
      <h2 className="text-3xl mb-4">{title}</h2>
      {children}
    </div>
  );
}