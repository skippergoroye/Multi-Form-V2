import React from "react";



export type StepObjectType = {
    id: number;
    title: string;
    description: string;

}
interface Props {
    step: number;
    data: StepObjectType[];
}

const StepObject = ({step, data }: Props) => {
  return (
    <section className="grid grid-cols-3 text-sm gap-6 mb-10 ">
      <article>
        <div className="h-2 w-3/4 bg-slate-800" />
        Personal Information
      </article>
      <article>
        <div className="h-2 w-3/4 bg-slate-800" />
        Account Information
      </article>
      <article>
        <div className="h-2 w-3/4 bg-slate-800" />
        Passport Information
      </article>
    </section>
  );
};

export default StepObject;
