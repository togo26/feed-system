const baseUrl = "https://problem.comento.kr/api";
const requestOptions = {
  headers: {
    Accept: "application/json"
  }
};

export const fetchFeedList = async options => {
  const { page, orderBy, categories, limit } = options;
  let selectedCategories = [];

  if (categories) {
    selectedCategories = categories.map(category => {
      if (category.isChecked) return `&category%5B%5D=${category.id}`;
      else return "";
    });
  }

  const result = await fetch(
    `${baseUrl}/list?page=${page || 1}
    &ord=${orderBy === "ascending" ? "asc" : "desc"}
    &limit=${limit || 10}${selectedCategories.join("")}`,
    requestOptions
  );

  return result.json();
};

export const fetchAdBannerList = async options => {
  const { page } = options;
  const result = await fetch(
    `${baseUrl}/ads?page=${page}&limit=4`,
    requestOptions
  );

  return result.json();
};

export const fetchCategories = async () => {
  const result = await fetch(`${baseUrl}/category`, requestOptions);
  return result.json();
};

export const fetchFeedDetail = async id => {
  const result = await fetch(`${baseUrl}/view?id=${id}`);
  return result.json();
};
