import numbro from "numbro";

export const currency = (
  value: string | number,

  noDecimals: boolean = false
) => {
  const decimalPlaces = noDecimals ? 0 : 2;

  return numbro(value).format({
    thousandSeparated: true,

    mantissa: decimalPlaces,
  });
};
