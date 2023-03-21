const key = '3185184a8c2cb87b5780386a504e7812'

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  trending: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  latest: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
}

export default requests;