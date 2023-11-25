// import { useState } from 'react'

import { InputForm } from "./components/InputForm";
import { PreviewForm } from "./components/PreviewForm";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="m-5">
      <h1 className="text-center text-3xl font-bold text-gray-500">
        preview schema
      </h1>
      <div className="flex md:flex-row flex-col my-3 gap-5">
        <div className="md:w-1/2 border md:h-screen rounded">
          <InputForm />
        </div>
        <div className="md:w-1/2 border md:h-screen rounded">
          <PreviewForm />
        </div>
      </div>
    </div>
  );
}

export default App;
