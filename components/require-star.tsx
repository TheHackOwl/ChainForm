import clsx from "clsx";
export const RequireStar = (props: any) => {
  const { className } = props;

  const classes = clsx("text-red-500", className);

  return (
    <span {...props} className={classes}>
      *
    </span>
  );
};
