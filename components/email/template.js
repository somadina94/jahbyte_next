import classes from "./template.module.css";

export default function Template({ name, email, message }) {
  return (
    <div
      className={classes.email}
      style={{ backgroundColor: "darkslategray", padding: "2rem" }}
    >
      <h1 style={{ color: "white" }}>Email from: {name}</h1>
      <p style={{ color: "white" }}>Email address: {email}</p>
      <p style={{ color: "white" }}>Message: {message}</p>
    </div>
  );
}
