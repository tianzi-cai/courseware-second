const finishItem = {
    props:["item", "index"],
    template:`
    <li class="list-item finish-item">
        <p>{{item}}</p>
        <div class="btn-wrap">
            <button @click="deleteFinish(index)">删除</button>
        </div>
    </li>
    `,
    methods:{
        deleteFinish(index){
            this.$emit("delete-finish", index);
        }
    }
};

export {finishItem};