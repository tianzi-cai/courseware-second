import {currentOrder} from "../components/current-order.js";
import {cancelOrder} from "../components/cancel-order.js";
import {guaOrder} from "../components/gua-order.js";
import {payOrder} from "../components/pay-order.js";

import {commonFood} from "../components/common-food.js";
import {mainMenu} from "../components/main-menu.js";

var app = new Vue({
    el:"#app",
    data:{
        orderIndex:0,
        orderName:"current-order",

        productIndex:0,
        productName:"common-food",

        orderList:[]
    },
    methods:{
        orderChange(index){
            this.orderIndex = index;

            if(index==0){
                this.orderName = "current-order";
            }
            if(index==1){
                this.orderName = "gua-order";
            }
            if(index==2){
                this.orderName = "pay-order";
            }
            if(index==3){
                this.orderName = "cancel-order";
            }

        },

        productChange(index){
            this.productIndex = index;

            if(index==0){
                this.productName = "common-food";
            }

            if(index==1){
                this.productName = "main-menu";
            }
        },

        add(food){
            let index = -1;
            for(let i=0; i<this.orderList.length; i++){
                if(food.name == this.orderList[i].name){
                    index = i;
                }
            }

            if(index>-1){
                this.orderList[index].count++;
            }else{
                this.orderList.push({
                    name:food.name,
                    count:1,
                    price:food.price
                });
            }
        },

        minusFood(index){
            if(this.orderList[index].count==1){
                this.orderList.splice(index,1);
            }else{
                this.orderList[index].count--;
            }
        },

        removeFood(index){
            this.orderList.splice(index,1);
        }
    },

    components:{
        "current-order":currentOrder,
        "gua-order":guaOrder,
        "cancel-order":cancelOrder,
        "pay-order":payOrder,

        "common-food":commonFood,
        "main-menu":mainMenu
    }
});