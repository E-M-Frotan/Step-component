import Step from "./step";
export default function Steps({ data, curId, SetCurId }) {
  return (
    <div className="flex justify-between items-start">
      {data.map((step) => (
        <Step theData={step} key={step.title} curId={curId} SetCurId={SetCurId} />
      ))}
    </div>
  );
}
