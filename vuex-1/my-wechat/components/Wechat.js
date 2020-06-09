const Wechat = {
    data(){
        return {
            list:[
                {
                    img:"",
                    name:"小三",
                    content:"今晚如家走起",
                    time:"sss",
                    pingBi:true
                },
                {
                    img:"",
                    name:"小四",
                    content:"明早如家走起",
                    time:"sss",
                    pingBi:true
                },
            ]
        }
    },
    template:`
        <div class="home-content">
            <div class="chat-item" v-for="item in list" @click="itemClick(item)">{{item.name}}</div>
        </div>
    `,
    methods:{
        itemClick(item){
            this.$router.push({
                path:"/chat",
                query:{
                    name:item.name
                }
            });
        }
    }
};

export {Wechat};