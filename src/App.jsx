import { useState } from "react";
import { PreviewForm } from "./components/PreviewForm";

function App() {
  const [data, setData] = useState("");
  const [preview, setPreview] = useState("");

  const onChangeData = (e) => {
    setData(e.target.value);
    // console.log(data)
  };

  const onSubmit = () => {
    setPreview(data);
    console.log(data);
  };
  return (
    <div className="flex">
      <div className="m-2 p-3 border-2 md:w-1/2 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center">JSON Text Editor</h1>
        <textarea
          value={data}
          name=""
          id=""
          cols="30"
          rows="20"
          onChange={onChangeData}
          className="border resize-none rounded w-full"
        >
          {data}
        </textarea>
        <button
          className="text-white bg-black p-2 rounded block mx-auto"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
      <div className="border-2 w-1/2 m-2 p-2 shadow-lg">
        <h1 className="text-center font-bold text-2xl">Preview Form</h1>
        <PreviewForm preview={preview} />
      </div>
    </div>
  );
}

export default App;
