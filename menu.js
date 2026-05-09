document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Hamburguer
    const hamburguer = document.getElementById('hamburguer');
    const menu = document.getElementById('menu');
    if (hamburguer) {
        hamburguer.addEventListener('click', () => menu.classList.toggle('ativa'));
    }

    // 2. BUSCAR PROJETOS DO BANCO (Vercel Postgres)
    const carregarProjetos = async () => {
        const container = document.querySelector('.projetos-container');
        try {
            const response = await fetch('/api/get-projects');
            const projetos = await response.json();

            container.innerHTML = projetos.map(p => `
                <div class="projeto-card">
                    <h3>${p.titulo}</h3>
                    <p>${p.descricao}</p>
                    <p><small>Tags: ${p.tecnologias}</small></p>
                    <img src="${p.imagem}" alt="Preview">
                    <a href="${p.link_github}" target="_blank">Ver projeto</a>
                </div>
            `).join('');
        } catch (err) {
            console.error("Erro ao carregar banco de dados:", err);
        }
    };

    carregarProjetos();

    // 3. Formulário de Contato
    const form = document.getElementById("formContato");
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        alert("Abidiel, conecte sua URL de API aqui para receber mensagens!");
    });
});