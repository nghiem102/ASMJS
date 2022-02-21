import instance from "./config";

export const getAll = () => {
    const url = `/categoryProducts`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/categoryProducts/${id}`;
    return instance.delete(url);
}
export const add = (category) => {
    const url = `/categoryProducts`;
    return instance.post(url, category);
}