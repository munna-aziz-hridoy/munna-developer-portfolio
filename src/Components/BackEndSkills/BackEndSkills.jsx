import React from "react";

const BackEndSkills = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-5 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          Node.Js
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="70"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-5 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          Express.Js
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="75"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default BackEndSkills;
