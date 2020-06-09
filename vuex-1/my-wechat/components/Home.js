import { Wechat } from "./Wechat.js";
import { Contact } from "./Contact.js";
import { Discover } from "./Discover.js";
import { My } from "./My.js";

var Home = {
    data(){
        return {
            pageIndex:0,
            componentName:"wechat",
            title:"微信"
        }
    },
    template:`
        <div class="page">
            <div class="top-bar" :class="{white:pageIndex==3}">
                <div class="top-bar-title">{{title}}</div>
                <div class="top-bar-btn-wrap">
                    <img class="top-btn" v-if="pageIndex<3" src="images/search.png">
                    <img class="top-btn" v-if="pageIndex<3" src="images/plus.jpg">
                    <img class="top-btn" v-if="pageIndex==3" src="images/camera.png">
                </div>
            </div>
            <component :is="componentName"></component>
            <div class="bottom-bar">
                <div class="bottom-button" :class="{active:pageIndex==0}" @click="pageChange(0)">
                    <img class="btn-img" v-if="pageIndex==0" src="images/4.png">
                    <img class="btn-img" v-else src="images/0.png">
                    <div>微信</div>
                </div>
                <div class="bottom-button" :class="{active:pageIndex==1}" @click="pageChange(1)">
                    <img class="btn-img" v-if="pageIndex==1" src="images/5.png">
                    <img class="btn-img" v-else src="images/1.png">
                    <div>通讯录</div>
                </div>
                <div class="bottom-button" :class="{active:pageIndex==2}" @click="pageChange(2)">
                    <img class="btn-img" v-if="pageIndex==2" src="images/6.png">
                    <img class="btn-img" v-else src="images/2.png">
                    <div>发现</div>
                </div>
                <div class="bottom-button" :class="{active:pageIndex==3}" @click="pageChange(3)">
                    <img class="btn-img" v-if="pageIndex==3" src="images/7.png">
                    <img class="btn-img" v-else src="images/3.png">
                    <div>我</div>
                </div>
            </div>
        </div>
    `,
    components:{
        "wechat":Wechat,
        "contact":Contact,
        "discover":Discover,
        "my":My
    },

    methods:{
        pageChange(index){
            this.pageIndex = index;
            if(index==0){
                this.componentName="wechat";
                this.title="微信";
            }
            if(index==1){
                this.componentName="contact";
                this.title="通讯录";
            }
            if(index==2){
                this.componentName="discover";
                this.title="发现";
            }
            if(index==3){
                this.componentName="my";
                this.title="";
            }
        }
    }
};

export {Home};