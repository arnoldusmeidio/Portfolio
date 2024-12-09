import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex w-full max-w-7xl items-center justify-center px-4">
      <div
        id="contact"
        className="mb-10 mt-10 flex w-full flex-col items-center gap-4 border-t-2 pt-5 tracking-wider lg:mt-20 lg:flex-row lg:justify-between lg:pt-10"
      >
        <div className="flex items-center gap-1">
          Built with Tailwind <SiTailwindcss /> and Next.js <SiNextdotjs />
        </div>
        <div>
          <ul className="flex justify-between gap-6 font-bold">
            <li className="hover:underline">
              <Link
                className="flex items-center gap-1"
                href={"https://linkedin.com/in/arnoldus-meidio"}
                target="_blank"
              >
                Linkedin <CiLinkedin />
              </Link>
            </li>
            <li className="hover:underline">
              <Link
                className="flex items-center gap-1"
                href={"https://github.com/arnoldusmeidio"}
                target="_blank"
              >
                Github <FaGithub />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
