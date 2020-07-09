function getData(method, url) {
  return new Promise(function (resolve, reject) {
    const xhttp = new XMLHttpRequest();
    xhttp.open(method, url, true);

    xhttp.onload = function () {
      if (xhttp.status >= 200 && xhttp.status <= 300) {
        resolve(xhttp.response);
      } else {
        reject({
          status: xhttp.status,
          statusText: xhttp.statusText,
        });
      }
    };

    xhttp.onerror = function () {
      reject({
        status: xhttp.status,
        statusText: xhttp.statusText,
      });
    };

    xhttp.send();
  });
}

getData("GET", "https://jsonplaceholder.typicode.com/todos")
  .then(function (data) {
    const todos = JSON.parse(data);
    let output = "";
    for (let todo of todos) {
      output += `
        <li>
            <h3>${todo.title}</h3>
            <p>Completed : ${todo.completed} </p>
        </li>
        `;
    }
    document.getElementById("template").innerHTML = output;
  })
  .catch(function (err) {
    console.log(err);
  });
