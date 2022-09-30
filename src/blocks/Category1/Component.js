import Blockly from 'blockly';
const Component = {
    Content:{
        "kind": "block",
        "type": "Component"
    },
    Block:  Blockly.Blocks['Component'] = {
        init: function () {
            this.appendDummyInput()
                    .appendField("\n\n\n\n This component\n\n\n\n ");
                   
            this.appendStatementInput("NAME")
                    .setCheck(null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl('');
        }
    },
    Java: Blockly.JavaScript['Component'] = function (block) {
        var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
        var code = 'CodeComponent display'
        return code;
    }
}
export default Component
