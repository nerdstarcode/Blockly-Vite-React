import Component from './Component'
const Category1 = {
    Blocks: [
        Component,
    ],
    category: function(){
        let Contents = []
        this.Blocks.forEach(item => {
            return Contents.push(item.Content)
        })
        const Category = {
            "kind": "category",
            "name": "Category1",
            "colour": "230",
            "contents": Contents
        }
        return Category
    },
    import: function() {
        this.Blocks.forEach(item => item.Block)
        this.Blocks.forEach(item => item.Java)
    }
}
export default Category1