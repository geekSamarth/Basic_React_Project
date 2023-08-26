import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // example-1 of fetchAPI
  // const[catFact,setCatFact]=useState("");
  // const fetchdata = ()=>{
  //   axios.get("https://catfact.ninja/fact").then((res)=>{
  //   setCatFact(res.data.fact)
  // })
  // }
  // useEffect(()=>{
  //   fetchdata();
  // },[]);
  // return (
  //   <>
  //     <button onClick={fetchdata}>Generate Cat Fact</button>
  //     <h1>{catFact}</h1>
  //   </>
  // )

  // example-2 of fetchAPI
  // const [age, setAge] = useState(null);
  // const [name, setName] = useState("");
  // const fetchData = () => {
  //   axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
  //     // console.log(res.data);
  //     setAge(res.data);
  //   })
  // };
  // return (
  //   <>
  //     <input
  //       placeholder="Samarth .."
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     />
  //     <button onClick={fetchData}>Predict Age</button>
  //     <h1>Name:{age?.name}</h1>
  //     <h1>Age:{age?.age}</h1>
  //     <h1>Count:{age?.count}</h1>
  //   </>
  // );

  // exercise on fetching api

  const [excuse, setExcuse] = useState("");
  const fetchExcuse = (category) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((res) => {
        setExcuse(res.data[0].excuse);
      });
  };
  return (
    <>
      <button onClick={() => fetchExcuse("party")}>Party</button>
      <button onClick={() => fetchExcuse("family")}>Family</button>
      <button onClick={() => fetchExcuse("office")}>Office</button>
      <h1>{excuse}</h1>
    </>
  );
}

export default App;
