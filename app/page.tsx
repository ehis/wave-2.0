import Image from "next/image";
import Rotate from "./components/Rotate";

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
        <h1 className="text-white text-6xl md:text-8xl">wave</h1>
      </div>
      <div className="text-white flex md:flex-row gap-4 self-end w-full md:w-9/12">
        <Rotate bg="#1535c4" height="auto" />
        <div
          className="p-8 text-3xl md:text-6xl"
          style={{ backgroundColor: "#828282" }}
        >
          /wāv/ a music collaboration and workflow company
        </div>
        <Rotate bg="#ffd917" height="auto" />
      </div>
      <div className="text-white flex md:flex-row gap-4 self-start w-full md:w-9/12">
        <Rotate bg="#ff5a00" height="auto" />
        <div className="p-8 text-3xl md:text-6xl">
          an easy way to upload, and share your creations with your circle.
        </div>
        <Rotate bg="#e7e7e7" height="auto" />
      </div>
      <div className="text-white flex md:flex-row gap-4 self-end w-full md:w-9/12">
        <Rotate bg="#f73375" height="auto" />
        <div
          className="p-8 text-3xl md:text-6xl"
          style={{ backgroundColor: "#828282" }}
        >
          collaborate with your team and keep the conversation going in a single
          place.
        </div>
        <Rotate bg="#ff5a00" height="auto" />
      </div>
      <footer className="self-start text-white text-3xl">
        info@itswave.app
      </footer>
    </main>
  );
}
