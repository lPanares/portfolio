document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.body.style.backgroundColor === 'rgb(30, 30, 30)';
  if (isDark) {
    document.body.style.backgroundColor = '#f0f4ff';
    document.querySelectorAll('.block').forEach(el => el.style.backgroundColor = '#6495ED');
    document.querySelectorAll('.divider').forEach(el => el.style.backgroundColor = '#000');
    document.querySelector('footer').style.backgroundColor = '#e6ecff';
  } else {
    document.body.style.backgroundColor = '#1e1e1e';
    document.querySelectorAll('.block').forEach(el => el.style.backgroundColor = '#2d3748');
    document.querySelectorAll('.divider').forEach(el => el.style.backgroundColor = '#fff');
    document.querySelector('footer').style.backgroundColor = '#1a202c';
    document.body.style.color = '#e0e0e0';
  }
});
