import React, { useState, useLayoutEffect } from 'react';
import './index.css';

import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';

import Controller from '../../blocks/Controller'

export default function Workspace() {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');
  const [category, setCategory] = useState([]);
  const initialXml =`
    <xml xmlns="http://www.w3.org/1999/xhtml">
    <block type="start" x="70" y="30">
    </block>
    </xml>
  `;

  useLayoutEffect(() => {
    let Category = []
    Controller.forEach(CategoryItem => {
    CategoryItem.import()
    Category.push(CategoryItem.category())
    })
    setCategory(Category)
  },[]);

  const toolboxCategories = {
    "kind": "categoryToolbox",
    "contents": category
  };

  let alertVar = 0
  function workspaceDidChange(workspace) {
    try{
      const code = Blockly.JavaScript.workspaceToCode(workspace);
      setJavascriptCode(code);
    }catch(e){
      if(alertVar === 0) {
          alertVar += 1
          alert("Esses blocos não encaixam!")
          console.log("Esses blocos não encaixam!")
      }
    }
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