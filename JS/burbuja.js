function expandCard(card) {
    // Si la tarjeta ya está expandida, no hacer nada
    if (card.classList.contains('expanded')) {
        return;
    }

    // Cerrar cualquier tarjeta abierta
    closeAllCards();

    // Mostrar overlay
    document.getElementById('overlay').classList.add('active');

    // Expandir la tarjeta
    card.classList.add('expanded');

    // Mostrar contenido oculto si existe
    const hiddenContent = card.querySelectorAll('[style*="display: none"]');
    hiddenContent.forEach(el => {
        el.style.display = 'block';
    });
}

function closeCard(event, card) {
    event.stopPropagation(); // Evitar que se propague al click de la tarjeta

    // Ocultar overlay
    document.getElementById('overlay').classList.remove('active');

    // Contraer la tarjeta
    card.classList.remove('expanded');

    // Ocultar contenido extra
    const hiddenContent = card.querySelectorAll('p[style*="display: block"]');
    hiddenContent.forEach(el => {
        if (el.textContent.includes('contenido adicional')) {
            el.style.display = 'none';
        }
    });
}

function closeAllCards() {
    const expandedCards = document.querySelectorAll('.bubble-card.expanded');
    expandedCards.forEach(card => {
        card.classList.remove('expanded');

        // Ocultar contenido extra
        const hiddenContent = card.querySelectorAll('p[style*="display: block"]');
        hiddenContent.forEach(el => {
            if (el.textContent.includes('contenido adicional')) {
                el.style.display = 'none';
            }
        });
    });

    // Ocultar overlay
    document.getElementById('overlay').classList.remove('active');
}

// Cerrar con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeAllCards();
    }
});