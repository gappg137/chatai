export const getImageUrl = (path) => {
    return new URL(`/Images/${path}`, import.meta.url).href;
};