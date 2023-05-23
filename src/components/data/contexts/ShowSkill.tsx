import Area from "@/components/shared/Area";
import React, { useContext } from "react";
import SkillContext from "./SkillContext";

export default function ShowSkill() {

  const { selectedSkill } = useContext(SkillContext)

  type DescriptionType = "A JavaScript library for building user interfaces." | "The React Framework for the Web." | "A CSS framework packed with classes that can be composed to build any design." | "A strongly typed programming language that builds on JavaScript."
  let description: DescriptionType

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

    default:
      description = "A strongly typed programming language that builds on JavaScript."
      break;
  }

  return (
    <Area>
      {selectedSkill?.title ? (
        <div className="flex flex-col items-center py-16 text-xl gap-8 md:flex-row justify-center min-h-[200px]">
          {selectedSkill?.image ? (
            React.cloneElement(selectedSkill.image, {
              size: 130
            })
          ) : null}
          <p className="text-center">{description}</p>
        </div>
      ) : null}
    </Area>
  )
}