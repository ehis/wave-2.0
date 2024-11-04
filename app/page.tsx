import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-between gap-8 bg-black px-10 py-20 min-h-screen">
      <div className="flex gap-4 self-start items-center flex-col md:flex-row md:gap-6">
        <Image
          src="/wave.svg"
          alt="Wave logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-white text-8xl">Wave</h1>
      </div>
      <div className="text-white flex flex-col gap-4 self-end w-full md:w-9/12 -mr-10">
        <div className="p-8 text-3xl md:text-6xl bg-zinc-800">
          a music collaboration and workflow tool
        </div>
      </div>
      <footer className="self-start text-white text-3xl">
        info@itswave.app
      </footer>
    </main>
  );
}
