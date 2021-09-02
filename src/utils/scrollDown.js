function scrollDown() {
    return window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
}
export default scrollDown;