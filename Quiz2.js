const correctAnswers = ['Elon Musk', 'Batman', 'Avengers']

const form = document.getElementById('quizes')
// const btn = document.getElementById('btnSubmit')
const output = document.getElementById('output')

quizes.addEventListener('submit', e=>{
    e.preventDefault()
    let score = 0;
    let percentage = 0;
    const userAnswers = [form.richest_man.value, form.super_hero.value, form.comic_movie.value]

    userAnswers.forEach((ans, index)=>{
        if(ans === correctAnswers[index])
        {
            score+=1;
        }
        else{
            score;
        }
    })
    percentage = (score/3)*100;
    output.innerText = `You've Got ${percentage}% On The QUIZ`
})