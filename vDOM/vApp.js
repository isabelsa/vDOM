import createElement from "./createElement";
import render from "./render";

const vApp = createElement("div", {
  attrs: {
    id: "app"
  },
  children: []
});

const DOM_app = render(vApp);

console.log(DOM_app);
