import LoginButton from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle,rgba(255,255,255,0.1),rgba(0,0,0,0.9))] font-sans antialiased">
      <div className="space-y-6">
        <h1 className="text-center text-4xl font-bold drop-shadow-lg">
          🔐 NextJS Authentication
        </h1>
        <p className="text-center text-lg">
          A simple NextJS authentication app using AuthJS.
        </p>
        <div className="flex justify-center">
          <LoginButton>
            <Button variant={"secondary"} size="lg">
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
