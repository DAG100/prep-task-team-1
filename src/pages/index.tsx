import {useState} from "react";

export default function Home() {
  const [filesList, setFilesList] = useState([]);
  return (
    <div>
      <div className="file-list">
        <h1 className="text-xl">Uploaded files:</h1>
        <ul>
          {filesList.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
        <button>Refresh list</button>
      </div>
      <div>
        <h2>Upload a file</h2>
        <form name="upload">
          <input type="file" />
          <button onClick={(event) => {
            event.preventDefault();
            console.log("Clicked");
          }}>Upload File</button>
        </form>
        </div>
    </div>
  )
}
