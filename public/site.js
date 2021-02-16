topics = {
  bookOfMormon: {
    title: 'The Book of mormon was plagiarized',
    details: '[Insert evidence here]',
    responses: [
      'churchIsGood'
    ]
  },
  churchIsHarmful: {
    title: 'The LDS Church is harmful',
    details: "LGBTQ+ issues, racism, sexism, personal shaming and guilt, modesty and self-worth issues, judgemental mindset, attitute that the second coming is near so earth doesn't matter",
    responses: [
      'churchIsCharitable',
      'churchTeachesGoodValues',
      'churchHasStrongCommunity'
    ]
  },
  churchIsNotCharitable: {
    title: 'Humanitarian contributions from the church',
    details: "Humanitarian contributions from the church only make up about 1% of all that they receive from tithing, while the rest goes to building expensive temples and growing their 100B ensign fund. If you gave 10% to a charity it would be much more effective.",
    responses: [
      'ensignFundIsSmart'
    ]
  },
  ensignFund: {
    title: "Ensign fund",
    details: "The church has $100B. If the church is saving for a rainy day, when is that day? Is the current pandemic not a good time to use that money to help people?",
  },
  churchTeachesHarmfulValues: {
    title: 'Church does not teach good values to our kids',
    details: 'The church definitely has some positives, such as their focus on music and education. But you can emphasize those things without the church as so many non-christian parents do. And the church also teaches lots of harmful values regarding self worth, self confidence, being judgemental, and others.',
    responses: []
  },
  community: {
    title: 'The church is not the only place where you can find a community',
    details: "The church is a great way to meet people and make friends. But those friendships often aren't very strong anyway because your only common interest is the church. Friendships made through sports leagues or other meetups would be much stronger because you would have more common interests. And if you do choose to continue going to church for the community, at least stop paying tithing or pay it to an actual charity instead.",
    responses: []
  }
}

responses = {
  churchIsGood: {
    body: "Even if the doctrine isn't true, the church still does a lot of good and is a positive force in the world",
    rebuttal: 'churchIsHarmful'
  },
  churchIsCharitable: {
    body: "The church donates X amount in humanitarian efforts every year",
    rebuttal: 'churchIsNotCharitable'
  },
  ensignFundIsSmart: {
    body: "The church is just being smart with their money and saving for a rainy day",
    rebuttal: "ensignFund"
  },
  churchTeachesGoodValues: {
    body: "The church teaches good values and is a good way to raise children",
    rebuttal: "churchTeachesHarmfulValues"
  },
  churchHasStrongCommunity: {
    body: "The church has a strong community",
    rebuttal: "community"
  }
}

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
    });
    cardBody.addEventListener('tap', () => {
      progress.push({
        type: 'response',
        value: responseId
      });
      changeTopic(response.rebuttal);
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

  progress.push({
    type: 'topic',
    value: newTopic
  });

  window.history.pushState(
    {topic: newTopic},
    newTopic,
    `?topic=${newTopic}`
  )
};

function updatePage() {
  let topic = defaultTopic
  const topicFromUrl = (new URLSearchParams(window.location.search)).get('topic');
  if (topicFromUrl && topics[topicFromUrl]) {
    topic = topicFromUrl
  }

  changeTopic(topic);
  // if (topicFromUrl)
  // if (topicFromUrl !== topic && )
}

// window.onhashchange = () => {
//   updatePage();
// }

updatePage();
