import React from "react";

export type StepObjectType = {
  id: number;
  title: string;
  description: string;
  fields?: string[];
};
interface Props {
  step: number;
  data: StepObjectType[];
}

const StepObject = ({ step, data }: Props) => {
  return (
    <section className="grid grid-cols-3 text-sm gap-6 mb-10 ">
      {data.map((item, index) => (
        <article key={index} className={`text-sm ${step >= item.id ? "text-emerald-600": ""}`}>
           <div className={`h-2 w-3/4  ${step >= item.id ? "bg-emerald-600" : "bg-slate-800"}`} />
          {item.title}
        </article>
      ))}
    </section>
  );
};

export default StepObject;
