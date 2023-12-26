import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen py-8 mx-3">
      <div>
        <h1 className="text-4xl">Hi, my name is Jur</h1>
        <p>A student interested in fullstack development</p>
      </div>

      <div>
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
          <Link href={"mailto:jurbeijaard@gmail.com"} className="font-bold underline">
            me
          </Link>
        </p>
      </div>
    </main>
  );
}
