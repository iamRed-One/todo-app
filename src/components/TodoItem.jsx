import React from "react";
import CheckBox from "./CheckBox";
import { X } from "lucide-react";

const TodoItem = ({ isChecked, setIsChecked }) => {
  return (
    <div className="flex items-center justify-between px-4 py-4.5">
      <div className="flex items-center gap-1">
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
        <span className="font-family-sans text-navy-850 ml-2 text-sm dark:text-gray-600">
          Complete 2 hours of gym
        </span>
      </div>
      <button className="cursor-pointer">
        <X
          className="text-gray-300 transition-all hover:text-gray-600"
          strokeWidth={1.5}
        />
      </button>
    </div>
  );
};

export default TodoItem;
