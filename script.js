// Edit these four entries to change the reflections.
const moods = {
  calm: { weather: 'Soft clouds', message: 'Let your thoughts drift like clouds. There’s no hurry to be anywhere else.', color: '#bdced6' },
  happy: { weather: 'A little sunshine', message: 'Some days, the light comes from within. Let yourself enjoy its warmth.', color: '#f5dfa9' },
  tired: { weather: 'A quiet fog', message: 'You don’t have to see the whole way ahead. It’s okay to move slowly today.', color: '#bdc7c4' },
  overwhelmed: { weather: 'Passing rain', message: 'When everything feels like rain, take it one drop at a time. You don’t have to hold it all.', color: '#405b6e' }
};
const buttons = document.querySelectorAll('button[data-mood]');
const reflection = document.getElementById('reflection');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.dataset.mood;
    if (document.body.dataset.mood === mood) return;
    document.body.dataset.mood = mood;
    buttons.forEach(choice => choice.setAttribute('aria-pressed', String(choice === button)));
    document.getElementById('weather-name').textContent = moods[mood].weather;
    document.getElementById('message').textContent = moods[mood].message;
    document.querySelector('meta[name="theme-color"]').content = moods[mood].color;
    // Restart the reflection's entrance, including when choices change quickly.
    reflection.classList.remove('arrive');
    void reflection.offsetWidth;
    reflection.classList.add('arrive');
  });
});
// A small, fixed set of rain streaks keeps the effect lightweight.
const rain = document.getElementById('rain');
for (let i = 0; i < 48; i++) {
  const drop = document.createElement('span');
  drop.className = 'drop';
  drop.style.left = `${(i * 37) % 115}%`;
  drop.style.animationDuration = `${.85 + (i % 7) * .12}s`;
  drop.style.animationDelay = `${-(i % 13) * .19}s`;
  drop.style.setProperty('--rest', `${(i * 23) % 100}%`);
  rain.appendChild(drop);
}
