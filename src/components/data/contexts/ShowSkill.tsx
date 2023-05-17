import Area from "@/components/shared/Area";
import { useContext, useEffect, useState } from "react";
import SkillContext from "./SkillContext";
import Image from "next/image";

export default function ShowSkill() {

  const { selectedSkill } = useContext(SkillContext)

  type DescriptionType = "A JavaScript library for building user interfaces." | "The React Framework for the Web." | "A CSS framework packed with classes that can be composed to build any design." | "A strongly typed programming language that builds on JavaScript."
  let description: DescriptionType | null

  switch (selectedSkill?.title) {
    case 'ReactJs':
      description = "A JavaScript library for building user interfaces."
      break;

    case 'NextJs':
      description = "The React Framework for the Web."
      break;

    case 'TailwindCSS':
      description = "A CSS framework packed with classes that can be composed to build any design."
      break;

    case 'Typescript':
      description = "A strongly typed programming language that builds on JavaScript."
      break;

    default:
      description = null
      break;
  }

  const [state, setState] = useState<string>('')

  useEffect(() => {
    function write(description: string) {
      setState('')
      if (description.length < 0) return
      for (let i = 0; i < description.length; i++) {
        setState(state + description[i])
      }
    }

    write(description ?? '')
  }, [description])

  return (
    <Area>
      {selectedSkill?.title ? (
        <div className="text-2xl py-10 flex flex-col items-center gap-10 sm:flex-row">
          <Image
            src={selectedSkill.image}
            alt={selectedSkill.title}
            height={130}
          />
          <p>{state}</p>
        </div>
      ) : null}
    </Area>
  )
}