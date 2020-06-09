const commonFood = {
    data(){
        return {
            drinks:[
                {
                    img:"images/coco.jpg",
                    name:"可口可乐",
                    price:7
                },
                {
                    img:"images/spirit.jpeg",
                    name:"雪碧",
                    price:7
                },
                {
                    img:"images/fenda.jpg",
                    name:"芬达",
                    price:7
                }
            ],
            mainFood:[
                {
                    img:"images/hamburger.jpeg",
                    name:"腾香鸡腿堡",
                    price:18
                },
                {
                    img:"images/aoerliangham.jpg",
                    name:"奥尔良鸡腿堡",
                    price:15
                },
                {
                    img:"images/jituiham.jpeg",
                    name:"鸡腿堡",
                    price:10
                }
            ],
            littleFood:[
                {
                    img:"images/shutiaoL.jpg",
                    name:"大薯",
                    price:16
                },
                {
                    img:"images/shutiaoM.jpg",
                    name:"中薯",
                    price:10
                },
                {
                    img:"images/shutiaoS.jpeg",
                    name:"小薯",
                    price:6
                }
            ]
        }
    },
    template:`
    <div class="food-container">
        <div class="food-col">
            <div class="food-title">饮料</div>
            <div class="food-wrap">
                <div class="food-item" v-for="item in drinks">
                    <img class="food-img" :src="item.img" />
                    <div class="food-name">{{item.name}} {{item.price}} （元）</div>
                    <button class="add-btn" @click="addFood(item)">点击添加</button>
                </div>
            </div>
        </div>
        <div class="food-col">
            <div class="food-title">主食</div>
            <div class="food-wrap">
                <div class="food-item" v-for="item in mainFood">
                    <img class="food-img" :src="item.img" />
                    <div class="food-name">{{item.name}} {{item.price}} （元）</div>
                    <button class="add-btn" @click="addFood(item)">点击添加</button>
                </div>
            </div>
        </div>
        <div class="food-col">
            <div class="food-title">小食</div>
            <div class="food-wrap">
                <div class="food-item" v-for="item in littleFood">
                    <img class="food-img" :src="item.img" />
                    <div class="food-name">{{item.name}} {{item.price}} （元）</div>
                    <button class="add-btn" @click="addFood(item)">点击添加</button>
                </div>
            </div>
        </div>
    </div>
    `,

    methods:{
        addFood(item){
            this.$emit("add",{
                name:item.name,
                price:item.price
            });
        }
    }
};


export {commonFood};