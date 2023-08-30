import {useQuery} from 'react-query'
import Axios from 'axios';
function Home() {
  const {data, isLoading,refetch} = useQuery(["cats"],()=>{
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
  });
  if(isLoading){
    return <h1>Loading ...</h1>
  }
  return (
    <div>
      <h1 className='text-center text-3xl mt-32'>This is Home page.</h1>
      {data?.fact}
      <button className='p-4 bg-gray-400' onClick={refetch}>Update Data</button>
    </div>
  )
}

export default Home
