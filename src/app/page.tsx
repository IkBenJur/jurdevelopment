import CardList from "./ui/CardList";
import ExperienceCard from "./ui/ExperienceCard";
import ItemHeader from "./ui/ItemHeader";
import JurCard from "./ui/JurCard";
import ProjectCard from "./ui/ProjectCard";

export default function Home() {
  const projectList = [
    <ProjectCard
      title="Rust Interpreter"
      description="Work In Progress, custom programming language interpreter created in Rust."
      technologies="Rust"
    />,
    <ProjectCard
      title="Learn Italian"
      description="Work In Progress, learn the most common Italian words using spaced repetition algorithm."
      technologies="NextJs, TypeScript, Tailwind"
    />,
    <ProjectCard
      title="Rust Interpreter"
      description="Work In Progress, custom programming language interpreter created in Rust."
      technologies="Rust"
    />,
  ];

  const experienceList = [
    <ExperienceCard
      title="Software development Trainee, Working Talent"
      technologies="Java, Angular"
    />,
    <ExperienceCard
      title="Software development Intern, GenDx"
      technologies="C#, WPF"
    />,
  ];

  const educationList = [
    <ExperienceCard
      title="Bachelor Bio-Informatics, University of Applied Sciences Leiden"
      technologies="Python, JavaScript, SQL, Java"
    />,
  ];

  return (
    <main className="flex flex-row px-32 py-20 gap-6 w-screen">
      <div className="w-2/6 h-fit border rounded-lg border-gray-400">
        <JurCard />
      </div>
      <div className="w-4/6 flex flex-col gap-4">
        <CardList
          header={<ItemHeader header="Projects" />}
          items={projectList}
        />
        <CardList
          header={<ItemHeader header="Work Experience" />}
          items={experienceList}
        />
        <CardList
          header={<ItemHeader header="Education" />}
          items={educationList}
        />
      </div>
    </main>
  );
}
