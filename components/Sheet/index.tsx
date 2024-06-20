import dynamic from "next/dynamic";

export const DynamicSheet = dynamic(() => import("./sheet"), {
  loading: () => <></>,
  ssr: false,
});
