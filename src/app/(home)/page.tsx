"use client";
import Avatar from "./components/Avatar";
import ProjectCardList from "../projects/components/ProjectCardList";
import Skills from "@/components/Skills";
// import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Link as ScrollLink } from "react-scroll";
import Coursework from "@/components/Coursework";
import { inter, bricolage_grotesque } from "@/utils/fonts";
import About from "../about/components/About";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-[350px]:overflow-hidden"
    >
      <div className="w-full flex justify-center py-5 pt-36 dark:bg-black">
        <div className="w-2/3 max-sm:w-full flex flex-col items-center">
          <div>
            <Avatar />
          </div>
          <div className="mt-4 px-32 max-sm:px-4">
            <h1
              className={`!text-[4.5rem] mt-2 max-sm:!text-[2.2rem] !whitespace-nowrap font-bold tracking-tight text-center ${bricolage_grotesque} `}
            >
              {/* Hi, I&apos;m Shivansh Gupta */}
              <TextGenerateEffect words="Hi, I'm Shivansh Gupta" />
            </h1>
            

            <h1
              className={`mt-2 max-sm:mt-5 max-sm:px-3 !text-base max-sm:!text-sm text-center !font-normal !tracking-normal inter !leading-6 ${inter}`}
            >
              Full Stack Web Developer Building Impactful Web Applications. I
              specialize in creating production-ready web apps from the ground
              up, with a focus on both frontend and backend development.
              Passionate about solving real-world problems and always open to
              new challenges.
            </h1>
          </div>
          <div className="mt-10">
            <RainbowButton>
              <ScrollLink
                to="contact-section"
                activeClass="active"
                smooth={true}
                offset={-120}
                duration={1100}
              >
                Get in touch
              </ScrollLink>
            </RainbowButton>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-16">
        <ProjectCardList />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Skills />
      </div>


      <div className="w-full flex justify-center mt-4">
        <Education
          institute_link={
            "https://www.newtonschool.co/newton-school-of-technology-nst/home"
          }
          institute_logo={"/nst.png"}
          course_title={"Bachelors in Computer Science"}
          ending_date={"Expected July 2027"}
          institute_name={"Newton School of Technology"}
          // CGPA={7.08}
          description={
            "I'm pursuing a B.Tech and am excited to dive into AI and ML. In my first year, I focused on frontend development, and in my second year, I expanded into backend development."
          }
        />
      </div>

      <div className="w-full flex justify-center mt-4">
        <Coursework />
      </div>

      <div className="w-full flex justify-center mt-4">
        <About />
      </div>

      <div className="w-full flex justify-center mt-4" id="contact-section">
        <Contact />
      </div>
    </motion.div>
  );
}
