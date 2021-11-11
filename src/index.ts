import { initRouter } from "./router";
import { buttonComponent } from "./components/custom-button";
import { moveComponent } from "./components/move";
import { timeCounterComponent } from "./components/time-counter";
import { resultScoreComponent } from "./components/result-score";
import { state } from "./state";
(function () {
  buttonComponent();
  timeCounterComponent();
  resultScoreComponent();
  moveComponent();
  state.init();
  const root = document.querySelector(".root");
  initRouter(root);
})();
