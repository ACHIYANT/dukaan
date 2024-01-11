import { useState } from "react";
import downArrow from "/assets/arrow.svg";

export default function Dropdown({ listItems, defaultValue }) {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState(defaultValue);
  function handleActive() {
    setIsActive(!isActive);
  }
  function handleSelected(e) {
    setSelected(e.target.textContent);
    setIsActive(!isActive);
  }
  return (
      <div
        className="dropdown-btn flex items-center shrink-0 border border-black85 bg-white cursor-pointer relative z-[100]   justify-between w-[137px] h-[36px] px-3.5 py-1.5 font-medium rounded  text-black30 "
        onClick={handleActive}
      >
        <span className="text-black30">{selected}</span>
        <span>
          <img src={downArrow} className={isActive ? "rotate-180 w-4 h-4 shrink-0" : "w-4 h-4 shrink-0"} />
        </span>
        <ul
          className="dropdown-content absolute left-0 top-10 width-full bg-white rounded list-none shadow-md"
          style={{ display: isActive ? "block" : "none" }}
        >
          {listItems.map((item) => (
            <li
              className="item p-2.5 cursor-pointer hover:bg-gray-50"
              onClick={handleSelected}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

  );
}
