import Image from "next/image";
import Glass from "./components/glass";
import Rotate from "./components/rotate";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <div className="flex flex-col py-20 px-4 gap-4 w-full md:max-w-4/5 mx-auto grow">
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
        <div className="flex md:flex-row gap-4 self-center w-full md:w-9/12">
          <Rotate bg="#1535c4" height="auto" />
          <Glass>
            <Subtitle>/wāv/ is a music collaboration company.</Subtitle>
          </Glass>
          <Rotate bg="#ffd917" height="auto" />
        </div>
        <Image
          src="/marketing-01.svg"
          alt="Marketing 01"
          width={600}
          height={800}
          className="self-center -mb-52"
        />
        <div className="flex md:flex-row gap-4 self-start w-full md:w-9/12">
          <Rotate bg="#ff5a00" height="auto" isSquare />
          <Glass>
            <Subtitle>
              streamline your workflow, and share your creations with your
              circle.
            </Subtitle>
          </Glass>
          <Rotate bg="#e7e7e7" height="auto" isSquare />
        </div>
        <Image
          src="/marketing-02.svg"
          alt="Marketing 02"
          width={600}
          height={800}
          className="self-center -mb-16"
        />
        <div className="flex md:flex-row gap-4 self-end w-full md:w-9/12">
          <Rotate bg="#f73375" height="auto" />
          <Glass>
            <Subtitle>we keep your threads going in a single place.</Subtitle>
          </Glass>
          <Rotate bg="#ff5a00" height="auto" />
        </div>
        <footer className="self-start text-white mt-12">
          <div className="text-lg mt-2">
            &copy; {new Date().getFullYear()} wave music and technology inc.
          </div>
          <div className="text-lg">info@itswave.app</div>
        </footer>
      </div>
    </main>
  );
}

function Subtitle({ children }: { children: React.ReactNode }) {
  return <div className="p-8 text-4xl md:text-5xl text-white">{children}</div>;
}
