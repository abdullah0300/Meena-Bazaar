import React from "react";
import { cityArray } from "../utils/data";

const InputField = ({
  typ = "text",
  label,
  val,
  onchng,
  selectEl = false,
  onFocus = null,
  onBlur = null,
}) => {
  return (
    <div className=" flex flex-col justify-start items-start gap-2">
      <label className=" text-[#4D4D4D] text-md">{label}</label>
      {selectEl ? (
        <select
          defaultValue="Select City (optional)"
          onChange={onchng}
          className=" w-full h-12 border border-[#B9B9B9] p-2 outline-none"
        >
          <option selected hidden>
            Select City
          </option>
          {cityArray?.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      ) : (
        <input
          type={typ}
          value={val}
          onChange={onchng}
          onFocus={onFocus}
          onBlur={onBlur}
          className=" w-full h-12 border border-[#B9B9B9] p-2 outline-none"
        />
      )}
    </div>
  );
};

export default InputField;
