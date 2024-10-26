const techStack = document.getElementById('tech-stack');

techStack.addEventListener('mouseover', () => {
    techStack.style.animationPlayState = 'paused';
});

techStack.addEventListener('mouseout', () => {
    techStack.style.animationPlayState = 'running';
});

function scrollLeft(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: 300, behavior: 'smooth' });
}

    // Toggle mobile menu visibility
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Toggle dropdown visibility on mobile menu
    function toggleDropdown(id) {
        const dropdown = document.getElementById(id);
        dropdown.classList.toggle('hidden');
    }