import { initWelcome } from "./pages/welcome";
import { initPreGame } from "./pages/pregame";
import { initGame } from "./pages/game";
import { initResult } from "./pages/result";
const routes = [
  {
    path: /welcome/,
    component: initWelcome,
  },
  {
    path: /\/pregame/,
    component: initPreGame,
  },
  {
    path: /\/game/,
    component: initGame,
  },
  {
    path: /result/,
    component: initResult,
  },
];
export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }
  function handleRoute(route: string) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.component({ goTo: goTo });
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    handleRoute(location.pathname);
  }
  window.onpopstate = function (event) {
    handleRoute(location.pathname);
  };
}
