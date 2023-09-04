import { createTerm, getVocab } from '../api/vocabCalls';
import { showVocab } from '../pages/vocab';

const formEvents = (user) => {
  document.querySelector('#form-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-term')) {
      const payload = {
        term: document.querySelector('#term-name').value,
        vocabType: document.querySelector('#vocab-type').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        timeStamp: Date(e)
      };
      createTerm(payload)
        .then(getVocab)
        .then(showVocab);
    }
  });
};

export default formEvents;
