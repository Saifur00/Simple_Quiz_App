const firstAnswer = document.getElementsByName('richest_man')
const secondAnswer = document.getElementsByName('super_hero')
const output = document.getElementById('output')

const btn = document.getElementById('btnSubmit')



btn.addEventListener('click', e=>{
    e.preventDefault()
    let sum = 0;
    let percentage = 0;
    firstAnswer.forEach(ans => {
        if(ans.checked){
            if(ans.value === 'Elon Musk')
            {
                sum +=1;
            }
            else{
                sum;
            }
        }
    })
    secondAnswer.forEach(ans => {
        if(ans.checked){
            if(ans.value === 'Batman')
            {
                sum +=1;
            }
            else{
                sum;
            }
        }
    })
    percentage = (sum/2)*100;
    output.innerText = `You've Got ${percentage}% On The QUIZ`
})