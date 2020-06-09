const currentOrder = {
    props:["list"],
    template:`
    <div class="tab-content">
        <div class="order-list-item">
            <div class="order-list-tr">商品名称</div>
            <div class="order-list-tr">数量</div>
            <div class="order-list-tr">价格</div>
            <div class="order-list-tr">操作</div>
        </div>
        <div class="order-list-item" v-for="(item, index) in list">
            <div class="order-list-tr">{{item.name}}</div>
            <div class="order-list-tr">{{item.count}}</div>
            <div class="order-list-tr">{{item.price}}</div>
            <div class="order-list-tr">
                <span @click="remove(index)">删除</span>
                <span @click="minus(index)">-</span>
                <span @click="add(item)">+</span>
            </div>
        </div>
    </div>
    `,

    methods:{
        remove(index){
            this.$emit("remove-food", index);
        },

        minus(index){
            this.$emit("minus-food", index);
        },

        add(item){
            this.$emit("add", {
                name:item.name,
                price:item.price
            });
        }
    }
};


export {currentOrder};