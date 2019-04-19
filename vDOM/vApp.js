import createElement from "./createElement";
import render from "./render";
import mount from "./mount";

const createVApp = count =>
  createElement("div", {
    attrs: {
      id: "app",
      dataCount: count
    },
    children: [
      String(count),
      createElement("img", {
        attrs: {
          src: "https://media.giphy.com/media/10aCvxXbhM6WFW/giphy.gif"
        }
      })
    ]
  });

const count = 0;
const vApp = createVApp(count);
const DOM_app = render(vApp);

mount(DOM_app, document.getElementById("app"));

console.log(DOM_app);
