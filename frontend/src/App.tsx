import './App.css';
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../../src/uploadthing"; // Adjust this path based on your project structure

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>UploadThing File Upload</h1>
      {/*
        The second type argument should be the literal string of the endpoint name,
        which is 'imageUploader' in your case.
      */}
      <UploadButton<OurFileRouter, "imageUploader"> // <--- Corrected line
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          alert("Upload complete!");
          console.log("Upload result:", res);
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  );
}

export default App;
