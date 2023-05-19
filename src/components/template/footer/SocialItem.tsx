import React from "react"

export interface SocialItemProps {
  image: any
  alt: string
  link: string
}

export default function SocialItem(props: SocialItemProps) {
  return (
    <a href={props.link} className="hover:scale-110 transition-transform" target="_blank">
      {React.cloneElement(props.image, {
        size: 48
      })}
    </a>
  )
}