window.onload = function () {
  function get(url) {
    return new Promise(function (resolve, reject) {
      const xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true);

      xhttp.onload = function () {
        if (xhttp.status == 200) {
          resolve(JSON.parse(xhttp.response));
        } else {
          reject(xhttp.statusText);
        }
      };

      xhttp.onerror = function () {
        reject(xhttp.statusText);
      };

      xhttp.send();
    });
  }

  const promise = get("data/tweets.json");

  promise
    .then(function (tweets) {
      console.log(tweets);
      return get("data/friends.json");
    })
    .then(function (friends) {
      console.log(friends);
      return get("data/videos.json");
    })
    .then(function (videos) {
      console.log(videos);
    })
    .catch(function (error) {
      console.log(error);
    });
};
