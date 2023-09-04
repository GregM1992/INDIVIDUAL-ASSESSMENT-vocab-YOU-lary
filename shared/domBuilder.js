import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  let domString = '';
  domString += `
    <div id="nav-bar"></div>
    <div id="main-container">
      <div id="add-button"></div>
      <div id="form-container"></div>
      <div id="vocab-container"></div>
    </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
