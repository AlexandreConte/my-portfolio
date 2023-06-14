import Image from "next/image";
import logo from "/public/logo.svg"
import Link from "next/link";

interface LogoProps {
  className?: string
}

export default function Logo(props: LogoProps) {
  return (
    <Link href="/">
      <h1 className="flex gap-3 p-2">
        <Image
          alt="Alexandre Conte React Developer Logo"
          src={logo}
          width={40}
          height={40}
        />
        <span className="hidden sm:flex text-xl">Alexandre Conte</span>
      </h1>
    </Link>
  )
}