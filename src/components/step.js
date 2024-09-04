export default function Step({ theData, curId, SetCurId }) {
  return (
    <div
      className={`${
        curId === theData.id ? "bg-green-800" : "bg-gray-500"
      }  px-4 py-2 rounded-full text-white font-semibold`}
    >
      <p>{theData.id}</p>
    </div>
  );
}
