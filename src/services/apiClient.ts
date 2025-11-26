import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d89dfa939fa3413fbb2e0739a0895cc2",
  },
});
