const data = fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((json) => {
  const sortedData = json.sort((val1, val2) => {
    return val1.name > val2.name ? 1 : -1;
  });
  sortedData.forEach((data) => {
    const array = [data.name, data.phone, data.website];
    const tr = document.createElement('tr');
    for(let i = 0; i < array.length; i++) {
      let td = document.createElement('td');
      td.textContent = array[i];
      tr.appendChild(td);
    }
    document.getElementById('data').appendChild(tr);
  })
});
