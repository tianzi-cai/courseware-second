const todoItem = {
    computed:{
        todoList(){
            return this.$store.state.todoList
        }
    },
    template:`
    <div class="list-wrap">
        <div class="list-item" v-for="(item, index) in todoList">
            <p>{{item}}</p>
            <div class="btn-wrap">
                <button @click="finishItem(index)">完成</button>
                <button @click="deleteTodo(index)">删除</button>
            </div>
        </div>
    </div>
    `,
    methods:{
        finishItem(index){
            this.$store.commit("finishItem", index);
        },
        deleteTodo(index){
            this.$store.commit("deleteTodo", index);
        }
    }
};

export {todoItem};