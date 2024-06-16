import dynamic from "next/dynamic";

export const DynamicBackdrop = dynamic(() => import("./backdrop"), {
  loading: () => <></>,
  ssr: false,
});
