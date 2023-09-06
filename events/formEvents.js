import { createTerm, getVocab, updateTerm } from '../api/vocabCalls';
import { showVocab } from '../pages/vocab';
import clearForm from '../utils/clearForm';

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('submit-term')) {
      const capturedDate = Date(e);
      const sqlDate = new Date(capturedDate).toISOString().slice(0, 19).replace('T', ' ');
      const payload = {
        term: document.querySelector('#term-name').value,
        vocabType: document.querySelector('#vocab-type').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        timeStamp: sqlDate
      };
      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
        clearForm();
      });
    }
    if (e.target.id.includes('update-term')) {
      const capturedDate = Date(e);
      const sqlDate = new Date(capturedDate).toISOString().slice(0, 19).replace('T', ' ');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        term: document.querySelector('#term-name').value,
        vocabType: document.querySelector('#vocab-type').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
        timeStamp: sqlDate,
        firebaseKey
      };

      updateTerm(payload).then(() => {
        getVocab(user.uid).then(showVocab);
      });
      clearForm();
    }
  });
};

export default formEvents;
