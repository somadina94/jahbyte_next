"use client";
import { useFormState } from "react-dom";
import { useEffect } from "react";

import {
  BsFillPersonFill,
  BsFillEnvelopeAtFill,
  BsEnvelopeFill,
} from "react-icons/bs";

import classes from "./page.module.css";
import { sendEmail } from "@/actions/email";
import Submit from "@/components/email/submit";

export default function Contact() {
  const [formState, formAction] = useFormState(sendEmail, {});

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={classes.container}>
      <form className={classes.form} action={formAction}>
        {formState.success && (
          <p className={classes.success}>
            Email sent successfully, I will get back to you as soon as possible.
          </p>
        )}
        {formState.success === false && (
          <p className={classes.emailError}>
            Couldn&apos;t send email, please try again later or use other
            contact channels provided
          </p>
        )}
        <div className={classes.group}>
          <label htmlFor="name">Name</label>
          <div className={classes["input-group"]}>
            <BsFillPersonFill className={classes.icon} />
            <input type="text" id="name" name="name" />
          </div>
          {formState?.name && (
            <span className={classes.error}>{formState.name}</span>
          )}
        </div>
        <div className={classes.group}>
          <label htmlFor="email">Emaill address</label>
          <div className={classes["input-group"]}>
            <BsFillEnvelopeAtFill className={classes.icon} />
            <input type="text" id="email" name="email" />
          </div>
          {formState?.email && (
            <span className={classes.error}>{formState.email}</span>
          )}
        </div>
        <div className={classes.group}>
          <label htmlFor="message">Message</label>
          <div className={classes["input-group"]}>
            <BsEnvelopeFill
              className={classes.icon}
              style={{ alignSelf: "flex-start" }}
            />
            <textarea type="text" id="message" name="message" />
          </div>
          {formState?.message && (
            <span className={classes.error}>{formState.message}</span>
          )}
        </div>
        <div
          className="g-recaptcha"
          data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
        ></div>
        <Submit />
      </form>
    </div>
  );
}
