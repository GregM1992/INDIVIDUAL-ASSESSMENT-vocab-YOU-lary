import { getVocab, searchTerms } from '../api/vocabCalls';
import clearButtons from '../components/clearButtonString';
import addTermForm from '../components/form';
import { noVocab, showVocab } from '../pages/vocab';
import buttonString from '../shared/termButtons';
import { signOut } from '../utils/auth';
import clearDom from '../utils/clearDom';
import clearForm from '../utils/clearForm';

const navEvents = (user) => {
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('add-term-btn')) {
      clearButtons();
      addTermForm(user.uid);
    }
  });

  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('term-type')) {
      clearDom();
      clearForm();
      buttonString();
    }
  });
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('all-vocab')) {
      clearForm();
      clearButtons();
      getVocab(user.uid).then((terms) => showVocab(terms));
    }
  });
  document.querySelector('#nav-bar').addEventListener('click', (e) => {
    if (e.target.id.includes('google-log')) {
      signOut();
    }
  });
  document.querySelector('#search').addEventListener('keyup', (event) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();

    if (event.keyCode === 13) {
      searchTerms(searchValue, user.uid).then((search) => {
        if (search.length) {
          showVocab(search);
        } else {
          noVocab();
        }
      });

      document.querySelector('#search').value = '';
    }
  });
};

export default navEvents;
