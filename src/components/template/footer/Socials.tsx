import SocialItem, { SocialItemProps } from "./SocialItem";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGmail
} from "@tabler/icons-react"

function renderSocials() {
  const items: SocialItemProps[] = [
    { image: <IconBrandGithub />, alt: "github", link: 'https://github.com/AlexandreContee' },
    { image: <IconBrandLinkedin />, alt: "LinkedIn", link: 'https://www.linkedin.com/in/alexandreconteprog/' },
    { image: <IconBrandGmail />, alt: "Gmail", link: "mailto:alexandreconte.dev@gmail.com" },
  ]

  return items.map((item, index) => (
    <SocialItem key={`${item.alt}-${index}`} alt={item.alt} image={item.image} link={item.link} />
  ))
}

export default function Socials() {
  return (
    <div className="flex gap-8 flex-wrap justify-center">
      {renderSocials()}
    </div>
  )
}