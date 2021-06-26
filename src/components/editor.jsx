import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-xcode";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/ext-language_tools";

const srcdoc = `
<!DOCTYPE html>
<html>
    <head>
    <title>Page Title</title>
    <style>
        body {
            background-color: white;
            text-align: center;
            color: black;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
    </head>
    <body>

        <h1>Try This Out</h1>

    </body>
</html>
`;

const Editor = () => {
  const [source, setSource] = useState(srcdoc);
  const [tempSource, setTempSource] = useState(srcdoc);
  const [theme, setTheme] = useState("github");

  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([tempSource], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "download.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="h-screen bg-bgWhite">
      <div className="w-full flex justify-evenly items-center flex-col gap-5 lg:flex-row py-3 bg-bgBlue text-white font-normal shadow-md">
        <div className="font-extrabold text-28 text-white ">
          Frontend Editor
        </div>
        <div>
          <label for="theme" className="px-3">
            Theme{" "}
          </label>
          <select
            name="theme"
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="bg-bgBlue px-5 py-1 text-14 rounded-sm border-1 border-white cursor-pointer"
          >
            <option value="github">Light 1</option>

            <option value="xcode">Light 2</option>
            <option value="monokai">Dark 1</option>
            <option value="twilight">Dark 2</option>
          </select>
        </div>
        <button
          onClick={() => setSource(tempSource)}
          className="bg-green border-2 border-green hover:border-white hover:bg-transparent px-10 py-1 rounded-full shadow-md"
        >
          Run
        </button>
        <button
          onClick={() => downloadTxtFile()}
          className="bg-lightPink border-2 border-lightPink hover:border-white hover:bg-transparent px-10 py-1 rounded-full shadow-md"
        >
          Save Code
        </button>
      </div>
      <div className="grid lg:grid-cols-2 lg:px-5 bg-bgWhite mt-6 h-full lg:gap-4 gap-0 items-center">
        <div className=" h-screen lg:h-full px-5 lg:my-5 w-full">
          <AceEditor
            mode="html"
            theme={theme}
            onChange={setTempSource}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
            fontSize={14}
            value={tempSource}
            setOptions={{
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: true,
              showLineNumbers: true,
              tabSize: 4,
            }}
            style={{ height: "83.33%", width: "100%" }}
            className="rounded-md shadow-xl border-2 border-white"
          />
        </div>

        <div className="w-full h-screen bg-bgWhite lg:h-full px-5 lg:my-5">
          <iframe
            title="output"
            srcDoc={source}
            className="w-full h-5/6 rounded-md shadow-xl"
          />
        </div>
      </div>
      <div className="bg-bgBlue w-full text-center text-white font-light p-5">
        Made By Avinash Kumar
      </div>
    </div>
  );
};

export default Editor;
