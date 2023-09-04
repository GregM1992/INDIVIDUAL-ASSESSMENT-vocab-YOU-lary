import getVocab from '../api/vocabCalls';
import { showVocab } from '../pages/vocab';
import domBuilder from '../shared/domBuilder';
import navbar from '../shared/navbar';

const startApp = (user) => {
  domBuilder(user);
  navbar(user);
  getVocab(user.uid).then((terms) => showVocab(terms));
};

export default startApp;
