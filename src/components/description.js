export default function Description({ data, curId }) {
  return (
    <h1 className="justify-self-center text-center font-semibold">
      {data.map(
        (data) => data.id === curId && `Step ${data.id} : ${data.title}`
      )}
    </h1>
  );
}
