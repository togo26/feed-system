export const fetchFeedList = async () => {
  const result = await fetch(
    "https://problem.comento.kr/api/list?page=1&ord=asc&limit=5&category%5B%5D=1",
    {
      headers: {
        Accept: "application/json"
      }
    }
  );
  return result.json();
};
