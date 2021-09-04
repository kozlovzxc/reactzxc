import { SafeAny } from "./types";

const TEXT_ELEMENT = "TEXT_ELEMENT";


export interface ReactzxcElement {
  type: string;
  props: {
    [key: string]: SafeAny;
    children: ReactzxcElement[];
  };
}

export type ReactzxcNode = string | number | ReactzxcElement;

export const createTextElement = (text: string | number): ReactzxcElement => {
  return {
    type: TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
};

export const createElement = (
  type: string,
  props?: SafeAny,
  ...children: ReactzxcNode[]
): ReactzxcElement => {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
};

export const render = (
  element: ReactzxcElement,
  container: HTMLElement | Text | null
): void => {
  const dom =
    element.type === TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);

  const isProperty = (key: string) => key !== "children";
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((key) => {
      // TODO: fix later
      // @ts-expect-error it's too hard to get the right keys right now
      dom[key] = element.props[key];
    });

  element.props.children.forEach((child) => {
    render(child, dom);
  });

  container?.appendChild(dom);
};

export default {
  createElement,
  render,
};
