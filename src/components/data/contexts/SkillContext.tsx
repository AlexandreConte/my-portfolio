import { SkillProps } from "@/components/content/skills/Skill";
import { createContext, useState } from "react";

export interface SkillContextProps {
  selectedSkill: SkillProps | null
  setSelectedSkill: (props: any) => void
}

const SkillContext = createContext<SkillContextProps>({
  selectedSkill: null,
  setSelectedSkill: () => { },
})

export function SkillProvider(props: any) {

  const [selectedSkill, setSelectedSkill] = useState<any>(null)

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