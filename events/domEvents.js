import {
  deleteTerm, getSingleTerm, getTermIfCardType, getTermIfKeyword, getTermIfLingo, getTermIfTurnStructure, getVocab
} from '../api/vocabCalls';
import addTermForm from '../components/form';
import { noVocab, showVocab } from '../pages/vocab';

// import addTermForm from '../components/form';
const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteTerm(firebaseKey).then(() => {
          getVocab(user.uid).then((array) => {
            if (array.length) {
              showVocab(array);
            } else {
              noVocab();
            }
          });
        });
      }
    }
    if (e.target.id.includes('update-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleTerm(firebaseKey).then((termInfo) => addTermForm(user.uid, termInfo));
    }
    if (e.target.id.includes('keyword-btn')) {
      getTermIfKeyword().then(showVocab);
    }
    if (e.target.id.includes('turn-structure-btn')) {
      getTermIfTurnStructure().then(showVocab);
    }
    if (e.target.id.includes('lingo-btn')) {
      getTermIfLingo().then(showVocab);
    }
    if (e.target.id.includes('card-type-btn')) {
      getTermIfCardType().then(showVocab);
    }
  });
};

export default domEvents;
