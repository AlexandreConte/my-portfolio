import { IconBrandReact } from "@tabler/icons-react"
import { SkillProps } from "@/components/template/skills/Skill";
import { createContext, useState } from "react";

export interface SkillContextProps {
  selectedSkill: SkillProps
  setSelectedSkill: (props: any) => void
}

const initialState = { "title": "ReactJs", image: <IconBrandReact size={80} /> }

const SkillContext = createContext<SkillContextProps>({
  selectedSkill: initialState,
  setSelectedSkill: () => { },
})

export function SkillProvider(props: any) {

  const [selectedSkill, setSelectedSkill] = useState<any>(initialState)

  return (
    <SkillContext.Provider
      value={{
        selectedSkill, setSelectedSkill
      }}
    >
      {props.children}
    </SkillContext.Provider>
  )
}

export default SkillContext