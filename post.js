document.getElementById("formContato").addEventListener("submit", function(e) {
  e.preventDefault();

  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    mensagem: document.getElementById("mensagem").value
  };

  fetch("SUA_URL_DO_APPS_SCRIPT", {
    method: "POST",
    body: JSON.stringify(dados)
  })
  .then(res => res.json())
  .then(data => console.log("Sucesso:", data))
  .catch(err => console.error("Erro:", err));
});