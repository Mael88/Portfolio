// #MIXED MESSAGES PORTFOLIO PROJECT 
// ##Theme: stoic inspirational messages

// declaring arrays with different messages
const salutation = ['Good Morning!', 'Howdy!', 'Good day!', 'Hello!'];
const quoteOfTheDay = ['Marcus Aurelius said: "Waste no more time arguing what a good man should be. Be One.”', 'Marcus Aurelius said: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own."', 'Seneca said: "“We are more often frightened than hurt; and we suffer more in imagination than in reality.”', '“No person has the power to have everything they want, but it is in their power not to want what they don’t have, and to cheerfully put to good use what they do have.”'];
const encouragement = ['Today is gonna be a great day!', 'Meditate on the quote and try to apply it today!', 'Go and be the best stoic that you can be today!', 'Take the time to meditate throughout the day!'];

//Function to pick randomly each array and return the entire message
const messageGenerator = () => {
    const i = Math.floor(Math.random() * 4);
    return salutation[i] + ' Let\'s start the day with an inspirational stoic quote: ' + quoteOfTheDay[i] + ' ' + encouragement[i];
}

console.log(messageGenerator());