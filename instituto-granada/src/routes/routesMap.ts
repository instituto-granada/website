import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Donations from "../pages/Donations";
import Volunteers from "../pages/Volunteers";
import Christmas from "../pages/Christmas";
import Vocation from "../pages/Vacation";
import Easter from "../pages/Easter";

export const routesMap = {
  home: { title: "Home", path: "/", component: Home },
  about: { title: "Sobre", path: "/sobre", component: About },
  projects: { title: "Projetos", path: "/projetos", component: Projects },
  donations: {
    title: "Doações",
    path: "/doacoes",
    component: Donations,
    showInNav: false,
  },
  christmas: {
    title: "Projeto especial - Natal",
    path: "/natal",
    component: Christmas,
    showInNav: false,
  },
  vacation: {
    title: "Projeto especial - Férias",
    path: "/ferias",
    component: Vocation,
    showInNav: false,
  },
  easter: {
    title: "Projeto especial - Páscoa",
    path: "/pascoa",
    component: Easter,
    showInNav: false,
  },
  volunteers: {
    title: "Voluntários",
    path: "/voluntarios",
    component: Volunteers,
  },
};
