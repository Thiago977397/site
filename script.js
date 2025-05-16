function verificarDatas() {
    const dataPai = document.getElementById("dataPai").value;
    const dataMae = document.getElementById("dataMae").value;
    const dataFilho = document.getElementById("dataFilho").value;

    const dataPaiCorreta = "1990-01-05";
    const dataMaeCorreta = "1990-05-04";
    const dataFilhoCorreta = "2013-01-04";

    if (
        dataPai === dataPaiCorreta ||
        dataMae === dataMaeCorreta ||
        dataFilho === dataFilhoCorreta
    ) {
        // Salva o acesso no localStorage
        localStorage.setItem("acessoLiberado", "true");

        mostrarConteudo();
    } else {
        alert("Acesso negado. Apenas pai, mãe ou filho podem entrar.");
    }
}

function mostrarConteudo() {
    document.getElementById("telaVerificacao").style.display = "none";
    document.getElementById("conteudoSite").style.display = "block";
}

// Verifica o acesso ao carregar a página
window.onload = function() {
    if (localStorage.getItem("acessoLiberado") === "true") {
        mostrarConteudo();
    }
};

// Modal para abrir imagem ampliada
function abrirModalImagem(src) {
    const modal = document.getElementById("modalImagem");
    const imgModal = document.getElementById("imgModal");

    imgModal.src = src;
    modal.style.display = "block";
}

// Fecha modal ao clicar no X
document.querySelector(".fechar").onclick = function() {
    document.getElementById("modalImagem").style.display = "none";
};

// Fecha modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById("modalImagem");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
