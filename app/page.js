import Link from "next/link";

import classes from "./page.module.css";

export const metadata = {
  title: "Jahbyte Technologies",
  description:
    "Looking for a web or mobile app developer? Jahbyte is your at your service to deliver high quality and scalable web or mobile applications using modern technologies and frameworks.",
};

export default function Home() {
  return (
    <section className={classes.hero}>
      <h1>Williams Somadina Onuaguluchi</h1>
      <p>
        Hey I am Williams, a passionate freelance full-stack software engineer
        with a deep love for coding and a keen eye for cutting-edge technology.
        In a world where technology has become the heartbeat of progress, I
        believe in harnessing its power to make life easier and more enjoyable.
        My journey is driven by a fascination with the evolving landscape of
        technology. I thrive on turning this fascination into tailored solutions
        for start-ups and individuals aiming to elevate their presence through
        captivating websites and mobile applications. My commitment lies in
        crafting digital experiences that not only meet but exceed expectations.
      </p>
      <Link href="/projects">View Projects</Link>
    </section>
  );
}
