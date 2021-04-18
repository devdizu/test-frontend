const getItems = (query: string): any =>
  fetch(`${process.env.API_URL}/items?q=${query}`).then((response) => response.json());
const getItem = (id: string): any =>
  fetch(`${process.env.API_URL}/items/${id}`).then((response) => response.json());

export default {
  getItems,
  getItem,
};
