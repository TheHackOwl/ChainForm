import dynamic from "next/dynamic";

export const DynamicDrawer = dynamic(() => import("./drawer"), {
  loading: () => <></>,
  ssr: false,
});
