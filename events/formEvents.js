import { createTerm, getVocab, updateTerm } from '../api/vocabCalls';
import { showVocab } from '../pages/vocab';
import clearForm from '../utils/clearForm';

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
      createTerm(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateTerm(patchPayload).then(() => {
          getVocab(user.uid).then(showVocab);
        });
        clearForm();
      });
    }
  });
};

export default formEvents;
