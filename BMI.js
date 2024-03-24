const h=document.querySelector('#height');
const w=document.querySelector('#weight');
const form = document.querySelector('form');
const space=document.querySelector('.bmivalue');
const container=document.querySelector('.bmi');
const Status=document.querySelector('.status');
const placeholder=document.querySelector('.placeholder');
const error=document.querySelector('.error');
const Button=document.querySelector('.bmiButton');
const ele = document.getElementsByName('gender');


function displayRadioValue() {
    

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            return ele[i].value;
        }
            
    }
    return null;
}

const word=(bmi)=>{
    let para=null;
    let html=null;
    if(bmi<18.5)
    {
        para='UNDERWEIGHT';
        html=`${para}`;
        Status.innerHTML=html;
        Status.setAttribute('style','color:rgb(255, 102, 0);text-align:center;font-weight:bolder;font-size:28px;margin-top:15px');
    }
    if(bmi>=18.5 && bmi<=24.9)
    {
        para='HEALTHY';
        html=`${para}`;
        Status.innerHTML=html;
        Status.setAttribute('style','color:#7CFC00;text-align:center;font-weight:bolder;font-size:28px;margin-top:15px');
    }
    if(bmi>=25 && bmi<=29.9)
    {
        para='OVERWEIGHT';
        html=`${para}`;
        Status.innerHTML=html;
        Status.setAttribute('style','color:rgb(255, 196, 0);;text-align:center;font-weight:bolder;font-size:28px;margin-top:15px');
    }
    if(bmi>=30)
    {
        para='OBESE';
        html=`${para}`;
        Status.innerHTML=html;
        Status.setAttribute('style','color:rgb(255, 102, 0);text-align:center;font-weight:bolder;font-size:28px;margin-top:15px');
    }
}

const bmi=(h,w)=>{
    const height=h/100;
    const weight=w;
    const bmiCal=weight/(height*height);

    return bmiCal.toFixed(2);
}
Button.addEventListener('click',e=>{
    e.preventDefault();
    if (form.checkValidity()) {
        error.classList.add('d-none');
        container.classList.remove('d-none');
        container.setAttribute('style','margin-top:20px');
        const BMIvalue=bmi(h.value,w.value);
        const html=`${BMIvalue}`;
        space.innerHTML=html;
        space.setAttribute('style','text-align:center;font-weight:bold;font-size:40px')
        word(BMIvalue);
        localStorage.setItem('height',h.value);
        localStorage.setItem('width',w.value);
        const gender=displayRadioValue();
        localStorage.setItem('gender',gender);
        form.reset();
       
        
        
    } else {
        // If the form is not valid, you can display an error message or take other actions
        // console.log('Fill out this field');
        container.classList.add('d-none');
        error.classList.remove('d-none');
        error.innerHTML=`<h6>*Please fill out all the fields</h6>`;
        error.setAttribute('style','margin-top:20px;color:yellow');
        
    }
    // console.log(h.value,w.value);
    
})
if(localStorage.getItem('height') && localStorage.getItem('width') && localStorage.getItem('gender'))
{
    h.value=localStorage.getItem('height');
    w.value=localStorage.getItem('width');
    const selectedGender = localStorage.getItem('gender');
    // Loop through radio buttons to find the one with the matching value
    for (i = 0; i < ele.length; i++) {
        if (ele[i].value==selectedGender){
            ele[i].checked=true;
        }
            
    }
    
}