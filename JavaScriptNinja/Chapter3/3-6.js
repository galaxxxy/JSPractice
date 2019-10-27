function performAction(ninja, action = 'skulking') {
  return `${ninja} ${action}`;
}

if (performAction('Fuma') === 'Fuma skulking') {
  console.log('The default value is used for Fuma');
}
if (performAction('Yoshi') === 'Yoshi skulking') {
  console.log('The default value is used for Yoshi');
}
if (performAction('Hattori') === 'Hattori skulking') {
  console.log('The default value is used for Hattori');
}
if (performAction('Yagyu', 'sneaking') === 'Yagyu sneaking') {
  console.log('Yagyu can do whatever he pleases, even sneak!');
}