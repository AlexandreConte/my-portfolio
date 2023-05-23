import NavbarItem, { NavbarItemProps } from "./NavbarItem";
// import {
//   IconCodeDots,
// } from '@tabler/icons-react'

function renderItems() {
  const items: NavbarItemProps[] = [
    // { children: "Projects", link: '#projects', image: <IconCodeDots size={20} /> },
    { children: "Contac Me", link: '#contact-me', alwaysActive: true },
  ]

  return (
    items.map(item => (
      <NavbarItem key={item.children} className={!item.alwaysActive ? "hidden lg:flex" : ""} image={item.image} link={item.link}>{item.children}</NavbarItem>)
    )
  )
}

export default function Navbar() {
  return (
    <div
      className="flex gap-5"
    >
      {renderItems()}
    </div>
  )
}