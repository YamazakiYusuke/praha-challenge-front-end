
export default function HomeHeader({ title }: { title: string }) {
  return(
    <div className="h-40 flex items-center justify-center">
      <h1 className="text-center text-7xl font-extralight my-5">{title}</h1>
    </div>
  )
}
