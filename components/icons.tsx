import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

export const CopyIcon: React.FC<IconSvgProps> = (props: IconSvgProps) => {
  const { fill = "currentColor" } = props;

  return (
    <svg
      className="icon"
      height="26"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M639.9 256.3H192.4c-35.2 0-63.9 28.8-63.9 63.9v575.4c0 35.2 28.8 63.9 63.9 63.9h447.5c35.2 0 63.9-28.8 63.9-63.9V320.2c0-35.1-28.8-63.9-63.9-63.9z m0 639.3H192.4V320.2h447.5v575.4z"
        fill={fill}
      />
      <path
        d="M831.6 64.5H384.1c-35.2 0-63.9 28.8-63.9 63.9v63.9h63.9v-63.9h447.5v575.4h-63.9v63.9h63.9c35.2 0 63.9-28.8 63.9-63.9V128.4c0.1-35.1-28.7-63.9-63.9-63.9z"
        fill={fill}
      />
    </svg>
  );
};

export const TrashBinIcon: React.FC<IconSvgProps> = (props: IconSvgProps) => {
  return (
    <svg
      className="icon"
      height="24"
      version="1.1"
      viewBox="0 0 1024 1024"
      width=""
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M707 992H317c-51.3 0-93.5-40.2-95.9-91.4l-29.1-611c-0.8-17.7 12.8-32.7 30.4-33.5 17.5-1.1 32.7 12.8 33.5 30.4l29.1 611c0.8 17.1 14.8 30.5 32 30.5h390c17.1 0 31.2-13.4 32-30.5l29.1-611c0.8-17.7 16.4-31.2 33.5-30.4 17.7 0.8 31.3 15.8 30.4 33.5l-29.1 611c-2.5 51.2-44.6 91.4-95.9 91.4zM864 192H160c-17.7 0-32-14.3-32-32s14.3-32 32-32h704c17.7 0 32 14.3 32 32s-14.3 32-32 32zM576 96H448c-17.7 0-32-14.3-32-32s14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
        fill="currentColor"
      />
      <path
        d="M448 768c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32s32 14.3 32 32v352c0 17.7-14.3 32-32 32zM576 768c-17.7 0-32-14.3-32-32V384c0-17.7 14.3-32 32-32s32 14.3 32 32v352c0 17.7-14.3 32-32 32z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DeleteIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="24"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M912.526651 867.741144 555.540144 510.712681l356.986507-357.000833c11.171434-11.18576 11.171434-29.257348 0-40.443108-11.20111-11.18576-29.272697-11.18576-40.444131 0L515.096013 470.267527 158.096203 113.267716c-11.187807-11.159154-29.258371-11.159154-40.444131 0-11.186783 11.186783-11.186783 29.286 0 40.47176L474.623229 510.712681 117.623419 867.741144c-11.159154 11.172457-11.159154 29.216415 0 40.443108 11.18576 11.17348 29.284977 11.17348 40.47176 0l357.000833-357.027439 356.985484 357.027439c11.171434 11.17348 29.243021 11.17348 40.444131 0C923.698085 896.957559 923.725714 878.913601 912.526651 867.741144z"
        fill="currentColor"
      />
    </svg>
  );
};

export const AddIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="36"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="36"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M733.17 544.22H283.82c-17.67 0-32-14.33-32-32s14.33-32 32-32h449.35c17.67 0 32 14.33 32 32 0 17.68-14.33 32-32 32z" />
      <path d="M540.5 287.55V736.9c0 17.67-14.33 32-32 32s-32-14.33-32-32V287.55c0-17.67 14.33-32 32-32s32 14.33 32 32z" />
    </svg>
  );
};

export const LeftIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="40"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M576 672c-6.4 0-19.2 0-25.6-6.4l-128-128c-12.8-12.8-12.8-32 0-44.8l128-128c12.8-12.8 32-12.8 44.8 0s12.8 32 0 44.8L492.8 512l102.4 102.4c12.8 12.8 12.8 32 0 44.8C595.2 672 582.4 672 576 672z"
        fill="currentColor"
      />
    </svg>
  );
};

