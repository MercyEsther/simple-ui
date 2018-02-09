import Button from "./components/button";
import Header from "./components/header";
import Toggle from "./components/toggle";
import Message from "./components/message";
import Footer from "./components/footer";
import Waiting from "./components/waiting";
import Panel from "./components/panel";

const install = (Vue, config = {}) => {
    Vue.component(Button.name, Button);
    Vue.component(Header.name, Header);
    Vue.component(Toggle.name, Toggle);
    Vue.component(Message.name, Message);
    Vue.component(Footer.name, Footer);
    Vue.component(Waiting.name, Waiting);
    Vue.component(Panel.name, Panel);
}
export default install;

export {
    Button,
    Header,
    Toggle,
    Message,
    Footer,
    Waiting,
    Panel
}