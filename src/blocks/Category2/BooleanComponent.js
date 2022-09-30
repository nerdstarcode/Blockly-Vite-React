import Blockly from 'blockly';
const BooleanComponent = {
    Content:{
        "kind": "block",
        "type": "booleanComponent"
    },
    Block: Blockly.Blocks['booleanComponent'] = {
        init: function () {
            this.appendDummyInput()
                .appendField(new Blockly.FieldDropdown([["Yes", "Yes"], ["No", "No"]]), "option");
            this.setOutput(true, null);
            this.setColour(210);
            this.setTooltip("");
            this.setHelpUrl("");
        }
    },
    Java: Blockly.JavaScript['booleanComponent'] = function (block) {
        var dropdown_opt = block.getFieldValue('option');
        var code = dropdown_opt;
        return [code, ''];
    }
}
export default BooleanComponent
