const techStack = document.getElementById('tech-stack');

techStack.addEventListener('mouseover', () => {
    techStack.style.animationPlayState = 'paused';
});

techStack.addEventListener('mouseout', () => {
    techStack.style.animationPlayState = 'running';
});

