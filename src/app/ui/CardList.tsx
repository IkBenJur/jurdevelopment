import { FC, Fragment } from "react";

interface CardListProps {
  header: React.ReactElement;
  items: React.ReactElement[];
}

const CardList: FC<CardListProps> = ({ header, items }) => {
  return (
    <Fragment>
      {header}
      <div className="flex my-2 flex-col gap-4">
        {items.map((item) => (
          <div key={item.key} className="mx-2">
            {item}
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default CardList;
