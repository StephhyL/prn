import { timeFormat } from "./helper/timeFormat";

describe("format time", () => {
  // dut === time formatter
  // input === seconds (number)
  // output === hours || minutes || seconds (string)
  test("format seconds", () => {
    const input = 45;
    const output = timeFormat(input);
    expect(output).toEqual("45 seconds");
  });

  test("format minutes", () => {
    const input = 90;
    const output = timeFormat(input);
    expect(output).toEqual("1 minutes");
  });

  test("format hours", () => {
    const input = 4800;
    const output = timeFormat(input);
    expect(output).toEqual("1 hour");
  });
});
