// import { getVocab } from '../api/vocabCalls';
// import { showVocab } from '../pages/vocab';
import buttonString from '../shared/termButtons';

const navEvents = () => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('term-type')) {
      buttonString();
    }
  });
  // document.querySelector('#nav-bar').addEventListener('click', (e) => {
  //   if (e.target.id.includes('all-vocab')) {
  //     getVocab(user.uid).then((terms) => showVocab(terms));
  //   }
  // });
};

export default navEvents;
