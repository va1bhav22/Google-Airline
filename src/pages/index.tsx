import PublicLayout from "@/layout/public";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <PublicLayout title="Google">
      <section className="">
        <div>
          <img src="/travel/travel.svg" alt="" />
        </div>
      </section>
    </PublicLayout>
  );
}
