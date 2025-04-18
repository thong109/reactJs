export const ADMIN_PATH = '/admin';

export const ROUTERS = {
  USER: {
    HOME: "/",
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    RESET_PASSWORD: "/reset-password",
    PROFILE: "/profile",
    CHANGE_PASSWORD: "/change-password",
    USERS: "/users",
    USER_ID: "/users/:id",
    USER_EDIT: "/users/:id/edit",
    USER_CREATE: "/users/create",
    SHOP: "/shop",
    SHOP_ID: "/shop/:id",
    BLOG: "/blog",
    BLOG_ID: "/blog/:id",
    CONTACT: "/contact",
    PRODUCT: "/product",
    PRODUCT_ID: "/product/:id",
    CART: "/cart",
    CHECKOUT: "/checkout",
    ORDER: "/order",
    ORDER_ID: "/order/:id",
    CATEGORY: "/category",
    CATEGORY_ID: "/category/:id",
    GET_ALL_CATEGORY: "/get-all-category",
    GET_ALL_CATEGORY_NAME: "/get-all-category-name",
    PRODUCT_BY_CATEGORY: "/product-by-category",
  },
  ADMIN: {
    HOME: `${ADMIN_PATH}`,
    LOGIN: `${ADMIN_PATH}/login`,
    LOGOUT: `${ADMIN_PATH}/logout`,
    DASHBOARD: `${ADMIN_PATH}/dashboard`,
    STATISTICS: `${ADMIN_PATH}/statistics`,
    PAYMENTS: `${ADMIN_PATH}/payments`,
    REGISTER: `${ADMIN_PATH}/register`,
    FORGOT_PASSWORD: `${ADMIN_PATH}/forgot-password`,
    RESET_PASSWORD: `${ADMIN_PATH}/reset-password`,
    PROFILE: `${ADMIN_PATH}/profile`,
    CHANGE_PASSWORD: `${ADMIN_PATH}/change-password`,
    USERS: `${ADMIN_PATH}/users`,
    USER_ID: `${ADMIN_PATH}/users/:id`,
    USER_EDIT: `${ADMIN_PATH}/users/:id/edit`,
    USER_CREATE: `${ADMIN_PATH}/users/create`,
    ORDERS: `${ADMIN_PATH}/orders`,
    ORDER_ID: `${ADMIN_PATH}/orders/:id`,
    PRODUCTS: `${ADMIN_PATH}/products`,
    PRODUCT_ID: `${ADMIN_PATH}/products/:id`,
    PRODUCT_EDIT: `${ADMIN_PATH}/products/:id/edit`,
    CATEGORIES: `${ADMIN_PATH}/categories`,
    CATEGORIES_CREATE: `${ADMIN_PATH}/categories/create`,
    CATEGORY_ID: `${ADMIN_PATH}/categories/:id`,
    CATEGORY_EDIT: `${ADMIN_PATH}/categories/:id/edit`,
    BLOGS: `${ADMIN_PATH}/blogs`,
    BLOG_ID: `${ADMIN_PATH}/blogs/:id`,
  },
  NOT_FOUND: "/not-found",
}
