import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  let domString = '';
  domString += `
    <div id="nav-bar"></div>
    <div id="main-container">
      <div id="add-button"></div>
      <div id="vocab-form"></div>
      <div id="vocab-container"></div>
    </div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
