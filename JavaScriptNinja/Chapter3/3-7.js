function performAction(ninja, action = 'skulking', message = `${ninja} ${action}`) {
  return message;
}

if (performAction('Yoshi') === 'Yoshi skulking') {
  console.log('Yoshi is skulking');
}