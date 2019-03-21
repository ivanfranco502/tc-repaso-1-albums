export const fetchAll = () => 
  window
    .fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json());
