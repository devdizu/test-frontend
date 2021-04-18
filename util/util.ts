export const toCurrencyFormat = ({ amount, currency }): string =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: currency,
  }).format(amount).replace(/\D00$/, '');

export const getMostRepeatedCategory = (categories: string[]): string =>
  categories
    .sort(
      (a, b) =>
        categories.filter((v) => v === a).length -
        categories.filter((v) => v === b).length
    )
    .pop();
