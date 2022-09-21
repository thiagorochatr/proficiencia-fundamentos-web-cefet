import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const odsObjects = [
  {
    number: "ODS #1",
    name: "Erradicação da Pobreza",
    color: "red-500",
  },
  {
    number: "ODS #2",
    name: "Fome zero e agricultura sustentável",
    color: "yellow-300",
  },
];

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Página 2{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          {odsObjects.map((item) => (
            <a
              href="#"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              {/* exite um item.color que é o background
                 que eu quero que seja em cada item */}
              <h3 className="text-2xl font-bold">{item.number}</h3>
              <p className="mt-4 text-xl">{item.name}</p>
            </a>
          ))}

          <p className="mt-12 text-2xl"> Como eu quero que fique: </p>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left bg-red-500 hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">ODS #1</h3>
            <p className="mt-4 text-xl">Erradicação da Pobreza</p>
          </a>

          <a
            href="#"
            className="mt-6 w-96 rounded-xl border p-6 text-left bg-yellow-300 hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">ODS #2</h3>
            <p className="mt-4 text-xl">Fome zero e agricultura sustentável</p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
