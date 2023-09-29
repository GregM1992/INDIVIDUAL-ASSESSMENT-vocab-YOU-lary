import { getSingleTerm } from '../api/vocabCalls';
import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const addTermForm = (uid, word = {}) => {
  clearDom();
  const domString = `
  <form id="${word.firebaseKey ? `update-term--${word.firebaseKey}` : 'submit-term'}" class="mb-4"  data-bs-theme="dark">
      <div class="form-group">
        <label for="title">Term</label>
        <input type="text" class="form-control" id="term-name" aria-describedby="termName" placeholder="Enter Term" value="${word.term || ''}" required>
      </div>
      <label for="vocab-type">Type</label>
      <select id="vocab-type" class="form-select" aria-label="Default select example">
          <option selected disabled>${word.vocabType || 'Select Vocabulary Type'}</option>
          <option value="Keyword">Keyword</option>
          <option value="Turn structure">Turn structure</option>
          <option value="Lingo">Lingo</option>
          <option value="Card type">Card type</option>
      </select>
      <div class="form-group">
        <label for="description">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${word.definition || ''}</textarea>
      </div>
      <button type="submit" class="btn btn-outline-secondary" id="submit-term">Submit Term
      </button>
  </form>`;
  renderToDom('#form-container', domString);
  getSingleTerm(`${word.firebaseKey || ''}`, uid);
};

export default addTermForm;
