async function windowActions() {
  const request = await fetch('/api/dining');
  dining = await request.json();
  console.log(dining);
}
window.onload = windowActions;
console.log('window loaded');