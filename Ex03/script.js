fetch("https://reqres.in/api/users")

.then(response =>
  {
    if (!response.ok)
      {
        throw new Error("Error, arréglalo");
      }
      return response.json();
  })
  
  .then(data =>
    {
      const user = data.data[0];
      const userInfoDiv = document.getElementById("user-info");

      const userImage = document.createElement("img");
      userImage.src = user.avatar;
      userImage.alt = `George_Bluth ${user.first_name}`;

      const userName = document.createElement("h2");
      userName.innerText = `${user.first_name} ${user.last_name}`;

      const userEmail = document.createElement("p");
      userEmail.innerText = `Email: ${user.email}`;

      userCard.appendChild(userImage);
      userCard.appendChild(userName);
      userCard.appendChild(userEmail);
      userInfoDiv.appendChild(userCard);
    })
    
    .catch(error =>
      {
        console.error("Houston, tenemos un problema:", error);
        document.getElementById("user-info").innerHTML = "<p>No se pudo cargar la información del usuario.</p>";
      });