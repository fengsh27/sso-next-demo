"use client";

import { SessionProvider } from "next-auth/react"
import { HeroUIProvider } from "@heroui/react";

export default function App({
  children,
}: {children: any}) {
  return (
    <SessionProvider>
      <HeroUIProvider>
      {children}
      </HeroUIProvider>
    </SessionProvider>
  )
}