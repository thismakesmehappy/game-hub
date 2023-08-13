import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "552ed4f6df0e48c69573c4a8a4215639",
  },
});
