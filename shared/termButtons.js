import renderToDom from '../utils/renderToDom';

const buttonString = () => {
  const domString = `
  <button type="button" class="btn btn-outline-light" id="keyword-btn">Keywords</button>
  <button type="button" class="btn btn-outline-light"id="turn-structure-btn">Turn Structure</button>
  <button type="button" class="btn btn-outline-light" id="lingo-btn">Lingo</button>
  <button type="button" class="btn btn-outline-light" id=
  "card-type-btn">Card Type</button>
  `;
  renderToDom('#btn-container', domString);
};

export default buttonString;
