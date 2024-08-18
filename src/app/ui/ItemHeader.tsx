import { FC } from "react";

interface ItemHeaderProps {
  header: string;
}

const ItemHeader: FC<ItemHeaderProps> = ({ header }) => {
  return (
    <div>
      <div className="text-3xl font-medium mx-2 mb-1">{header}</div>
      <hr className="h-[1px] border-t-0 bg-gray-400" />
    </div>
  );
};

export default ItemHeader;
