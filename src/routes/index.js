
import Home from "pages/Home";


// Define your routes with roles
export const routes = [
    { path: "/", component: <Home />, exact: true, roles: ["user", "admin"] }
];