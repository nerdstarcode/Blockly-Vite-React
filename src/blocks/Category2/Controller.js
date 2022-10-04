import BooleanComponent from './BooleanComponent'
const Category2 = {
    Blocks: [
        BooleanComponent,
    ],
    category: function(){
        let Contents = []
        this.Blocks.forEach(item => {
            return Contents.push(item.Content)
        })
        const Category = {
            "kind": "category",
            "name": "Category2",
            "colour": "210",
            "contents": Contents
        }
        return Category
    },
    import: function() {
        this.Blocks.forEach(item => item.Block)
        this.Blocks.forEach(item => item.Java)
    }
}
export default Category2