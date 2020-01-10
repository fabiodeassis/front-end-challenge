module.exports = (message) => {
  let result = null;

  if (!message) {
    return result;
  }

  switch (message.type) {
    case 'error':
      result = {
        id: 2,
        title: 'Oops!',
        text: 'Houve um problema com a requisição!',
        viewIn: 'alert' // toast, alert, modal, confirm
      };
      break;
  
    default:
      result = {
        id: 1,
        title: 'Sucesso!',
        text: 'A ação foi executada com Sucesso!',
        viewIn: 'toast' // toast, alert, modal, confirm
      };
      break;
  } 

  return Object.assign(result, message);
};
