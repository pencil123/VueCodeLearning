export default {
    template: `
    <div>
    <h2>app info </h2>
    <h3>{{message}}</h3>
    <h4>{{name}}</h4>
    </div>`,
    data(){
        return {
            message: 'hello world',
            name: 'lyz'
        }
    }
}