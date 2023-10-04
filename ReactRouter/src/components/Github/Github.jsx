import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/geekSamarth")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);
  return (
    <div className="bg-gray-600 text-white text-center text-3xl p-4 m-6">
      Github Followers: {data.followers}
      <img className="rounded-full" src={data.avatar_url} alt="Git picture" width={300} />
      
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/geekSamarth");
    return response.json();
}