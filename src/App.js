import { useState } from "react";
import Steps from "./components/steps";
import Description from "./components/description";
import Button from "./components/Button";
function App() {
  const [curId, SetCurId] = useState(1);
  console.log(curId);
  const data = [
    { id: 1, title: "Learn React" },
    { id: 2, title: "Apply jobs" },
    { id: 3, title: "Invest new money" },
  ];
  const plusIdHandler = (curId) => {
    SetCurId((curId) => (curId >= 3 ? 1 : curId + 1));
  };
  const minusIdHandler = (curId) => {
    SetCurId((curId) => (curId >= 3 ? curId - 1 : curId < 2 ? 1 : curId - 1));
  };
  return (
    <div className="w-1/3  flex flex-col gap-y-8 rounded-md p-4 mx-auto mt-28 min-h-32 bg-sky-400">
      <Steps data={data} curId={curId} SetCurId={SetCurId} />
      <Description data={data} curId={curId} />
      <div className="flex justify-between">
        <Button text="Previous" onButtonClick={minusIdHandler} curId={curId} />
        <Button text="Next" onButtonClick={plusIdHandler} curId={curId} />
      </div>
    </div>
  );
}

export default App;
