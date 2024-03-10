import { sayHelloWorld } from "../src/index.ts";

describe("js文件测试", () => {
  it("测试index2.js", () => {
    expect(sayHelloWorld()).toEqual("Hello word");
  });
});
