const url = 'http://universities.hipolabs.com/search?country=Indonesia';
    const list = document.getElementById('univ-list');
    const totalSpan = document.getElementById('total');

    fetch(url)
      .then(response => response.json())
      .then(data => {
        const sorted = data.sort((a, b) => a.name.localeCompare(b.name));
        sorted.forEach(u => {
          const li = document.createElement('li');
          li.textContent = u.name;
          list.appendChild(li);
        });
        totalSpan.textContent = sorted.length;
      })
      .catch(error => console.error('Error:', error));