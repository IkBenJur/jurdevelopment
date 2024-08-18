import JurCard from "./ui/JurCard";

export default function Home() {
  return (
    <main className="flex flex-row px-32 py-20 gap-6 w-screen">
      <div className= "w-2/6 h-fit border rounded-lg border-gray-400">
        <JurCard />
      </div>
      <div className="bg-red-100 w-4/6">Experience cards</div>
    </main>
  );
}