const correctAnswers = ['Elon Musk', 'Batman', 'Avengers', 'Daredevil']

const form = document.getElementById('quizes')
// const btn = document.getElementById('btnSubmit')
const output = document.getElementById('output')

quizes.addEventListener('submit', e=>{
    e.preventDefault()
    let score = 0;
    let percentage = 0;
    const userAnswers = [form.richest_man.value, form.super_hero.value, form.comic_movie.value, form.comic_show.value]

    userAnswers.forEach((ans, index)=>{
        if(ans === correctAnswers[index])
        {
            score+=1;
        }
        else{
            score;
        }
    })
    percentage = (score/4)*100;
    // output.innerText = `You've Got ${percentage.toFixed(2)}% On The QUIZ`
    scrollTo({top:0, behavior: "smooth"})
    let showResult = 0;
    const timer = setInterval(()=>{
        output.innerText = `You've Got ${showResult}% On The QUIZ`
        if(showResult === Math.trunc(percentage)){
            clearInterval(timer)
        }
        else{
            showResult++;
        }
    },20)
})