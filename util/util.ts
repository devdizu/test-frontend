export const toCurrencyFormat = ({ amount, currency }): string =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
  })
    .format(amount)
    .replace(/\D00$/, "");

export const getMostRepeatedCategory = (categories: string[]): string => {
  const sortedCategories: string[] = [...categories];
  return sortedCategories
    .sort(
      (a, b) =>
        sortedCategories.filter((v) => v === a).length -
        sortedCategories.filter((v) => v === b).length
    )
    .pop();
};

export const pad = (value: number | string, size: number) => {
  let stringNumber = value.toString();
  while (stringNumber.length < size) stringNumber = "0" + stringNumber;
  return stringNumber;
}
