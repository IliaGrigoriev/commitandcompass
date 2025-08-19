import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark }               from 'react-syntax-highlighter/dist/esm/styles/prism';

const PythonCodeWindow = ({ code }) => {
  return (
    <SyntaxHighlighter
      language    = "python"        // this tells it to use Python syntax
      style       = {materialDark}  // choose your favorite theme
      customStyle = {{
        borderRadius: "8px",
        maxHeight: "400px",
        overflowX: "auto",
        padding: "10px",
        fontSize: "13px"           // control font size!
      }}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default PythonCodeWindow;
