if (document.getElementsByClassName('ytp-next-button ytp-button').length) {
  const say = words => speechSynthesis.speak(new SpeechSynthesisUtterance(words));
  
  const emojis = n => {
    const doubles = n => Math.floor(n / 2);
    const singles = n => n % 2;
    const faces = ['😋', '😛', '😜', '🤪', '😵', '🤯', '😎'];
    return '🍻'.repeat(doubles(n)) + '🍺'.repeat(singles(n)) + faces[Math.floor(n / 10)] + '🍺'.repeat(singles(60 - n)) + '🍻'.repeat(doubles(60 - n));
  };

  let shots = 0;
  console.log('Starting!');
  const timer = setInterval(() => {
    document.getElementsByClassName('ytp-next-button ytp-button')[0].click();
    console.clear();
    say('Drink!');
    say(`${++shots} shot${shots > 1 ? 's' : ''} down, ${60 - shots} to go!`);
    console.log(emojis(shots));
    
    if (shots === 60) {
      clearInterval(timer);
      alert('YOU POWERED THROUGH THE HOUR!');
    }
  }, 60 * 1000);
} else {
  console.log("Can't find a video.");
}