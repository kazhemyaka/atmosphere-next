import type { FC } from "react";
import { IconContext } from "react-icons";

interface WeatherInfoProps {
  icon: JSX.Element;
  desc: string;
  value: string;
}

const WeatherInfo: FC<WeatherInfoProps> = ({ icon, desc, value }) => {
  return (
    <li className="p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center gap-2">
      <IconContext.Provider value={{ size: "1.5em" }}>
        {icon}
      </IconContext.Provider>
      <div>
        <p className="font-bold">{desc}</p>
        <p>{value}</p>
      </div>
    </li>
  );
};

export default WeatherInfo;
