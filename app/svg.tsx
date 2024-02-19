"use client";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

const BackSVG = ({ route }: { route: string }) => {
  const router = useRouter();

  function onClick() {
    if (!document.startViewTransition) {
      return router.push(route);
    } else {
      document.startViewTransition(() => flushSync(() => router.push(route)));
    }
  }

  return (
    <svg
      onClick={() => router.push(route)}
      className="absolute top-10 left-20 w-14 h-14 border border-[#5c5c5c] rounded-md bg-[#b5b5b5] cursor-pointer duration-75 hover:scale-95 hover:bg-[#d0d0d0]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 12H20M4 12L8 8M4 12L8 16"
        stroke="#3c3c3c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SettingsSVG = () => {
  const router = useRouter();

  function onClick() {
    if (!document.startViewTransition) {
      return router.push("/settings");
    } else {
      document.startViewTransition(() =>
        flushSync(() => router.push("/settings"))
      );
    }
  }

  return (
    <svg
      onClick={() => router.push("/settings")}
      className="w-10 h-10 absolute top-1 right-1 cursor-pointer duration-100 hover:scale-105"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.1395 12.0002C14.1395 13.1048 13.2664 14.0002 12.1895 14.0002C11.1125 14.0002 10.2395 13.1048 10.2395 12.0002C10.2395 10.8957 11.1125 10.0002 12.1895 10.0002C13.2664 10.0002 14.1395 10.8957 14.1395 12.0002Z"
        stroke="#393939"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.57381 18.1003L5.12169 12.8133C4.79277 12.2907 4.79277 11.6189 5.12169 11.0963L7.55821 5.89229C7.93118 5.32445 8.55898 4.98876 9.22644 5.00029H12.1895H15.1525C15.8199 4.98876 16.4477 5.32445 16.8207 5.89229L19.2524 11.0923C19.5813 11.6149 19.5813 12.2867 19.2524 12.8093L16.8051 18.1003C16.4324 18.674 15.8002 19.0133 15.1281 19.0003H9.24984C8.5781 19.013 7.94636 18.6737 7.57381 18.1003Z"
        stroke="#393939"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ReadSVG = () => (
  <svg
    className="w-4 h-4"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ReadingSVG = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#000000">
    <path d="M17.749937,2.00096718 C18.9408009,2.00096718 19.9155819,2.92612877 19.9947461,4.09691837 L19.999937,4.25096718 L19.999937,19.7490328 C19.999937,20.9398968 19.0747754,21.9146777 17.9039858,21.993842 L17.749937,21.9990328 L6.25006305,21.9990328 C5.05919905,21.9990328 4.08441813,21.0738712 4.00525386,19.9030816 L4.00006305,19.7490328 L4.00006305,4.25096718 C4.00006305,3.06010319 4.92522464,2.08532227 6.09601423,2.006158 L6.25006305,2.00096718 L17.749937,2.00096718 Z M17.749937,3.50096718 L6.25006305,3.50096718 C5.87036728,3.50096718 5.55657209,3.78312106 5.50690966,4.14919663 L5.50006305,4.25096718 L5.50006305,19.7490328 C5.50006305,20.1287286 5.78221693,20.4425238 6.14829249,20.4921862 L6.25006305,20.4990328 L17.749937,20.4990328 C18.1296327,20.4990328 18.4434279,20.2168789 18.4930903,19.8508034 L18.499937,19.7490328 L18.499937,4.25096718 C18.499937,3.87127142 18.2177831,3.55747622 17.8517075,3.5078138 L17.749937,3.50096718 Z M12.248125,12.997298 C12.6623386,12.997298 12.998125,13.3330845 12.998125,13.747298 C12.998125,14.1269938 12.7159712,14.440789 12.3498956,14.4904514 L12.248125,14.497298 L7.75,14.497298 C7.33578644,14.497298 7,14.1615116 7,13.747298 C7,13.3676023 7.28215388,13.0538071 7.64822944,13.0041447 L7.75,12.997298 L12.248125,12.997298 Z M16.25,9.99864902 C16.6642136,9.99864902 17,10.3344355 17,10.748649 C17,11.1283448 16.7178461,11.44214 16.3517706,11.4918024 L16.25,11.498649 L7.75,11.498649 C7.33578644,11.498649 7,11.1628626 7,10.748649 C7,10.3689533 7.28215388,10.0551581 7.64822944,10.0054956 L7.75,9.99864902 L16.25,9.99864902 Z M16.25,7 C16.6642136,7 17,7.33578644 17,7.75 C17,8.12969577 16.7178461,8.44349096 16.3517706,8.49315338 L16.25,8.5 L7.75,8.5 C7.33578644,8.5 7,8.16421356 7,7.75 C7,7.37030423 7.28215388,7.05650904 7.64822944,7.00684662 L7.75,7 L16.25,7 Z"></path>
  </svg>
);

const PendingSVG = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 7V12L9.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DefaultUserImg = () => (
  <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none">
    <circle
      opacity="0.5"
      cx="12"
      cy="9"
      r="3"
      stroke="#1C274C"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5" />
    <path
      opacity="0.5"
      d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
      stroke="#1C274C"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export {
  BackSVG,
  SettingsSVG,
  ReadSVG,
  ReadingSVG,
  PendingSVG,
  DefaultUserImg,
};
