import { FC, Fragment } from "react";

interface ExperienceCardProps {
  title: string;
  technologies: string;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  technologies,
}) => {
  return (
    <Fragment>
      <p className="text-2xl font-normal text-gray-100">{title}</p>
      <p className="font-medium text-gray-300">Technologies: {technologies}</p>
    </Fragment>
  );
};

export default ExperienceCard;
