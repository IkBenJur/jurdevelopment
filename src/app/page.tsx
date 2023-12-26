import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen py-12 flex flex-col gap-8 mx-8 max-w-sm md:mx-auto md:py-24 md:max-w-md">
      <div>
        <h1 className="text-4xl lg:text-5xl">
          Hi, my name is <span className="font-medium">Jur</span>
        </h1>
        <p className="text-xl lg:text-3xl my-2">
          A student interested in fullstack development
        </p>
      </div>

      <div className="flex flex-col gap-8 max-w-xl text-xl">
        <p>
          Welcome to my place on the internet currently I am finishing my
          studies as a Bio-Informatics student at the University of Applied
          Science Leiden, and working as a software developer.
        </p>
        <p>
          My free time I like to spend working out, coding, and relaxing with
          friends and family.
        </p>
        <p>
          You can check out some of my{" "}
          <Link
            href={"https://github.com/IkBenJur"}
            target="_blank"
            className="font-bold underline"
          >
            projects
          </Link>{" "}
          or reach out to{" "}
          <Link
            href={"mailto:jurbeijaard@gmail.com"}
            className="font-bold underline"
          >
            me
          </Link>
        </p>
      </div>
    </main>
  );
}
