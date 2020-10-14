import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import './styles.css';

const Code = ({code, type = "javascript", children}) => {
  if (children) {
    children = children.split("\n");

    // Remove any proceeding or trailing new lines
    if (children[0].trim() === "") children = children.splice(1, children.length);
    if (children[children.length - 1].trim() === "") children = children.splice(0, children.length - 1);
    
    // Remove any excess space at the beginning
    const initialSpaceCount = children[0].search(/\S/);
    children = children.map(line => line.substr(initialSpaceCount));
  }

  return (
    <CodeMirror
      value={code || children}
      options={{
        mode: type,
        theme: 'material',
        lineNumbers: true,
        readOnly: true,
        viewportMargin: Infinity,
        smartIndent: true,
        tabSize: 2,
        lineWrapping: true
      }}
    />
  );
}
 
export default Code;