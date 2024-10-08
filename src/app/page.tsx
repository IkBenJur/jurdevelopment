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
      key={1}
    />,
    <ProjectCard
      title="Learn Italian"
      description="Work In Progress, learn the most common Italian words using spaced repetition algorithm."
      technologies="NextJs, TypeScript, Tailwind"
      key={2} 
    />,
    <ProjectCard
      title="Rust Interpreter"
      description="Work In Progress, custom programming language interpreter created in Rust."
      technologies="Rust"
      key={3}
    />,
  ];

  const experienceList = [
    <ExperienceCard
      title="Software development Trainee, Working Talent"
      technologies="Java, Angular"
      key={4}
    />,
    <ExperienceCard
      title="Software development Intern, GenDx"
      technologies="C#, WPF"
      key={5}
    />,
  ];

  const educationList = [
    <ExperienceCard
      title="Bachelor Bio-Informatics, University of Applied Sciences Leiden"
      technologies="Python, JavaScript, SQL, Java"
      key={6}
    />,
  ];

  return (
    <main className="flex flex-col px-12 py-8 lg:flex-row sm:px-32 sm:py-20 gap-6 w-screen">
      <div className="w-full h-fit border rounded-lg border-gray-400 lg:w-[29rem] lg:min-w-96">
        <JurCard />
      </div>
      <div className="w-full flex flex-col gap-4 lg:w-4/6 sm">
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
