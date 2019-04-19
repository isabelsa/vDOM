const render = vNode => {
  const DOM_el = document.createElement(vNode.tagName);

  return DOM_el;
};

export default render;
