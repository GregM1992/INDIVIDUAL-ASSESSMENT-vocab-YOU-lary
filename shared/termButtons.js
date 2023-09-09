import renderToDom from '../utils/renderToDom';

const buttonString = () => {
  const domString = `
  <button type="button" class="btn btn btn-outline-secondary" id="keyword-btn">Keywords</button>
  <button type="button" class="btn btn btn-outline-secondary"id="turn-structure-btn">Turn Structure</button>
  <button type="button" class="btn btn btn-outline-secondary" id="lingo-btn">Lingo</button>
  <button type="button" class="btn btn btn-outline-secondary" id=
  "card-type-btn">Card Type</button>
  `;
  renderToDom('#btn-container', domString);
};

export default buttonString;
