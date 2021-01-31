const baseUrl = "https://problem.comento.kr/api";
const options = {
  headers: {
    Accept: "application/json"
  }
};

export const fetchFeedList = async () => {
  const result = await fetch(
    `${baseUrl}/list?page=1&ord=asc&limit=10&category%5B%5D=1`,
    options
  );
  return result.json();
};

export const fetchAdBannerList = async () => {
  const result = await fetch(`${baseUrl}/ads?page=1&limit=4`, options);
  return result.json();
};
