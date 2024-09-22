import axios from "axios";

export const fetchImages = async (text, page) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: "pa1Vxv1ejsRPcw5NcLxpwTevHjJZVYWhcukTAzvL_9w",
      query: text,
      page: page,
      per_page: 12,
    },
  });
  return response.data.results;
};