import useSWR from "swr";
export const Test = () => {
  const { data, error } = useSWR("http://localhost:3001/api/hello");

  return (
    <div>
      {data.map((user, idx) => (
        <h3 key={idx}>{user.name}</h3>
      ))}
    </div>
  );
};
