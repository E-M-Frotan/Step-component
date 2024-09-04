export default function Button({ text, onButtonClick, curId }) {
  return (
    <button
      onClick={() => onButtonClick(curId)}
      className="bg-blue-700 text-white px-4 py-2 max-w-fit rounded-lg font-semibold"
    >
      {text}
    </button>
  );
}
