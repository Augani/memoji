import React from 'react'

function App() {
  const [links,setLinks] = React.useState([])
  React.useEffect(()=>{
    fetch("https://memoji.herokuapp.com/v1/all").then((r)=>r.json()).then((b)=>setLinks(b)).catch(e=>console.log(e));
  }, [])
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-20 w-full flex flex-row p-4">
        <h1 className="text-lg font-semibold">Memojis</h1>
      </div>
      <div className="w-full h-16">
      </div>
      <main className="w-full h-full overflow-y-auto grid-cols-1 gap-2 lg:gap-4 lg:grid-cols-4">
        {links.length? links.map((v)=><img src={v} className="h-32 rounded-md shadow-lg hover:scale-300 transition duration-150 hover:border-blue-400" alt="memoji" />):(<div className="col-span-1 lg:col-span-4">
          <div className="w-full h-full flex flex-col justify-center items-center ">
          <h1 className="text-lg font-semibold">Api Unavailable</h1>
          </div>
          </div>)}
      </main>
    </div>
  );
}

export default App;
