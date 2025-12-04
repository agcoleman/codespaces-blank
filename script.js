document.querySelector('#submit-btn').addEventListener('click', checkAnswers);

function checkAnswers() {
  let score = 0;
  const totalQuestions = 7;
  const resultsDiv = document.querySelector('#results');

  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;
  const q4 = document.querySelector('input[name="q4"]:checked')?.value;
  const q5 = document.querySelector('#q5').value.trim();
  const q6 = document.querySelector('#q6').value.trim().toLowerCase();
  const q7 = document.querySelector('#q7').value;

  if (q1 === 'a') score++;
  if (q2 === 'd') score++;
  if (q3 === 'true') score++;
  if (q4 === 'true') score++;
  if (q5 === '25') score++; 
  if (q6 === 'stark inc') score++; 
  if (q7 === '#ff3b3bff') score++; 

  
  
  
  
  resultsDiv.innerHTML = `Your score: ${score} out of ${totalQuestions}`;
}
