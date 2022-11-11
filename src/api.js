const fetchUrl = "https://api.nytimes.com/svc/topstories/v2/";
const nytapi = "GFV6W6G623mAEAO8fSJhtAocBVlkb3hB";
// const nytapi = "RuG9N6lD1Xss81PdRbmhuiJHjuiPEt6R";

export function fetchStoriesFromLocalStorage(section, setStories) {
  setStories(JSON.parse(localStorage.getItem(section)));
}

// .then version
// export function fetchStoriesFromNYTimes(section, setStories) {
//   fetch(`${fetchUrl}${section}.json?api-key=${nytapi}`)
//     .then((response) => response.json())
//     .then((myJson) => {
//       localStorage.setItem(section, JSON.stringify(myJson.results));
//       setStories(JSON.parse(localStorage.getItem(section)));
//     })
//     .catch((error) => console.log(error));
// }

// Await version
export async function fetchStoriesFromNYTimes(section, setStories) {
  try {
    let response = await fetch(`${fetchUrl}${section}.json?api-key=${nytapi}`);
    // console.log("response::", response);
    let data = await response.json();
    // console.log("data::", data);
    localStorage.setItem(section, JSON.stringify(data.results));
    setStories(JSON.parse(localStorage.getItem(section)));
  } catch (error) {
    console.error(error);
  }
}
