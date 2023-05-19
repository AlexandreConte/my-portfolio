import NavbarItem, { NavbarItemProps } from "./NavbarItem";

function renderItems() {
  const items: NavbarItemProps[] = [
    { children: "Projects", link: '#projects' },
    { children: "Contac Me", link: '#contact-me' },
  ]

  return (
    items.map(item => (
      <NavbarItem key={item.children} image={item.image} link={item.link}>{item.children}</NavbarItem>)
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