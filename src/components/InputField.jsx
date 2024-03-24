import React from "react";
import { countriesArray } from "../utils/data";

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
          defaultValue="Select Country"
          onChange={onchng}
          className=" w-full h-12 border border-[#B9B9B9] p-2 outline-none"
        >
          <option selected hidden>
            Select Country
          </option>
          {countriesArray?.map((cntry) => (
            <option key={cntry}>{cntry}</option>
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
