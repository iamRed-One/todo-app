import { Check } from "lucide-react";
import React from "react";

const CheckBox = ({ isChecked, setIsChecked }) => {
  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="peer-checked:from-from peer-checked:to-to peer-checked: h-5 w-5 rounded-full border-1 border-gray-600 bg-radial-[at_50%_75%] transition-all duration-200 peer-checked:border-transparent"></div>
        <Check className="absolute top-1 left-1 h-3 w-3 font-bold text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100" />
      </div>
    </label>
  );
};

export default CheckBox;
