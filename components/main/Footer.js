import classes from "./Footer.module.css";

export default function Footer() {
  const date = new Date(Date.now()).getFullYear();
  return (
    <footer className={classes.footer}>
      <p>Copyright {date} JahByte productions</p>
    </footer>
  );
}
