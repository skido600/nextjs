import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
function Mode() {
  const [toggle, setToggle] = useState<boolean>(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div>
        <button
          onClick={handleToggle}
          className="p-2 rounded-lg bg-gray-200 transition-colors duration-200"
        >
          {toggle ? <MdDarkMode /> : <CiLight />}
        </button>
      </div>
    </>
  );
}

export default Mode;
