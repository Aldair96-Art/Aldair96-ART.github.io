const images = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');
    };
};
const imgOptions = {
    threshold: .5,
};
if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    images.forEach((img) => {
        imgObserver.observe(img);
    });
}
else {
    images.forEach((img) => {
        loadImages(img);
    });
}







