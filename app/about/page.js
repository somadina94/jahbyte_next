import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa6";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPython, FaFigma } from "react-icons/fa";
import Link from "next/link";

import classes from "./page.module.css";

export const metadata = {
  title: "About",
  description:
    "About Jahbyte Techlogies, view tech stack and a bried background history",
};

export default function About() {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>My Technology stack</h2>
      <div className={classes.tech}>
        <div className={classes.info}>
          <FaHtml5 className={classes.html} />
          <p>
            HTML5 is the latest evolution of the standard markup language used
            to structure and present content on the World Wide Web. It provides
            enhanced semantic elements, multimedia support, and improved
            functionality for building modern, responsive websites.
          </p>
        </div>
        <div className={classes.info}>
          <FaCss3Alt className={classes.css} />
          <p>
            CSS3 is the style sheet language used for describing the
            presentation of a document written in HTML. It introduces advanced
            styling features like transitions, animations, and responsive design
            capabilities, allowing for more creative and dynamic web page
            layouts.
          </p>
        </div>
        <div className={classes.info}>
          <RiJavascriptFill className={classes.javascript} />
          <p>
            JavaScript is a versatile and high-level programming language that
            enables dynamic, interactive content on websites. As a client-side
            scripting language, it enhances user experience by facilitating
            real-time updates, form validation, and the creation of interactive
            elements.
          </p>
        </div>
        <div className={classes.info}>
          <FaReact className={classes.react} />
          <p>
            React is a JavaScript library for building user interfaces.
            Developed by Facebook, it allows developers to create reusable UI
            components, making it efficient for building complex and interactive
            web applications with a focus on a single-page application
            architecture.
          </p>
        </div>
        <div className={classes.info}>
          <TbBrandNextjs className={classes.next} />
          <p>
            Next.js is a React framework for building server-side rendered (SSR)
            and statically generated web applications. It simplifies the process
            of creating performant and SEO-friendly React applications by
            providing a set of conventions and features, such as automatic code
            splitting and server-side rendering.
          </p>
        </div>
        <div className={classes.info}>
          <FaNodeJs className={classes.node} />
          <p>
            Node.js is a runtime environment that allows JavaScript to be
            executed on the server-side. It enables the development of scalable
            and high-performance web applications by using an event-driven,
            non-blocking I/O model, making it particularly suitable for building
            real-time applications.
          </p>
        </div>
        <div className={classes.info}>
          <FaReact className={classes.react} />
          <p>
            React Native is a powerful framework for building mobile
            applications using JavaScript and React. It enables the development
            of native apps for iOS and Android from a single codebase,
            leveraging native components to deliver high-performance and
            responsive user interfaces. With React Native, I can create
            cross-platform mobile apps that maintain a native look and feel,
            streamlining the development process and reducing time-to-market.
          </p>
        </div>
        <div className={classes.info}>
          <SiTypescript className={classes.react} />
          <p>
            TypeScript is a strongly typed superset of JavaScript that enhances
            code quality and maintainability by adding static types. It helps
            catch errors early during development, improves code readability,
            and facilitates better tooling and refactoring. By using TypeScript,
            I can build robust, scalable applications with a clear and
            consistent codebase, ensuring smoother development and easier
            collaboration.
          </p>
        </div>
        <div className={classes.info}>
          <SiTailwindcss className={classes.react} />
          <p>
            Tailwind CSS is a utility-first CSS framework that allows for rapid
            UI development by providing a wide range of predefined classes. It
            simplifies styling by letting me apply styles directly to HTML
            elements, resulting in a streamlined and responsive design process.
            With Tailwind, I can quickly create custom, modern interfaces
            without writing extensive custom CSS, all while maintaining a
            consistent and cohesive design system.
          </p>
        </div>
        <div className={classes.info}>
          <FaPython className={classes.python} />
          <p>
            Python is a versatile programming language known for its simplicity
            and readability. It enables me to build various applications, from
            web development to data analysis, with a vast array of libraries and
            frameworks. Python&apos;s clear syntax makes it beginner-friendly
            while supporting rapid and efficient development.
          </p>
        </div>
        <div className={classes.info}>
          <FaFigma className={classes.figma} />
          <p>
            Figma is a cloud-based design tool that simplifies UI/UX design
            through real-time collaboration and an intuitive interface. It
            allows me to create and share designs effortlessly, ensuring
            consistency and precision during the design process.
          </p>
        </div>
      </div>
      <div className={classes.about}>
        <h2 className={classes.title}>Brief background history</h2>
        <p className={classes.history}>
          Dedicated to the art of crafting digital experiences, I am Williams, a
          results-oriented full-stack web developer with an insatiable passion
          for learning in the ever-evolving technology landscape. Armed with a
          Bachelor&apos;s degree in Computer Engineering from Enugu State
          University of Science and Technology, Nigeria, my academic foundation
          forms the bedrock of my technical expertise.
        </p>
        <p className={classes.history}>
          My commitment extends beyond conventional boundaries. I strive to
          leverage the latest technologies as catalysts for transforming
          businesses and individual online presence. In a world where digital
          landscapes are ever-shifting, I see each project as an opportunity to
          innovate and elevate.
        </p>
        <p className={classes.history}>
          While some of my noteworthy projects remain confidential due to client
          restrictions, I invite you to explore a curated selection of personal
          projects that offer a glimpse into my talent and unwavering work
          ethic. These projects not only showcase my technical prowess but also
          reflect my dedication to delivering impactful solutions that resonate
          with users.
        </p>
        <p className={classes.history}>
          Embark on a journey with me, where technology meets innovation, and
          your online presence becomes a testament to the power of thoughtful
          development.
        </p>
      </div>
      <Link href="/projects" className={classes.link}>
        View Projects
      </Link>
    </section>
  );
}
