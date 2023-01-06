import { useState } from "react";
import CodeEditor from "./CodeEditor";
import EditorTools from "./EditorTools";
import { StartCode } from "../../interfaces/problemSet";
import { languageOptions } from "./EditorVariables";

interface ICodeEditorContainerProps {
  // onSubmit?: (code: string, lang: string) => Promise<void>;
  // submitButtonTitle: string;
  readOnly?: boolean;
  startCode: StartCode;
}

const CodeEditorContainer: React.FC<ICodeEditorContainerProps> = ({
  readOnly = false,
  startCode,
}) => {
  const [fontSize, setFontSize] = useState(16);
  const [theme, setTheme] = useState("monokai");
  const [language, setLanguage] = useState("javascript");

  const [value, setValue] = useState(startCode.js);

  const updateLanguage = (value: string) => {
    setLanguage(value);
    setValue(startCode[languageOptions[value]]);
  };

  return (
    <>
      <EditorTools
        language={language}
        setLanguage={updateLanguage}
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />

      <CodeEditor
        fontSize={fontSize}
        theme={theme}
        language={language}
        value={value}
        onEditorValueChange={setValue}
        readOnly={readOnly}
      />
    </>
  );
};

export default CodeEditorContainer;
