import React from "react";
import { Badge, Tooltip } from "@radix-ui/themes";
import Title from "./ui/Title";
import IconCloud from "@/components/ui/icon-cloud";

const Skills = () => {
  // List of skills to display in the badge and cloud
  const data: string[] = [
    "NextJS",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "NodeJS",
    "Express",
    "MongoDB",
    "MySQL",
    "REST APIs",
    "GitHub",
    "Vercel",
    "VS Code",
    "C++",
    "Java",
    "Redux",
    "Zod",
    "MUI",
    "Shadcn",
    "Remix",
    "Framer Motion",
  ];

  // Matching slugs for IconCloud
  const iconSlugs: string[] = [
    "nextdotjs",
    "typescript",
    "react",
    "tailwindcss",
    "nodedotjs",
    "express",
    "mongodb",
    "mysql",
    "restapi",
    "github",
    "vercel",
    "visualstudiocode",
    "cplusplus",
    "java",
    "redux",
    "zod",
    "mui",
    "shadcn",
    "remix",
    "framer",
  ];

  return (
    <div className="w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8">
      <Title title="Skills" />

      {/* Badge list */}
      <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center">
        {data.map((skill, idx) => (
          <Tooltip key={idx} content={skill}>
            <Badge
              color="gray"
              variant="solid"
              highContrast
              className="text-xs max-sm:text-[10px] dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800"
            >
              {skill}
            </Badge>
          </Tooltip>
        ))}
      </div>

      {/* Icon Cloud */}
      <div className="w-full flex justify-center mt-8">
        <IconCloud iconSlugs={iconSlugs} />
      </div>
    </div>
  );
};

export default Skills;
