import {Home} from "../components/Home.js";
import { Chat } from "../components/Chat.js";
import { ContactItem } from "../components/ContactItem.js";

const routes = [
    {
        path:"/",
        component:Home
    },
    {
        path:"/chat",
        component:Chat
    },
    {
        path:"/contact",
        component:ContactItem
    }
];

const router = new VueRouter({
    routes:routes
});

export {router};