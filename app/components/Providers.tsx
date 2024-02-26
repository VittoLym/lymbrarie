"use client";
import { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";

function Providers({ children }: PropsWithChildren) {
  return (
    <SessionProvider>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
}

export default Providers;