export const RightIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="40"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M448 672c-6.4 0-19.2 0-25.6-6.4-12.8-12.8-12.8-32 0-44.8L531.2 512 422.4 409.6c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l128 128c12.8 12.8 12.8 32 0 44.8l-128 128C467.2 672 454.4 672 448 672z"
        fill="currentColor"
      />
    </svg>
  );
};

export const PublicIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="16"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M174.698667 459.434667A343.978667 343.978667 0 0 0 170.666667 512c0 129.792 72.426667 242.645333 179.072 300.373333l31.850666-222.528-85.205333-93.738666-121.685333-36.672z m23.530666-82.026667l107.626667 32.426667 101.866667-117.546667-44.053334-87.808a342.634667 342.634667 0 0 0-165.44 172.928zM445.44 177.152l44.970667 89.621333a64 64 0 0 1-8.853334 70.613334l-17.941333 20.714666 169.557333 105.984a64 64 0 0 1 19.072 90.176l-199.168 293.994667c19.136 3.349333 38.826667 5.077333 58.922667 5.077333 188.522667 0 341.333333-152.810667 341.333333-341.333333S700.522667 170.666667 512 170.666667c-22.784 0-45.034667 2.24-66.56 6.485333z m7.018667 519.893333l116.714666-172.330666-115.072-71.914667-60.586666 23.296 57.962666 63.786667a64 64 0 0 1 16 52.096l-15.018666 105.066666zM85.333333 512C85.333333 276.352 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512z"
        fill="#6366f1"
      />
    </svg>
  );
};

export const PersonsIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="16"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M957.220061 773.137509c-0.005117-125.81959-78.128405-233.373165-188.598402-277.240255 53.504588-35.664268 88.768743-96.4067 88.768743-165.408237 0-94.199429-65.700351-173.036985-153.880693-193.538925-0.815575-0.192382-1.588171-0.096191-2.329045 0.189312-1.004887-0.082888-1.974981-0.299829-2.996241-0.299829-18.842137 0-34.110889 15.238053-34.110889 34.024931 0 16.975627 12.490475 30.925337 28.78458 33.489742 2.899026 1.172709 6.700609 2.078335 6.853082 2.131547 51.066049 17.278525 87.816045 65.447595 87.816045 122.229832 0 63.322188-45.717228 115.939569-106.017592 126.936017-0.085958 0.017396-0.159636 0.171915-0.245593 0.211824-20.059871 1.26583-35.987632 17.72878-35.987632 38.055734 0 20.632923 16.397459 37.338397 36.884049 38.154995 0.144286 0.062422 0.268106 0.282433 0.416486 0.298805 121.268948 12.32777 207.235878 115.367541 207.235878 240.772692 0 18.566868 15.09479 33.613562 33.703613 33.613562 18.163685 0 32.865525-14.359033 33.57263-32.304753 0.01842-0.171915 0.132006-0.304945 0.132006-0.479931 0-0.067538-0.017396-0.132006-0.017396-0.202615l0 0c0.00307-0.211824 0.017396-0.414439 0.017396-0.623193l0-0.00307 0 0L957.221084 773.137509 957.220061 773.137509zM553.331337 501.476319c63.890122-42.688241 105.9828-115.305119 105.9828-197.767226 0-131.419122-106.812701-237.957577-238.576677-237.957577-131.760906 0-238.573607 106.538455-238.573607 237.957577 0 82.465177 42.094724 155.078984 105.97973 197.767226C156.062382 554.057885 62.686714 682.712033 62.686714 833.200466c0 8.476045 0.476861 16.817014 1.128707 25.119097l0.062422 0c0 18.310018 14.883989 33.156144 33.249265 33.156144 18.362206 0 33.244148-14.846126 33.244148-33.156144 0-1.040702-0.207731-2.010797-0.304945-3.02387-0.639566-7.297197-1.192152-14.616906-1.192152-22.095227 0-160.76959 130.669038-291.105031 291.860231-291.105031 161.196309 0 291.865347 130.335441 291.865347 291.105031 0 7.764847-0.552585 15.384385-1.233084 22.949688-0.010233 0.397043-0.113587 0.75827-0.113587 1.151219 0 0.115634 0.035816 0.234337 0.035816 0.358157-0.025583 0.214894-0.01842 0.440022-0.035816 0.661056l0.103354 0c0.552585 17.824971 15.134699 32.141024 33.143864 32.141024 18.013259 0 32.595372-14.307867 33.147958-32.141024l0.065492 0c0.624217-8.302083 1.071402-16.648169 1.071402-25.108864C778.791276 682.712033 685.410492 554.057885 553.331337 501.476319L553.331337 501.476319zM420.73746 474.633974c-94.643544 0-171.370019-76.526931-171.370019-170.924881 0-94.40102 76.726475-170.924881 171.370019-170.924881 94.646614 0 171.374112 76.523861 171.374112 170.924881C592.110549 398.10602 515.384074 474.633974 420.73746 474.633974L420.73746 474.633974zM420.73746 474.633974"
        fill="#6366f1"
      />
    </svg>
  );
};

