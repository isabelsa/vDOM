const renderEl = ({ tagName, attrs, children }) => {
  const DOM_el = document.createElement(tagName);

  // sets Attrs
  for (const [k, v] of Object.entries(attrs)) {
    DOM_el.setAttribute(k, v);
  }

  // sets Children
  for (const child of children) {
    // for every Child you re-render them and append them
    const DOM_child = render(child);
    DOM_el.appendChild(DOM_child);
  }

  return DOM_el;
};

const render = vNode => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  return renderEl(vNode);
};

export default render;
