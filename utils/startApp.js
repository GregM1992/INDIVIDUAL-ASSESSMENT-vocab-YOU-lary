import { getVocab } from '../api/vocabCalls';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import { showVocab } from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navbar from '../shared/navbar';

const startApp = (user) => {
  domBuilder(user);
  navbar(user);
  getVocab(user.uid).then((terms) => showVocab(terms));
  formEvents();
  domEvents();
};

export default startApp;
