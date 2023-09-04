import addTermForm from '../components/form';

// import addTermForm from '../components/form';
const domEvents = () => {
  document.querySelector('#add-button').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term-btn')) {
      addTermForm();
    }
  });
};

export default domEvents;
