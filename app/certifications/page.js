import Link from "next/link";
import Image from "next/image";

import classes from "./page.module.css";
import esut from "@/images/certificates/esut.jpg";
import html from "@/images/certificates//html-css.jpg";
import javascript from "@/images/certificates/javascript.jpg";
import react from "@/images/certificates/react.jpg";
import node from "@/images/certificates/node.jpg";
import cSharp from "@/images/certificates/c-sharp.jpg";
import typescript from "@/images/certificates/typescript.jpg";
import RnT from "@/images/certificates/React-Typescript.jpg";
import tailwind from "@/images/certificates/Tailwind.jpg";
import reactNative from "@/images/certificates/React-Native.jpg";
import python from "@/images/certificates/Python-UC-a5882f37-0d98-4ab7-8286-34a2968e774d.jpg";
import uxui from "@/images/certificates/UX-UI-UC-b44670b2-a7db-4851-8ffd-1b0264786438.jpg";
import nextjs from "@/images/certificates/NEXT-UC-f2863cc8-3887-4355-9f70-2bf5d7d54691.jpg";

export const metadata = {
  title: "Certifications",
  description:
    "Certificates of Williams Onuaguluchi, the founder of Jahbyte Technologies.",
};

export default function Certifications() {
  return (
    <section className={classes.cert}>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={esut} alt="certificate" />
        </div>
        <Link href="#">View certificate</Link>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={html} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-654c660e-c95b-4a05-ac38-a8565a72aeee/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={tailwind} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-0da14fdf-99b3-4866-9fba-4d82ee55f123/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={javascript} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-62d1b709-3148-4775-ad8b-09c34e32c675/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={typescript} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-9dd81385-5f66-47ea-bcac-350855a4f0bb/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={react} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-45b621bc-507d-4507-94f1-1e4215ba6fc9/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={RnT} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-14f28e33-7a64-4861-875f-2a13750dd9f7/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={reactNative} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-84533fc6-5b1b-4865-a658-d66b0e95003e/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={node} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-3aa55b85-dec5-4c02-a436-36aecfca88b0/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={cSharp} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-057429c5-dc1c-4d3a-8e9b-b3fce2cca625/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={python} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-a5882f37-0d98-4ab7-8286-34a2968e774d/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={uxui} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-b44670b2-a7db-4851-8ffd-1b0264786438/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
      <div className={classes.content}>
        <div className={classes.photo}>
          <Image src={nextjs} alt="certificate" />
        </div>
        <a
          href="https://www.udemy.com/certificate/UC-f2863cc8-3887-4355-9f70-2bf5d7d54691/"
          target="_blank"
          rel="noreferrer"
        >
          View certificate
        </a>
      </div>
    </section>
  );
}
