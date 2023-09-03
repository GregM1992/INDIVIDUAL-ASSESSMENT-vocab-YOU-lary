import renderToDom from '../utils/renderToDom';

const domBuilder = () => {
  let domString = '';
  domString += `
    <div id="nav-bar"></div>
    <div id="vocab-container"></div>`;
  renderToDom('#app', domString);
};

export default domBuilder;
