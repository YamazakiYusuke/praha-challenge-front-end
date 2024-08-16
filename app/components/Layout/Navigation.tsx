import NavigationButton from "@/app/components/UI/NavigationButton";
import NavigationItem from "@/app/components/UI/NavigationItem";
import { ReactElement } from "react";

type NavigationChild = ReactElement<typeof NavigationItem> | ReactElement<typeof NavigationButton>;

export default function Navigation({
  children,
}: Readonly<{
  children: NavigationChild | NavigationChild[];
}>) {
  return (
    <nav className="bg-gray-800 py-2 h-20 flex items-center">
      <div className="container mx-auto flex justify-center items-center max-w-6xl">
        <ul className="lg:flex lg:justify-between text-base text-white pt-4 lg:pt-0">
          {children}
        </ul>
      </div>
    </nav>
  );
}