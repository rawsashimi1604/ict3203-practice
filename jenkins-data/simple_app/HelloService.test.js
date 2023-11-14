import { HelloService } from "./HelloService.js";

describe("HelloService", () => {
  it("should add two numbers correctly", () => {
    const helloService = new HelloService();
    const result = helloService.add(1, 2);
    expect(result).toBe(3);
  });
});
