import { createElement } from "./reactzxc"; 

test("createElement", () => {
  const a = createElement("div");
  const b = createElement("div");

  expect(createElement("div")).toStrictEqual({
    type: "div",
    props: { children: [] },
  });
  expect(createElement("div", null, a)).toStrictEqual({
    type: "div",
    props: { children: [a] },
  });
  expect(createElement("div", null, a, b)).toStrictEqual({
    type: "div",
    props: { children: [a, b] },
  });
});
