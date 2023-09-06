import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const noVocab = () => {
  const domString = '<h1>No Vocabulary</h1>';
  renderToDom('#vocab-container', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button type="button" class="btn btn-outline-success" id="add-term-btn">Add A Term</button>';
  renderToDom('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    noVocab();
  } else {
    array.forEach((term) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${term.term}</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">${term.vocabType}</h6>
          <p class="card-text">${term.definition}</p>
          <button type="button" class="btn btn-outline-info" id="update-btn--${term.firebaseKey}"
          >Update</button>
          <button type="button" class="btn btn-outline-danger" id="delete-btn--${term.firebaseKey}">Delete</button>
        </div>
      </div>`;
    });
  }
  renderToDom('#vocab-container', domString);
};

export { noVocab, showVocab };
