import { sum } from "./sum";
import { join } from "lodash/array";
module?.hot?.accept();
function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = join(["Hello", "webpack!@", "not me"], " ");

  return element;
}

document.body.appendChild(component());
// console.log(message);
document.getElementById("tag").innerHTML = sum(2, 3);
