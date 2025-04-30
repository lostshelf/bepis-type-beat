import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>This will eventually have something</h1>
        <p>
          And by eventually I mean sometime in the next 10 years because that's
          when this domain expires. Hell even after that I still might not have
          anything here.
        </p>
      </main>
    </div>
  );
}
