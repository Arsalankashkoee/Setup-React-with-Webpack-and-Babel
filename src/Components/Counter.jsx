import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button
      className="bg-violet-500 py-1 px-3 rounded-lg text-white"
      onClick={() => setCount((c) => c + 1)}
    >
      click - {count}
    </button>
  );
};

export default Counter;
