import Home from "../pages";
import PageAdd from "../pages/PageAdd";
import PageEdit from "../pages/PageEdit";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/karyawan/add",
    component: PageAdd,
  },
  {
    path: "/karyawan/edit/:id",
    component: PageEdit,
  },
];

export default routes;
