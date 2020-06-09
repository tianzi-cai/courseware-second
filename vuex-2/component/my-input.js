const myInput = {
    data(){
        return {
            message:""
        }
    },
    template:`
    <div class="top-bar">
        <input class="input" v-model.trim="message" type="text" placeholder="请输入待办事件">
        <button class="btn" v-on:click="add">增加</button>
    </div>
    `,

    methods:{
        add(){
            if(this.message){
                this.$store.commit("add", this.message);
            }

            this.message="";
        }
    }
};

export {myInput};