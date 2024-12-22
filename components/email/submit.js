import { useFormStatus } from "react-dom";

import classes from "./submit.module.css";
import Spinner from "../UI/Spinner";

export default function Submit() {
  const status = useFormStatus();
  return (
    <div className={classes.action}>
      <button disabled={status.pending}>
        {status.pending ? "Sending email..." : "Send Email"}
      </button>
      {status.pending && <Spinner />}
    </div>
  );
}
