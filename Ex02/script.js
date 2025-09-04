const url = "https://reqres.in/api/users";

const nuevoUsuario =
{
  first_name: "Malandro",
  last_name: "Sánchez",
  email: "malo.sanxe@gamail.so"
};

fetch(url,
{
  method: "POST",
  headers:
  {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1"
  },
  body: JSON.stringify(nuevoUsuario)
})

  .then(response =>
{
    if (!response.ok)
    {
      throw new Error("Aquí pasa algo... a ver, ¿quién sabe de redes?: " + response.statusText);
    }
    return response.json();
})

  .then(data =>
{
    console.log("Usuario creado con éxito (éxito = lágrimas + sudor):", data);
})

  .catch(error =>
{
    console.error("Esto no va, tendrás que subirle el salario al programador:", error);
});