import clsx from "classnames";
import classes from "./styles.module.scss";
import ArrowLeft from "@/assets/ArrowLeft.svg";
import { DynamicText } from "@/ui";

export default function BackLink({ back }) {
  if (!back) {
    return null;
  }

  return (
    <a className={clsx(classes.back, "mb-3")} href={back.href}>
      <ArrowLeft />
      <DynamicText path={back.path}>{back.placeholder}</DynamicText>
    </a>
  );
}
