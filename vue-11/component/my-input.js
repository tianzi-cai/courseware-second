const myInput = {
    props:["value"],
    template:`
    <div class="top-bar">
        <input class="input" :value="value" @input="$emit('input', $event.target.value)" type="text" placeholder="请输入待办事件">
        <button class="btn" v-on:click="add">增加</button>
    </div>
    `,

    methods:{
        add(){
            this.$emit("my-add");
        }
    }
};

export {myInput};