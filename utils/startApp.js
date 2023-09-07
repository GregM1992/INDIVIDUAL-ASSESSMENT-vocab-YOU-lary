import { getVocab } from '../api/vocabCalls';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navEvents from '../events/navEvents';
import { showVocab } from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navbar from '../shared/navbar';

const startApp = (user) => {
  domBuilder(user);
  navbar(user);
  getVocab(user.uid).then((terms) => showVocab(terms));
  formEvents(user);
  navEvents(user);
  domEvents(user);
};

export default startApp;
