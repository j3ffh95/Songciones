const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e7f02a7dcmshaeeb02dfb13d407p1a5220jsn0e7ae2aa0a35",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
