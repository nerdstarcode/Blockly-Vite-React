import Blockly from 'blockly';

const ComponentDefault = {
    Content:{
        "kind": "block",
        "type": "NameBlock"
    },

    Block:  Blockly.Blocks['NameBlock'] = {
        init: function () {
            //Block code
        }
    },

    Java: Blockly.JavaScript['NameBlock'] = function (block) {
        //Block stubs code
    }
}
export default ComponentDefault
