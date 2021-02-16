topics = {
  topic1: {
    title: 'Title',
    details: 'Details',
    responses: [
      {
        id: 'response1',
        body: 'Response 1'
      },
      {
        id: 'response2',
        body: 'Response 2'
      },
      {
        id: 'response3',
        body: 'Response 3'
      },
      {
        id: 'response4',
        body: 'Response 4'
      }
    ]
  },
  response4: {
    title: '4',
    details: 'Details',
    responses: [
      {
        id: 'response1',
        body: 'Response 1'
      }
    ]
  }
}

var title = document.querySelector('#topic-title');
var details = document.querySelector('#topic-details');
var responseContainer = document.querySelector('#response-container');

var initialTopic = 'topic1';

function buildResponses(newTopic) {
  responseContainer.innerHTML = '';
  topics[newTopic].responses.forEach(response => {
    let cardBody = document.createElement('div');
    cardBody.innerHTML = response.body;
    cardBody.classList.add('card-body');
    cardBody.addEventListener('click', () => {
      changeTopic(response.id);
    });
    cardBody.addEventListener('tap', () => {
      changeTopic(response.id);
    });

    let card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('response');
    card.appendChild(cardBody);
    responseContainer.appendChild(card);
  });
};

function changeTopic(newTopic) {
  if (!topics[newTopic]) {
    console.log("Selected topic does not exist");
    return;
  }

  var topic = topics[newTopic];

  title.innerHTML = topic.title;
  details.innerHTML = topic.details;

  buildResponses(newTopic);
};

changeTopic(initialTopic);