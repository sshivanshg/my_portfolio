import { Project } from "@/types/project";
import React from "react";
import ProjectCard from "./ProjectCard";
import Title from "@/components/ui/Title";

const ProjectCardList = () => {
  return (
    <div className="w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col items-center mt-4 pb-8 ">
      <Title title="Projects" />
      <div className="flex w-full flex-col gap-4 lg:flex-row mt-4 px-32 max-lg:px-0 max-sm:px-2 flex-wrap items-center ml-14 max-sm:ml-0 max-lg:ml-0 max-[350px]:mr-5 max-[321px]:mr-10">
        {data.map((project: Project, idx: number) => (
          <ProjectCard
            key={idx}
            logo={project.logo}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            source={project.source}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCardList;

const data: Project[] = [
  {
    logo: "/whiteboard.jpg",
    title: "ATELIER - Fashion eCommerce Platform",
    description:
      "ATELIER is a modern, full-stack fashion eCommerce platform for premium clothing brands, with a high-performance storefront, secure JWT auth with role-based access, and an admin dashboard for products, variants, inventory, orders, content, and analytics.",
    techStack: [
      "React (Vite)",
      "Node.js",
      "Express",
      "MongoDB (Native Driver)",
      "Cloudinary",
      "JWT Auth",
    ],
    link: "https://devops-ecom.vercel.app/",
    source: "https://github.com/sshivanshg/Devops_ecom",
  },
  {
    logo: "/aiportfolio.jpg",
    title: "Spatialaw - WiFi Human Presence Detection",
    description:
      "Spatialaw is a WiFi CSI–based human presence detection system that turns WiFi signals into an invisible motion sensor, using feature-engineered signal data and a Random Forest model to distinguish between empty rooms and human activity with high accuracy.",
    techStack: ["Python", "WiFi CSI", "Random Forest", "Streamlit"],
    source: "https://github.com/sshivanshg/spatialaw",
  },
  {
    logo: "/whiteboard.jpg",
    title: "Chrono - Countdown & Productivity App",
    description:
      "Chrono is a cross-platform countdown and productivity app built with Expo + React Native, helping users track important dates, create widgets, and manage events with offline persistence and cloud authentication.",
    techStack: ["Expo", "React Native"],
    source: "https://github.com/sshivanshg/Chrono",
  },
];
