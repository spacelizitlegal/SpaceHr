"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to /features after 3 seconds
    const timer = setTimeout(() => {
      router.push("/features");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1121] via-[#1a2035] to-primary/20 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-2">
            The page you're looking for doesn't exist.
          </p>
          <p className="text-lg text-gray-400">
            Redirecting to Features page in 3 seconds...
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/features">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white cursor-pointer"
            >
              Go to Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 cursor-pointer"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 text-sm">
            If you continue to experience issues, please contact support.
          </p>
        </div>
      </div>
    </div>
  );
}
