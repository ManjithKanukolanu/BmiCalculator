const form = document.querySelector('form')
form.addEventListener('submit',function (e)
{
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if(height ===' ' || height<=0 || isNaN(height))
    {
        result.innerHTML= ` Enter Valid Height `
    }
    else if(weight ===' ' || weight<0 || isNaN(weight))
    {
        result.innerHTML= ` Enter Valid Weight `
    }
    else
    {
            const final = (weight / ((height * height) / 10000)).toFixed(2)
            if(final < 18.6)
            {
                result.innerHTML=`<span>Under Weight : ${final} </span>`
            }
            else if(final >= 18.6 && final <= 24.9)
            {
                result.innerHTML=`<span>Normal Range : ${final} </span>`
            }
            else if( final > 24.9)
            {
                result.innerHTML=`<span>Over Weight : ${final} </span>`
            }
    }
})