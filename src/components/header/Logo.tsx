import Image from "next/image";
import logo from "../../../public/logo.svg"
import Link from "next/link";

interface LogoProps {
  className?: string
}

export default function Logo(props: LogoProps) {
  return (
    <Link className="flex gap-3 pr-2" href="/">
      <Image
        alt="Logo"
        src={logo}
        width={40}
      />
      <h1 className="hidden sm:flex text-xl">Alexandre Conte</h1>
    </Link>
  )
}