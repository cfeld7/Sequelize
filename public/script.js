async function windowActions() {
  const request = await fetch('/api/meals');
  meals = await request.json();
}
window.onload = windowActions;
console.log('window loaded');