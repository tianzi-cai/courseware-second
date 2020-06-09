const jokeItem = {
    props:["item"],
    template: `
    <div class="list-item">
        <div class="avatar-wrap"><img :src="item.header" alt=""></div>
        <div class="list-content">
            <div class="list-title">{{item.text}}</div>
            <div class="list-name">{{item.name}}</div>
            <div class="content-img">
                <img :src="item.images" alt="">
            </div>
            <div class="list-footer">
                <div class="time">{{item.passtime}}</div>
                <div class="agree-wrap">
                    <div class="agree-count">点赞 {{item.up}}</div>
                    <div class="disagree-count">不点赞 {{item.down}}</div>
                </div>
            </div>
        </div>
    </div>
    `
};


export { jokeItem };