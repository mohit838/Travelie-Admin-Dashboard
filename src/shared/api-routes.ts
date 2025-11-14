export const API_ROUTES = {
  LOGIN: "/login",
  LOGOUT: "/logout",
  REFRESH_TOKEN: "/refresh-token",
  GET_USERS: "/users",
  GET_USER_BY_ID: (id: string) => `/users/${id}`,
  UPDATE_USER_BY_ID: (id: string) => `/users/${id}/update`,
  DELETE_USER_BY_ID: (id: string) => `/users/${id}/delete`,
};
