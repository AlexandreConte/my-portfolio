import NavbarItem, { NavbarItemProps } from "./NavbarItem";
import github from '../../../public/github.svg'
import linkedin from '../../../public/linkedin.svg'

function renderItems() {
  const items: NavbarItemProps[] = [
    { children: "Github", image: github, link: 'https://www.github.com/AlexandreContee' },
    { children: "LinkedIn", image: linkedin, link: 'https://www.linkedin.com/in/alexandreconteprog/' },
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