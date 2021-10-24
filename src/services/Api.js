import Http from "./Http";
export const getProducts = (config)=>{
    return Http.get('/products',config);
}
export const getCategories = (config) => {
    return Http.get('/categories',config);
}
export const getCategory = (id,config)=>{
    return Http.get(`/categories/${id}`,config)
};
export const getProductCategory = (id,config) => {
    return Http.get(`/categories/${id}/products`,config);
}
export const getProducDetails = (id,config) => {
    return Http.get(`/products/${id}`,config)
}
export const getCommentsProduct = (id,config) => {
    return Http.get(`/products/${id}/comments`,config);
}
export const createCommentProduct = (id,data,config) => {
    return Http.post(`products/${id}/comments`,data,config)
}