import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Id9E3yQTjhocrz_j5bpRNigY_liFtEkSiNUXGUwh4nI"
  }
});
