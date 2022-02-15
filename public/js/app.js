const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

const fetchWeather = async address => {
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  const response = await fetch(`/weather?address=${address}`);
  const responseData = await response.json();
  if (responseData.error) {
    return (messageOne.textContent = responseData.error);
  }
  messageOne.textContent = responseData.location;
  messageTwo.textContent = responseData.forecast;
};

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const search = document.querySelector('input').value;
  fetchWeather(search);
});

// fetchWeather();
