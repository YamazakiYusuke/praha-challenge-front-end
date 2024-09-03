import Link from "next/link";

export default function NavigationButton({ title, id }: { title: string, id: string }) {
  return(
    <div className="bg-transparent rounded px-8 block flex items-center" id={id}>
      <button className="bg-transparent hover:bg-gray-500 text-gray-500 hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
        {title}
      </button>
    </div>
  )
}
