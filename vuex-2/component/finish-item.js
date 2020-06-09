const finishItem = {
    computed:{
        finishList(){
            return this.$store.state.finishList
        }
    },
    template:`
    <ul class="list-wrap">
        <li class="list-item finish-item" v-for="(item, index) in finishList">
            <p>{{item}}</p>
            <div class="btn-wrap">
                <button @click="deleteFinish(index)">删除</button>
            </div>
        </li>
    </ul>
    `,
    methods:{
        deleteFinish(index){
            this.$store.commit("deleteFinish", index);
        }
    }
};

export {finishItem};