export const CreateIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="16"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M564.053333 149.418667C547.712 149.333333 530.346667 149.333333 512 149.333333h-42.666667c-160.896 0-241.365333 0-291.328 50.005334C128 249.301333 128 329.770667 128 490.666667v42.666666c0 160.896 0 241.365333 50.005333 291.328C227.968 874.666667 308.437333 874.666667 469.333333 874.666667h42.666667c160.896 0 241.365333 0 291.328-50.005334C853.333333 774.698667 853.333333 694.229333 853.333333 533.333333v-42.666666-22.4l-97.109333 97.109333c-52.053333 52.053333-78.037333 78.037333-108.714667 96.298667a286.72 286.72 0 0 1-66.858666 29.056c-34.304 9.984-71.082667 11.221333-144.597334 13.781333-47.018667 1.621333-70.528 2.432-87.893333-7.253333a71.637333 71.637333 0 0 1-27.904-27.818667c-9.642667-17.408-8.832-40.96-7.253333-87.978667 2.56-73.514667 3.84-110.250667 13.781333-144.554666 6.826667-23.466667 16.597333-45.909333 29.056-66.901334 18.304-30.677333 44.330667-56.661333 96.341333-108.672l111.872-111.914666z"
        fill="#6366f1"
      />
      <path
        d="M645.845333 145.92a160 160 0 0 1 225.792 225.792L645.845333 145.92zM600.32 190.933333l-151.296 151.338667c-28.16 28.117333-46.293333 46.250667-59.264 68.010667a202.666667 202.666667 0 0 0-20.522667 47.274666c-7.04 24.32-7.936 49.92-9.301333 89.685334l-0.170667 5.461333c-0.426667 12.928-0.853333 24.704-0.298666 34.474667 0.597333 10.496 2.432 22.058667 8.618666 33.28 6.826667 12.16 16.853333 22.186667 29.013334 29.013333 11.221333 6.186667 22.784 8.021333 33.28 8.618667 9.813333 0.554667 21.546667 0.170667 34.432-0.298667l5.504-0.170667c39.765333-1.365333 65.408-2.261333 89.685333-9.301333a202.666667 202.666667 0 0 0 47.274667-20.565333c21.76-12.928 39.893333-31.061333 68.010666-59.221334l151.338667-151.338666-226.261333-226.261334z"
        fill="#6366f1"
      />
      <path
        d="M826.709333 417.28l-226.133333-226.133333 45.226667-45.269334 226.133333 226.133334-45.226667 45.269333z"
        fill="#6366f1"
      />
    </svg>
  );
};

