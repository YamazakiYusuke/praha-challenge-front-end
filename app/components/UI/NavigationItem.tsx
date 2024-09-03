import Link from "next/link";

export default function NavigationItem({ title, path }: { title: string, path: string }) {
  return(
    <div className="px-8 active flex items-center">
      <Link href={path} className="text-gray-400 hover:text-white">{title}</Link>
    </div>
  )
}
