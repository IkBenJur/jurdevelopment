import Image from "next/image";
import githubIcon from "../../../public/gradient_avatar.png";
import { FC } from "react";

interface JurCardProps {}

const JurCard: FC<JurCardProps> = ({}) => {
  return (
    <div className="flex flex-col gap-4 my-4 mx-8">
      <div className="flex gap-4">
        <div className="h-24 hidden sm:block">
          <Image
            src={githubIcon}
            alt="GitHub Profile picture"
            width={0}
            height={0}
            style={{ width: "auto", height: "100%" }}
          />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-3xl font-bold">Jur Beijaard</p>
          <div className="text-gray-500 text-base">
            <p>Software Developer.</p>
            <p>Utrecht, The Netherlands.</p>
          </div>
        </div>
      </div>

      <div>
        <p>Want to reach out? Email me @ jurbeijaard@gmail.com</p>
      </div>
    </div>
  );
};

export default JurCard;
