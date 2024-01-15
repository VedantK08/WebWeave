const host = import.meta.env.VITE_SERVER_URL;

export const createUser = `${host}/api/user/create`;
export const checkuser = `${host}/api/user/checkUser`;

//post routes

export const getallposts = `${host}/api/post/all`;
export const specificuserpost = `${host}/api/post/specific/:id`;
export const createpost = `${host}/api/post/createPost`;
