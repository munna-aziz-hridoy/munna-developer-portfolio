import React from "react";

const FrontEndSkills = () => {
  return (
    <div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-2 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          JavaScript
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="90"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-2 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          React.Js
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="87"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-2 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          Bootstrap
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="95"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-2 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          Tailwind CSS
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="95"
          max="100"
        ></progress>
      </div>

      <div className="flex flex-col justify-start items-start w-full gap-5 my-2 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          TypeSript
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="75"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-col justify-start items-start w-full gap-5 my-2 p-5">
        <span className="text-xl title-text text-neutral font-semibold">
          React Native
        </span>
        <progress
          class="progress progress-secondary w-full rounded-none"
          value="60"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default FrontEndSkills;
