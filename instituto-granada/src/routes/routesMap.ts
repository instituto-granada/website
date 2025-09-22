import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Donations from "../pages/Donations";
import Volunteers from "../pages/Volunteers";

export const routesMap = {
  home: { title: "Home", path: "/", component: Home },
  about: { title: "Sobre", path: "/sobre", component: About },
  projects: { title: "Projetos", path: "/projetos", component: Projects },
  donations: { title: "Doações", path: "/doacoes", component: Donations },
  volunteers: {
    title: "Voluntários",
    path: "/voluntarios",
    component: Volunteers,
  },
};
