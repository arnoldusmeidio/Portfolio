import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoDocumentText } from "react-icons/io5";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
import TechStack from "./TechStack";
import HireMe from "./HireMe";

export default function Hero() {
  const email = "arnoldusmeidio@gmail.com";

  return (
    <>
      <section
        id="about"
        className="flex flex-col justify-center gap-10 lg:flex-row"
      >
        <div className="flex flex-col gap-6 lg:basis-3/4">
          <div className="flex flex-col gap-4 text-base lg:text-xl">
            <RoughNotationGroup show={true}>
              <h1 className="mb-2 text-3xl font-bold lg:text-5xl">
                Hello! I&apos;m Arnold, a{" "}
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  color="#caf0a4"
                >
                  web developer.
                </RoughNotation>
              </h1>
              <p>
                I build websites that are{" "}
                <RoughNotation
                  type="underline"
                  strokeWidth={2}
                  multiline={true}
                  color="#F49E4C"
                >
                  user-friendly, simple
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="underline"
                  strokeWidth={2}
                  multiline={true}
                  color="#3B8EA5"
                >
                  delightful
                </RoughNotation>
                .
              </p>
              <p>
                I was a student at Purwadhika Digital Technology School where I
                completed an intensive program in full-stack web development.
                This experience allowed me to deeply explore the fundamentals of
                both{" "}
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  color="#F49E4C"
                >
                  front-end
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  color="#ff9086"
                >
                  back-end technologies
                </RoughNotation>
                , equipping me with hands-on expertise in{" "}
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  color="#caf0a4"
                >
                  JavaScript, React, Next.js, Node.js, Express.js, MySQL
                </RoughNotation>
                , and other modern tools. These skills have enabled me to craft{" "}
                <RoughNotation
                  type="highlight"
                  multiline={true}
                  color="#84dcf5"
                >
                  dynamic, responsive, and scalable web applications.
                </RoughNotation>
              </p>
              <p className="max-lg:hidden">
                In addition to my technical background, I bring a unique
                perspective from my 8 years of experience as a civil engineer,
                where I honed{" "}
                <RoughNotation
                  type="box"
                  strokeWidth={2}
                  multiline={true}
                  color="#F49E4C"
                >
                  problem-solving skills, attention to detail,
                </RoughNotation>{" "}
                and{" "}
                <RoughNotation
                  type="box"
                  strokeWidth={2}
                  multiline={true}
                  color="#f03b2b"
                >
                  the ability to manage complex projects.
                </RoughNotation>{" "}
                This transition to web development reflects my passion for
                creating innovative solutions and continuously learning in the
                ever-evolving tech landscape.
              </p>
              <p>
                I&apos;m currently looking for a new role as a developer.{" "}
                <HireMe text={email}>
                  <RoughNotation type="circle" color="#b6655d">
                    Hire me?
                  </RoughNotation>
                </HireMe>
              </p>
            </RoughNotationGroup>
          </div>

          <div className="flex flex-col gap-4 max-lg:justify-around max-md:w-full max-md:self-center md:flex-row">
            <Link
              href={"https://linkedin.com/in/arnoldus-meidio"}
              target="_blank"
            >
              <Button
                size={"lg"}
                variant={"default"}
                className="w-full [&_svg]:size-7"
              >
                <span className="text-base lg:text-xl">View Linkedin</span>
                <CiLinkedin />
              </Button>
            </Link>
            <Link
              href={
                "https://drive.google.com/file/d/1AF2Ar5e0h4CB9zDP0euv9O8MB50Eeyn2/view?usp=drive_link"
              }
              target="_blank"
            >
              <Button
                size={"lg"}
                variant={"secondary"}
                className="w-full hover:bg-secondary/60 [&_svg]:size-7"
              >
                <span className="text-base lg:text-xl">View Resume</span>
                <IoDocumentText />
              </Button>
            </Link>
            <Link href={"https://github.com/arnoldusmeidio"} target="_blank">
              <Button
                size={"lg"}
                variant={"outline"}
                className="w-full [&_svg]:size-7"
              >
                <span className="text-base lg:text-xl">View Github</span>
                <FaGithub />
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-full w-full basis-1/4">
          <TechStack />
        </div>
      </section>
    </>
  );
}
