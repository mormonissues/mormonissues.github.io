var title = document.querySelector('#topic-title');
var details = document.querySelector('#topic-details');
var responseContainer = document.querySelector('#response-container');
var progress = [];

var defaultTopic = 'bookOfMormon';

function buildResponses(newTopic) {
  responseContainer.innerHTML = '';
  topics[newTopic].responses.forEach(responseId => {
    let response = responses[responseId];
    let cardBody = document.createElement('div');
    cardBody.innerHTML = response.body;
    cardBody.classList.add('card-body');
    cardBody.addEventListener('click', () => {
      progress.push({
        type: 'response',
        value: responseId
      });
      changeTopic(response.rebuttal);
      updateUrlState(response.rebuttal);
    });
    cardBody.addEventListener('tap', () => {
      progress.push({
        type: 'response',
        value: responseId
      });
      changeTopic(response.rebuttal);
      updateUrlState(response.rebuttal);
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

function updatePage() {
  let topic = defaultTopic
  const topicFromUrl = (new URLSearchParams(window.location.search)).get('topic');
  if (topicFromUrl && topics[topicFromUrl]) {
    topic = topicFromUrl
  }

  changeTopic(topic);

  if (topicFromUrl === null && topic === defaultTopic) {
    // No change necessary
    return;
  }

  if (topic === topicFromUrl ) {
    // No change necessary
    return;
  }

  updateUrlState(topic);
}

function updateUrlState(newTopic) {
  progress.push({
    type: 'topic',
    value: newTopic
  });

  window.history.pushState(
    {topic: newTopic},
    newTopic,
    `?topic=${newTopic}`
  )
}

window.onhashchange = () => {
  updatePage();
}

updatePage();
