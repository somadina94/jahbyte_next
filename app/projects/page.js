"use client";

import { FcLink } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Image from "next/image";

import classes from "./page.module.css";
import { projects } from "@/util/projects";

export default function Projects() {
  return (
    <section className={classes.projects}>
      {projects.map((proj, index) => (
        <div key={index} className={classes["content-container"]}>
          <div className={classes.content}>
            <Carousel>
              {proj.photos.map((photo, index) => (
                <Carousel.Item key={index}>
                  <div className={classes.photo}>
                    <Image src={photo} alt="projects shot" />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <div className={classes.links}>
              <a href={proj.githubLink} target="_blank" rel="noreferrer">
                <FaGithubSquare className={classes.icon} />
              </a>
              {!proj.description.includes("React Native") && (
                <a href={proj.websiteLink} target="_blank" rel="noreferrer">
                  <FcLink className={classes.icon} />
                </a>
              )}
              {proj.description.includes("React Native") && (
                <a href={proj.websiteLink} target="_blank" rel="noreferrer">
                  <IoLogoGooglePlaystore className={classes.icon} />
                </a>
              )}
            </div>
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
