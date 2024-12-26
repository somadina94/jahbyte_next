import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import classes from "./loading.module.css";

export default function Loading() {
  return (
    <div className={classes.loading}>
      <Skeleton height="60rem" />
    </div>
  );
}
