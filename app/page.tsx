import Image from "next/image";
import { getServerSession } from "next-auth/next"
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import App from "@/app/components/app"
import LoginPage from "@/app/components/login";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <App>
          {session ? (
            (<LoginPage />)
          ) : (<LoginPage />)}
        </App>
      </main>
    </div>
  );
}
