import classNames from "classnames";
import { Tick } from "../icons";

const UnitProgress = ({ isCompleted }) => {
  const tickClass = classNames({
    "rounded-full border border-gray-200 w-10 h-10 flex bg-white": true,
    "border-dashed": !isCompleted,
    "border-solid": isCompleted,
  });
  return (
    <span className={tickClass}>
      {isCompleted && <Tick className="h-4 w-8 self-center mx-auto" />}
    </span>
  );
};

export default UnitProgress;
