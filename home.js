const quotes = {
  happy: [
    "Happiness is not something ready-made. It comes from your own actions.",
    "Stay close to anything that makes you glad to be alive.",
    "Choose to be happy, not because life is perfect, but because you choose to see beyond the imperfections."
  ],
  sad: [
    "Sadness flies away on the wings of time.",
    "It's okay to not be okay. Just don't give up.",
    "Tears come from the heart and not from the brain."
  ],
    crying: [
    "Sometimes crying or laughing are the only options left, and laughing feels better right now.",
    "Don't be ashamed to weep; 'tis right to grieve.",
    "A wounded heart will heal in time, and when it does, the memory and love of our lost ones is sealed inside to comfort us."
  ],
    sleepy: [
    "I love sleep. My life has the tendency to fall apart when I’m awake, you know?",
    "There is no sunrise so beautiful that it is worth waking me up to see it.",
    "Nothing cures insomnia like the realization that it’s time to get up.",
  ],
    confusion: [
    "Anyone who isn't confused really doesn't understand the situation.",
    "Your intellect may be confused, but your emotions will never lie to you.",
    "I have never been lost, but I will admit to being confused for several weeks."
  ],
    anger: [
   "The truth will set you free, but first it will piss you off.",
  "Never go to bed mad. Stay up and fight.",
  "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy."
  ],
    disgusted: [
    "The greatest pleasures are only narrowly separated from disgust.",
  "The vine bears three kinds of grapes: the first of pleasure, the second of intoxication, the third of disgust.",
  "Nothing disgusted more than the thoughts that comes to make me feel worthless, but over the time I'm used to it and crave more."
  ],
    butterflies: [
   "Love all, trust a few, do wrong to none.",
  "The best thing to hold onto in life is each other.",
  "You're the cheese to my pizza, the Netflix to my binge."
  ],
    shocked: [
    "Those who are easily shocked should be shocked more often.",
  "Confuse them with your silence. Shock them with your actions.",
  "Shock is when language and emotion get overwritten by trauma's numbing code."
  ],
    exausted: [
    "I'm tired of being tired.",
  "The body benefits from movement, and the mind benefits from stillness.",
  "I don't stop when I'm tired, I only stop when I'm done."
  ]
};

let currentMood = null;

function selectMood(mood) {
  currentMood = mood;
  document.getElementById("mood-selection").style.display = "none";
  document.getElementById("quote-section").style.display = "block";
  document.getElementById("background").style.backgroundImage = backgrounds[mood];
  getQuote();
}

function getQuote() {
  const moodQuotes = quotes[currentMood];
  const randomIndex = Math.floor(Math.random() * moodQuotes.length);
  document.getElementById("quote-text").innerText = moodQuotes[randomIndex];
}

function resetMood() {
  document.getElementById("mood-selection").style.display = "block";
  document.getElementById("quote-section").style.display = "none";
  document.getElementById("background").style.backgroundImage = "none";
}

// Hide loading screen after 4 seconds
setTimeout(() => {
  document.querySelector('.loading-screen').style.display = 'none';

  // Optional: Redirect to homepage
  // window.location.href = "home.html";
}, 4000);