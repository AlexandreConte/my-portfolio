import Area from "@/components/shared/Area";
import React, { useContext } from "react";
import SkillContext from "./SkillContext";

export default function ShowSkill() {

  const { selectedSkill } = useContext(SkillContext)

  type DescriptionType =
    "Uma biblioteca frontend JavaScript de código aberto com foco em criar interfaces de usuário."
    | "Um framework de desenvolvimento frontend React de código aberto que permite funcionalidades extras."
    | "Um superconjunto sintático estrito de JavaScript que adiciona tipagem estática opcional à linguagem."
    | "Um framework CSS baseado em classes, que podem ser compostas para criar qualquer design."

  let description: DescriptionType

  switch (selectedSkill?.title) {
    case 'ReactJs':
      description = "Uma biblioteca frontend JavaScript de código aberto com foco em criar interfaces de usuário."
      break;

    case 'NextJs':
      description = "Um framework de desenvolvimento frontend React de código aberto que permite funcionalidades extras."
      break;

    case 'TailwindCSS':
      description = "Um framework CSS baseado em classes, que podem ser compostas para criar qualquer design."
      break;

    default:
      description = "Um superconjunto sintático estrito de JavaScript que adiciona tipagem estática opcional à linguagem."
      break;
  }

  return (
    <Area>
      {selectedSkill?.title ? (
        <div className="flex flex-col items-center py-16 text-xl gap-8 md:flex-row justify-center min-h-[200px]">
          {selectedSkill?.image ? (
            React.cloneElement(selectedSkill.image, {
              size: 130,
            })
          ) : null}
          <p className="text-center">{description}</p>
        </div>
      ) : null}
    </Area>
  )
}
