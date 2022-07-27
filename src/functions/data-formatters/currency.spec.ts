import { currency } from "./currency";

it("returns with thousands separator and decimals", () => {
  const returnedValue = currency("123456");

  expect(returnedValue).toEqual("123,456.00");
});

it("returns with only two decimals", () => {
  const returnedValue = currency("123456.12345");

  expect(returnedValue).toEqual("123,456.12");
});

it("returns with no decimals when noDecimals", () => {
  const returnedValue = currency("123456.12345", true);

  expect(returnedValue).toEqual("123,456");
});
