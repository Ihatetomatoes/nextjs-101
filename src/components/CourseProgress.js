import useLocalStorage from "@hooks/useLocalStorage";
import confetti from "canvas-confetti";
import { useEffect } from "react";

const CourseProgress = ({ units, progress, onComplete }) => {
  const unitReward = 10;
  const totalReward = units.length * unitReward;
  const completedUnitsCount = progress.length;
  const awardedPts = completedUnitsCount * unitReward;

  const [isCompleted, setCompleted] = useLocalStorage("completed", false);

  useEffect(() => {
    const isDone = totalReward - awardedPts === 0;
    if (isDone && !isCompleted) {
      setTimeout(() => {
        confetti({
          particleCount: 300,
          startVelocity: 35,
          gravity: 0.5,
          spread: 130,
          origin: { y: 0.4, x: 0.5 },
          shapes: ["circle"],
          disableForReducedMotion: true,
        }).then(() => setCompleted(true));
      }, 1000);
    }
  }, [awardedPts, totalReward]);

  return (
    <div className="mb-4 relative">
      <p className="text-center mb-2">
        <strong className="text-lg">{completedUnitsCount * unitReward}</strong>{" "}
        points
      </p>
      <div className="w-full bg-gray-200">
        <div
          style={{ width: `${100 / (totalReward / awardedPts)}%` }}
          className="border-t-2 border-blue-500"
        />
      </div>
    </div>
  );
};

export default CourseProgress;
