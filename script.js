
document.querySelector('#submit-btn').addEventListener('click', checkAnswers);

function checkAnswers() {
  let score = 0;
  const totalQuestions = 5;
  const resultsDiv = document.querySelector('#results');

 
  const q1 = document.querySelector('input[name="q1"]:checked')?.value;
  const q2 = document.querySelector('input[name="q2"]:checked')?.value;
  const q3 = document.querySelector('input[name="q3"]:checked')?.value;
  const q4 = document.querySelector('input[name="q4"]:checked')?.value;
  const q6 = document.querySelector('#q6').value.trim().toLowerCase();



  if (q1 === 'a') score++;
  if (q2 === 'd') score++;
  if (q3 === 'true') score++;
  if (q4 === 'true') score++; 
  if (q6 === 'Stark') score++;


  resultsDiv.innerHTML = `Your score: ${score} out of ${totalQuestions}`;
}