import SocialItem, { SocialItemProps } from "./SocialItem";
import github from '../../../public/github.svg'
import linkedin from '../../../public/linkedin.svg'

function renderSocials() {
  const items: SocialItemProps[] = [
    { image: github, alt: "github" },
    { image: linkedin, alt: "LinkedIn" },
  ]

  return items.map((item, index) => (
    <SocialItem key={`${item.alt}-${index}`} alt={item.alt} image={item.image} />
  ))
}

export default function Socials() {
  return (
    <div className="flex gap-8">
      {renderSocials()}
    </div>
  )
}