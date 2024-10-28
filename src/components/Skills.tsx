// // import { Badge, Tooltip } from "@radix-ui/themes";
// // import React from "react";
// // import { bricolage_grotesque } from "@/utils/fonts";
// // import Title from "./ui/Title";

// // const Skills = () => {
// //   return (
// //     <div className="w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8">
// //       <Title title="Skills" />

// //       <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center max-sm:ml-">
// //         {data.map((skill, idx) => (
// //           <Tooltip key={idx} content={skill}>
// //             <Badge
// //               color="gray"
// //               variant="solid"
// //               highContrast
// //               className={`text-xs max-sm:text-[10px] dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
// //             >
// //               {skill}
// //             </Badge>
// //           </Tooltip>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Skills;

// // const data: string[] = [
// //   "NextJS",
// //   "TypeScript",
// //   "React",
// //   "Tailwind CSS",
// //   "NodeJS",
// //   "Express",
// //   "MongoDB",
// //   "MySQL",
// //   "REST APIs",
// //   "GitHub",
// //   "Vercel",
// //   "VS Code",
// //   "C++",
// //   "Java",
// //   "Redux",
// //   "Zod",
// //   "MUI",
// //   "Shadcn",
// //   "Remix",
// //   "Framer Motion",
// // ];
// import { Badge, Tooltip } from "@radix-ui/themes";
// import React from "react";
// import { bricolage_grotesque } from "@/utils/fonts";
// import Title from "./ui/Title";
// import IconCloud from "@/components/ui/icon-cloud";

// const Skills = () => {
//   return (
//     <div className="w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8">
//       <Title title="Skills" />

//       {/* <div className="flex w-full flex-col max-lg:flex-row max-sm:flex-row gap-3 max-sm:gap-2 lg:flex-row mt-4 px-40 max-[1285px]:px-24 max-lg:px-28 max-sm:px-6 flex-wrap justify-center items-center">
//         {data.map((skill, idx) => (
//           <Tooltip key={idx} content={skill}>
//             <Badge
//               color="gray"
//               variant="solid"
//               highContrast
//               className={`text-xs max-sm:text-[10px] dark:hover:bg-gray-300 py-1 px-2 cursor-pointer hover:bg-gray-800 ${bricolage_grotesque}`}
//             >
//               {skill}
//             </Badge>
//           </Tooltip>
//         ))}
//       </div> */}

//       {/* Displaying IconCloud with filtered skills */}
//       <IconCloudDemo />
//     </div>
//   );
// };

// export default Skills;

// // Skill data array
// const data: string[] = [
//   "NextJS",
//   "TypeScript",
//   "React",
//   "Tailwind CSS",
//   "NodeJS",
//   "Express",
//   "MongoDB",
//   "MySQL",
//   "REST APIs",
//   "GitHub",
//   "Vercel",
//   "VS Code",
//   "C++",
//   "Java",
//   "Redux",
//   "Zod",
//   "MUI",
//   "Shadcn",
//   "Remix",
//   "Framer Motion",
// ];

// // Slugs mapping for IconCloud
// const skillSlugs = {
//   "NextJS": "nextdotjs",
//   "TypeScript": "typescript",
//   "React": "react",
//   "Tailwind CSS": "tailwindcss",
//   "NodeJS": "nodedotjs",
//   "Express": "express",
//   "MongoDB": "mongodb",
//   "MySQL": "mysql",
//   "REST APIs": "restapi",
//   "GitHub": "github",
//   "Vercel": "vercel",
//   "VS Code": "visualstudiocode",
//   "C++": "cplusplus",
//   "Java": "java",
//   "Redux": "redux",
//   "Zod": "zod",
//   "MUI": "mui",
//   "Shadcn": "shadcn",
//   "Remix": "remix",
//   "Framer Motion": "framer",
// };

// // Filtering slugs to include only skills in `data`
// // const filteredSlugs = data
// //   .map(skill => skillSlugs[skill])
// //   .filter(Boolean); // Ensure only defined slugs are included

// // IconCloud component with filtered skills
// export function IconCloudDemo() {
//   return (
//     <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
//       <IconCloud iconSlugs={filteredSlugs} />
//     </div>
//   );
// }
import React from "react";
import Title from "./ui/Title";
import IconCloud from "@/components/ui/icon-cloud";

const Skills = () => {
  return (
    <div className="w-2/3 max-lg:w-full max-sm:w-full flex flex-col items-center mt-4 pb-8">
      <Title title="Skills" />
      <IconCloudDemo />
    </div>
  );
};

export default Skills;

const skillSlugs = {
  NextJS: "nextdotjs",
  TypeScript: "typescript",
  React: "react",
  "Tailwind CSS": "tailwindcss",
  NodeJS: "nodedotjs",
  Express: "express",
  MongoDB: "mongodb",
  MySQL: "mysql",
  "REST APIs": "restapi",
  GitHub: "github",
  Vercel: "vercel",
  "VS Code": "visualstudiocode",
  "C++": "cplusplus",
  Java: "java",
  Redux: "redux",
  Zod: "zod",
  MUI: "mui",
  Shadcn: "shadcn",
  Remix: "remix",
  "Framer Motion": "framer",
  Python: "python",
};

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
      <IconCloud iconSlugs={Object.values(skillSlugs)} />
    </div>
  );
}