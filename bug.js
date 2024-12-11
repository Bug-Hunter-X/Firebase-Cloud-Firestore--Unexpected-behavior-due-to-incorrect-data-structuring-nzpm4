```javascript
//Incorrect data structure leading to unexpected behavior in Cloud Firestore.
const incorrectData = {
  name: 'Example',
  data: {
    nested: 'value'
  }
};

db.collection('myCollection').doc('myDoc').set(incorrectData)
  .then(() => {
    console.log('Data written successfully!');
  })
  .catch((error) => {
    console.error('Error writing document: ', error);
  });
```