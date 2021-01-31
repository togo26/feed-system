const baseUrl = "https://problem.comento.kr/api";
const requestOptions = {
  headers: {
    Accept: "application/json"
  }
};

export const fetchFeedList = async options => {
  const { page, orderBy } = options;
  const result = await fetch(
    `${baseUrl}/list?page=${page ? page : 1}&ord=${orderBy || "asc"}
    &limit=10&category%5B%5D=1`,
    requestOptions
  );
  return result.json();
};

export const fetchAdBannerList = async options => {
  const { page } = options;
  const result = await fetch(
    `${baseUrl}/ads?page=${page ? page : 1}&limit=4`,
    requestOptions
  );
  return result.json();
};
