import React, { useState, useEffect } from 'react';
import './index.css';

import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';

import Category1Controller from '../../blocks/Category1/Controller'
import Category2Controller from '../../blocks/Category2/Controller'

export default function Workspace() {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');
  
  useEffect(() => {
    Category1Controller.import()
    Category2Controller.import()
  },[]);
  const initialXml =`
    <xml xmlns="http://www.w3.org/1999/xhtml">
      <block type="Component" x="70" y="30">
      </block>
    </xml>
  `;

  const toolboxCategories = {
    "kind": "categoryToolbox",
    "contents": [
      Category1Controller.category(),
      Category2Controller.category()
    ]
  };

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  return (
    <div className='workspace'>
      <BlocklyWorkspace
        toolboxConfiguration={toolboxCategories}
        initialXml={initialXml}
        className="fill-height"
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 3,
            colour: '#ccc',
            snap: true
          }
        }}
        onWorkspaceChange={workspaceDidChange}
      />
      <textarea
        id="code"
        style={{ height: '200px', width: '400px' }}
        value={javascriptCode}
        readOnly
      />
    </div>
  );
}