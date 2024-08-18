import { FC, Fragment } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <Fragment>
      <p className="text-2xl font-normal">{title}</p>
      <p className="text-gray-400">{description}</p>
      <p className="font-medium text-gray-300">Technologies: {technologies}</p>
    </Fragment>
  );
};

export default ProjectCard;
