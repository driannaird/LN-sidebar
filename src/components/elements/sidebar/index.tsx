import Link from "next/link";
import { useState } from "react";
import {
  RiLayoutGridFill,
  RiDatabase2Fill,
  RiStackLine,
  RiArrowLeftCircleFill,
  RiLineChartFill,
} from "react-icons/ri";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  const menus = [
    {
      title: "Dashboard",
      path: "/",
      icon: <RiLayoutGridFill />,
    },
    {
      title: "Data",
      path: "/data",
      icon: <RiDatabase2Fill />,
    },
    {
      title: "About",
      path: "/about",
      icon: <RiStackLine />,
    },
    {
      title: "Chart",
      path: "/chart",
      icon: <RiLineChartFill />,
    },
    {
      title: "Chart",
      path: "/chart",
      icon: <RiLineChartFill />,
    },
    {
      title: "Chart",
      path: "/chart",
      icon: <RiLineChartFill />,
    },
    {
      title: "Tes",
      path: "/tes",
      icon: <RiLineChartFill />,
    },
  ];

  return (
    <div
      className={`bg-gradient-to-br from-slate-800 to-black h-screen pt-8 px-5 ${
        toggle ? "w-72" : "w-20"
      } relative transition-all duration-300 ease-in-out`}>
      {/* Toggle */}
      <button className="text-white transition duration-200 ease-in-out hover:text-slate-200 ml-[1px]">
        <RiArrowLeftCircleFill
          className={`text-4xl transition duration-200 ease-in-out ${
            !toggle && "rotate-180"
          }`}
          onClick={() => setToggle(!toggle)}
        />
      </button>

      <div className="mt-8 flex flex-col gap-2">
        {menus.map((menu, index) => (
          <Link
            href={`${menu.path}`}
            key={index}
            className="flex items-center text-white rounded-lg transition duration-100 cursor-pointer hover:bg-slate-500">
            <span className="p-2 text-xl">{menu.icon}</span>
            <span className={`${!toggle && "scale-0"} transition duration-300`}>
              {menu.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
