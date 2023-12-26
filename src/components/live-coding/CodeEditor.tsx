// AceKitchenSink.tsx
import React from 'react';
import AceEditor from 'react-ace';

// Import Ace Editor styles and modes
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-python';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow_night';

const CodeEditor: React.FC = () => {
  const [code, setCode] = React.useState<string>('console.log("Hello, World!");');

  const handleChange = (value: string) => {
    setCode(value);
  };

  return (
    <div className=''>
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={handleChange}
        value={code}
        fontSize={14}
        width="100%"
        height="400px"
        style={{borderRadius: '.8rem'}}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        editorProps={{ $blockScrolling: Infinity }}
      />
    </div>
  );
};

export default CodeEditor;
