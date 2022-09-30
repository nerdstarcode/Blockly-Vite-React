import ComponentDefault from './ComponentDefault'

const DefaultController = {
    Blocks: [
        ComponentDefault,
    ],
    category: function(){
        let Contents = []
        this.Blocks.forEach(item => {
            return Contents.push(item.Content)
        })
        const Category = {
            "kind": "category",
            "name": "NameCategory",
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
export default DefaultController