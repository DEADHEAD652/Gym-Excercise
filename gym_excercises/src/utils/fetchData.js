export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': 'c475bef4e7mshae95e3e88e98c6ap168c0cjsnfd441f0b6a29',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
