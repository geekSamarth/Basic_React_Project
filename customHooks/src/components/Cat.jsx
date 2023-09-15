import { useGetCat } from "../Hooks/useGetCat.js"
function Cat() {
  const { data,refetchData,isCatLoading} = useGetCat()
  if(isCatLoading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={refetchData}>Refetch Data</button>
    </div>
  )
}

export default Cat
