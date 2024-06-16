import dynamic from "next/dynamic";

export const DynamicSheet = dynamic(() => import("./Sheet"), {
  loading: () => <></>,
  ssr: false,
});
