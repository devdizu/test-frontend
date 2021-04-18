import { API_URL } from "../util/constants";

const getItems = (query: string): any =>
  fetch(`${API_URL}/items?q=${query}`).then((response) => response.json());
const getItem = (id: string): any =>
  fetch(`${API_URL}/items/${id}`).then((response) => response.json());

export default {
  getItems,
  getItem,
};
