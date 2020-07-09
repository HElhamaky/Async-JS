document.getElementById("button").addEventListener("click", loadUsers);

function loadUsers() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (xhr.status == 200) {
      const users = JSON.parse(xhr.response);
      let output = "";
      for (user of users) {
        if (user.id <= 20) {
          output += `
              <div class="user">
              <img src='${user.avatar_url}'>
              <ul>
              <li>ID: ${user.id}</li>
              <li>Login: ${user.login}</li>
              </ul>
              </div>
              `;
        }
      }

      document.getElementById("users").innerHTML = output;
    }
  };
  xhr.send();
}
