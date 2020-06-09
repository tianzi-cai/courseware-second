const todoItem = {
    props:["item", "index"],
    template:`
    <div class="list-item" >
        <p>{{item}}</p>
        <div class="btn-wrap">
            <button @click="finishItem(index)">完成</button>
            <button @click="deleteTodo(index)">删除</button>
        </div>
    </div>
    `,
    methods:{
        finishItem(index){
            this.$emit("add-todo", index);
        },
        deleteTodo(index){
            this.$emit("delete-todo", index);
        }
    }
};

export {todoItem};