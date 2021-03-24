async function windowActions() {
  const request = await fetch('/api/dining');
  dining = await request.json();
}
window.onload = windowActions;
console.log('window loaded');