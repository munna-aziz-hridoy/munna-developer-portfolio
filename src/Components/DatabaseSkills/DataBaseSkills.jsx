import React from "react";

const DataBaseSkills = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-5 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          MongoDB
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="80"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default DataBaseSkills;