export const ShareIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="16"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M874.666667 544c-17.066667 0-32 14.933333-32 32v256c0 6.4-4.266667 10.666667-10.666667 10.666667H192c-6.4 0-10.666667-4.266667-10.666667-10.666667V192c0-6.4 4.266667-10.666667 10.666667-10.666667h256c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H192C151.466667 117.333333 117.333333 151.466667 117.333333 192v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666667-74.666667V576c0-17.066667-14.933333-32-32-32z"
        fill="#666666"
      />
      <path
        d="M874.666667 117.333333H640c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h157.866667L509.866667 467.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333l285.866667-285.866667V384c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c0-17.066667-14.933333-32-32-32z"
        fill="#666666"
      />
    </svg>
  );
};

export const FillOutIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="18"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M768 810.666667a42.666667 42.666667 0 0 1 4.992 85.034666L768 896H170.666667a42.666667 42.666667 0 0 1-4.992-85.034667L170.666667 810.666667h597.333333z m-30.848-657.024l5.845333 5.632 59.861334 61.269333a128.426667 128.426667 0 0 1 4.437333 175.061333l-5.802667 6.101334-331.52 328.149333c-21.034667 20.821333-56.576 40.106667-86.826666 47.445333l-8.106667 1.706667-130.56 23.04c-52.053333 9.216-92.842667-29.312-87.424-80.384l0.853333-6.186667 23.04-130.56c5.205333-29.269333 23.296-65.408 43.946667-88.96l5.717333-6.101333 331.52-331.52a126.933333 126.933333 0 0 1 168.618667-10.069333l6.4 5.376z m-209.28 159.573333l-236.928 236.970667c-9.472 9.472-20.522667 29.696-24.704 44.373333l-1.237333 5.205333-20.394667 115.584 115.626667-20.352c11.136-1.962667 27.989333-9.813333 40.106666-18.090666l5.589334-4.138667 4.053333-3.541333 240.213333-237.866667-122.325333-118.101333z m98.56-98.090667l-3.968 3.584-34.261333 34.218667 122.666666 118.357333 30.592-30.250666c15.573333-15.36 16.938667-39.594667 3.925334-56.746667l-3.584-4.096-59.861334-61.269333a41.514667 41.514667 0 0 0-51.2-6.741334l-4.266666 2.986667z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const ViewIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="18"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M277.333333 325.333333m5.333334 0l325.333333 0q5.333333 0 5.333333 5.333334l0 64q0 5.333333-5.333333 5.333333l-325.333333 0q-5.333333 0-5.333334-5.333333l0-64q0-5.333333 5.333334-5.333334Z"
        fill="#ffffff"
      />
      <path
        d="M277.333333 474.666667m5.333334 0l325.333333 0q5.333333 0 5.333333 5.333333l0 64q0 5.333333-5.333333 5.333333l-325.333333 0q-5.333333 0-5.333334-5.333333l0-64q0-5.333333 5.333334-5.333333Z"
        fill="#ffffff"
      />
      <path
        d="M277.333333 624m5.333334 0l247.36 0q5.333333 0 5.333333 5.333333l0 64q0 5.333333-5.333333 5.333334l-247.36 0q-5.333333 0-5.333334-5.333334l0-64q0-5.333333 5.333334-5.333333Z"
        fill="#ffffff"
      />
      <path
        d="M565.333333 842.666667H186.666667a5.333333 5.333333 0 0 1-5.333334-5.333334V186.666667a5.333333 5.333333 0 0 1 5.333334-5.333334h522.666666v346.24a5.333333 5.333333 0 0 0 5.333334 5.333334h64a5.333333 5.333333 0 0 0 5.333333-5.333334V106.666667H112a5.333333 5.333333 0 0 0-5.333333 5.333333v800a5.333333 5.333333 0 0 0 5.333333 5.333333h453.333333a5.333333 5.333333 0 0 0 5.333334-5.333333v-64a5.333333 5.333333 0 0 0-5.333334-5.333333z"
        fill="#ffffff"
      />
      <path
        d="M868.426667 723.786667a144.64 144.64 0 1 0-144.64 144.64 144.64 144.64 0 0 0 144.64-144.64z m-144.64 69.973333a69.973333 69.973333 0 1 1 69.973333-69.973333 70.026667 70.026667 0 0 1-69.973333 69.973333z"
        fill="#ffffff"
      />
      <path
        d="M811.758007 864.533065m3.771237-3.771236l45.254834-45.254834q3.771236-3.771236 7.542472 0l45.254834 45.254834q3.771236 3.771236 0 7.542472l-45.254834 45.254834q-3.771236 3.771236-7.542472 0l-45.254834-45.254834q-3.771236-3.771236 0-7.542472Z"
        fill="#ffffff"
      />
    </svg>
  );
};

