document.getElementById('search-form')
  .addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-input').value.trim();
    if (!query) return;
    // Redirecciona a Google con la query
    const url = `https://google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = url;
  });
