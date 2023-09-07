import client from '../utils/client';

const endpoint = client.databaseURL;

const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateTerm = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteTerm = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getTermIfKeyword = (vocabType) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json/?orderBy="vocabType"&equalTo"${vocabType}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.vocabType === 'Keyword');
      resolve(filteredTerms);
    })
    .catch(reject);
});

const getTermIfTurnStructure = (vocabType) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json/?orderBy="vocabType"&equalTo"${vocabType}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.vocabType === 'Turn structure');
      resolve(filteredTerms);
    })
    .catch(reject);
});

const getTermIfLingo = (vocabType) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json/?orderBy="vocabType"&equalTo"${vocabType}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.vocabType === 'Lingo');
      resolve(filteredTerms);
    })
    .catch(reject);
});
const getTermIfCardType = (vocabType) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json/?orderBy="vocabType"&equalTo"${vocabType}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const filteredTerms = Object.values(data).filter((term) => term.vocabType === 'Card type');
      resolve(filteredTerms);
    })
    .catch(reject);
});
export {
  getVocab, getSingleTerm, createTerm, updateTerm, deleteTerm, getTermIfKeyword, getTermIfTurnStructure, getTermIfLingo, getTermIfCardType
};