export const CloseIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="16"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M512 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z m0-853.333333C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128z"
        fill="#6366f1"
      />
      <path
        d="M332.8 691.2c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8l119.466667-119.466667 119.466667 119.466667c8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512l119.466667-119.466667c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667l-119.466667-119.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333l119.466667 119.466667-119.466667 119.466667c-17.066667 17.066667-17.066667 42.666667 0 59.733333"
        fill="#6366f1"
      />
    </svg>
  );
};

export const RightArrowIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      fill="#BEBEBE"
      height="16"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M767.25248 512 476.40576 221.16352c-20.89984-20.91008-20.89984-54.80448 0-75.70432 20.89984-20.91008 54.79424-20.91008 75.70432 0l328.704 328.69376c10.4448 10.45504 15.6672 24.14592 15.6672 37.84704s-5.23264 27.40224-15.6672 37.84704l-328.704 328.69376c-20.91008 20.91008-54.80448 20.91008-75.70432 0-20.89984-20.89984-20.89984-54.80448 0-75.70432L767.25248 512zM143.18592 802.83648c-20.89984 20.89984-20.89984 54.80448 0 75.70432 20.89984 20.91008 54.784 20.91008 75.70432 0l328.704-328.69376c10.4448-10.45504 15.65696-24.14592 15.65696-37.84704s-5.2224-27.40224-15.65696-37.84704l-328.704-328.69376c-20.92032-20.91008-54.80448-20.91008-75.70432 0-20.89984 20.89984-20.89984 54.79424 0 75.70432L434.03264 512 143.18592 802.83648z" />
    </svg>
  );
};

export const LogOutIcon: React.FC<IconSvgProps> = (props) => {
  return (
    <svg
      className="icon"
      height="24"
      version="1.1"
      viewBox="0 0 1024 1024"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M490.666667 157.866667a29.866667 29.866667 0 1 0 0-59.733334H312.490667c-79.701333 0-147.456 59.605333-155.178667 139.690667C149.546667 318.378667 140.8 427.690667 140.8 512c0 84.266667 8.746667 193.621333 16.512 274.176 7.722667 80.085333 75.477333 139.690667 155.178667 139.690667H490.666667a29.866667 29.866667 0 1 0 0-59.733334H312.490667A95.402667 95.402667 0 0 1 216.746667 780.373333C209.024 700.074667 200.533333 593.152 200.533333 512c0-81.194667 8.533333-188.117333 16.213334-268.416a95.402667 95.402667 0 0 1 95.744-85.76H490.666667z m380.757333 372.224a25.6 25.6 0 0 0 0-36.224l-170.666667-170.666667a25.6 25.6 0 1 0-36.181333 36.224l122.709333 122.709333H355.541333a29.866667 29.866667 0 1 0 0 59.733334h431.701334l-122.709334 122.666666a25.6 25.6 0 0 0 36.224 36.224l170.666667-170.666666z"
        fill="#ffffff"
      />
    </svg>
  );
};
