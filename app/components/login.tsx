"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@heroui/react";
import { Image } from "@heroui/react";

const GoogleIcon = () => (
  <Image src="/google_g_icon.png" width={30} alt="Google" />
);

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="mb-2">Next.js SSO with Google</h1>
      {session ? (
        <div>
          <h2 className="mb-2">Welcome, <b>{session?.user?.name}!</b></h2>
          <p>Email: <b>{session?.user?.email}</b></p>
          { session?.user?.image ? (
              <Image src={session?.user?.image??undefined} alt="Profile" width={100} />
            ) : (<div />)
          }
          <br /><br />
          <Button onPress={() => signOut()}>Sign out</Button>
        </div>
      ) : (
        <div>
          <p className="mb-1">Please log in using Google.</p>
          <Button variant="bordered" startContent={<GoogleIcon />} onPress={() => signIn("google")}>Login with Google</Button>
        </div>
      )}
    </div>
  );
}
