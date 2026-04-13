"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
   const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, [router]);
  return (
    <main>
      <div className='page-wrapper compact-wrapper modern-sidebar' id='pageWrapper'>
        
      </div>
    </main>
  );
}
