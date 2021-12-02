const firebaseConfig = {
  apiKey: 'AIzaSyA74RObYqEU9irmM3dkdCXj1A5PDR_RfEg',
  authDomain: 'meditateapp-69723.firebaseapp.com',
  databaseURL: 'https://meditateapp-69723-default-rtdb.firebaseio.com',
  projectId: 'meditateapp-69723',
  storageBucket: 'meditateapp-69723.appspot.com',
  messagingSenderId: '1038175316141',
  appId: '1:1038175316141:web:fb5d6ffbb1c8d414427e24',
  measurementId: 'G-LVEV36VSMK',
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', e => {
  e.preventDefault();
  const email = input.value;
  createMeditation(email);
});

export const createMeditation = async email => {
  db.collection('usersEmails')
    .add({
      email,
    })
    .then(() => {
      console.log('Document successfully written!');
      toastr.success(`Thank's! We have your email now!`);
    })
    .catch(error => {
      console.error('Error writing document: ', error);
    });
};
