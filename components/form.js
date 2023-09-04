import { getSingleTerm } from '../api/vocabCalls';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addTermForm = (uid, word = {}) => {
  clearDom();
  const domString = `
  <form id="${word.firebaseKey ? `update-term--${word.firebaseKey}` : 'submit-term'}" class="mb-4">
      <div class="form-group">
        <label for="title">Term</label>
        <input type="text" class="form-control" id="term-name" aria-describedby="termName" placeholder="Enter Term" value="${word.term || ''}" required>
      </div>
      <div class="form-group">
        <label for="title">Vocab Type</label>
        <input type="text" class="form-control" id="vocab-type" aria-describedby="vocabType" placeholder="Type" value="${word.vocabType || ''}" required>
      </div>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="description" style="height: 100px">${word.description || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-primary" id="submit-term">Submit Term
      </button>
  </form>`;
  renderToDom('#form-container', domString);
  getSingleTerm(`${word.firebaseKey || ''}`, uid);
};

export default addTermForm;
