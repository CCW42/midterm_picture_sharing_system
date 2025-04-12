function filterImages(category) {
    const allImages = document.querySelectorAll('.gallery img');

    allImages.forEach(img => {
        if (category === 'all') {
            img.style.display = 'block';
        } else {
            if (img.classList.contains(category)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        }
    });
}
