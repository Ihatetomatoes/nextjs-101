import useLocalStorage from "../hooks/useLocalStorage";

const ResetProgressBtn = () => {
  const [, setProgress] = useLocalStorage("progress");
  return (
    <button
      onClick={() => {
        setProgress([]);
        location.reload();
      }}
      type="button"
      className="text-center p-2 block text-xs w-full mt-2 rounded-sm hover:bg-red-500 hover:text-white transition-colors duration-200"
    >
      Reset Progress
    </button>
  );
};

export default ResetProgressBtn;
