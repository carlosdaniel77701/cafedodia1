document.addEventListener("DOMContentLoaded", () => {
    // Função de busca
    const searchForm = document.querySelector('form input[type="text"]');
    const searchButton = document.querySelector('form button');

    searchButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evitar recarregamento da página
        const searchTerm = searchForm.value.trim();
        if (searchTerm) {
            alert(`Você buscou por: ${searchTerm}`);
        } else {
            alert("Por favor, digite algo para buscar.");
        }
    });

    // Função de ordenação
    const orderSelect = document.querySelectorAll('select.form-select');
    orderSelect.forEach((select) => {
        select.addEventListener("change", (event) => {
            const selectedOption = event.target.value;
            alert(`Produtos ordenados por: ${selectedOption}`);
        });
    });

    // Adicionar ao carrinho
    const addToCartButtons = document.querySelectorAll(".btn-success.mt-2");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Evitar redirecionamento
            alert("Produto adicionado ao carrinho!");
        });
    });

    // Favoritar ou desfavoritar produto (alterar ícone de coração)
    const favoriteIcons = document.querySelectorAll(".bi-suit-heart, .bi-suit-heart-fill");
    favoriteIcons.forEach((icon) => {
        icon.addEventListener("click", (event) => {
            event.preventDefault();
            const isFavorited = icon.classList.contains("bi-suit-heart-fill");
            if (isFavorited) {
                icon.classList.remove("bi-suit-heart-fill");
                icon.classList.add("bi-suit-heart");
                alert("Produto removido dos favoritos.");
            } else {
                icon.classList.remove("bi-suit-heart");
                icon.classList.add("bi-suit-heart-fill");
                alert("Produto adicionado aos favoritos.");
            }
        });
    });
});
