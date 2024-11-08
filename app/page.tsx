import Landing from "@/components/landing";
import Overview from "@/components/overview";

export default function Home() {
  return (
    <main className="min-h-screen bg-notebook bg-yellow-50 font-myfont overflow-hidden">
      <Landing />
      <Overview />
    </main>
  );
}
