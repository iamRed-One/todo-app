import React from "react";

const TodoItem = ({ isChecked, setIsChecked }) => {
  return (
    <div className="flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-1">
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
        <span className="font-family-sans text-navy-850 ml-2 text-sm dark:text-gray-600">
          Complete 2 hours of gym
        </span>
      </div>
      <button className="cursor-pointer bg-transparent">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
          <path
            fill="#494C6B"
            fill-rule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
