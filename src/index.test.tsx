import Reactzxc from "./reactzxc";
import "./jsx";

const element = (
  <div id="foo">
    <a>bar</a>
  </div>
);

const render = () => {
  const container = document.getElementById("root");
  Reactzxc.render(element, container);
};

test("Index", async () => {
  const root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
  try {
    render();
  } catch (e) {
    console.error(e);
  }

  console.log(document.body.innerHTML);
});
