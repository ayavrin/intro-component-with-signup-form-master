let formFIeld=document.forms[0];
let submitBtn=formFIeld[4];
let fsuccess='';
let lsuccess='';
let emsuccess='';
let pwdsuccess='';
console.log(submitBtn);
submitBtn.addEventListener('click',
    function(event){
        event.preventDefault();
        execute();       
    }
);


function execute(){
    if(fsuccess==='fail'){
        document.querySelector('#fnameErr').classList.remove('show');
        document.querySelector('#fnameErr').classList.add('error');
    }
    else if(lsuccess==='fail'){
        document.querySelector('#lnameErr').classList.remove('show');
        document.querySelector('#lnameErr').classList.add('error');
    }
     else if(emsuccess==='fail'){
        document.querySelector('#emailErr').classList.remove('show');
        document.querySelector('#emailErr').classList.add('error');
    }
    else if(pwdsuccess==='fail'){
        document.querySelector('#passwordErr').classList.remove('show');
        document.querySelector('#passwordErr').classList.add('error');
    }
    //for firstname
    forName();
    //for lastname
    forLname();
     //for email
    forEmail();
    //for password
    forPassword();
    if(fsuccess===lsuccess && lsuccess===emsuccess && emsuccess===pwdsuccess){
        success();
    }

}


function forName(){
    const fname=formFIeld[0].value;
    if(!fname){
        document.getElementById('fnameErr').innerText='Empty name';
        document.getElementById('fnameErr').classList.remove('error');
        document.getElementById('fnameErr').classList.add('show');
        fsuccess='fail';
        


    }else if(fname.includes('0','1','2','3','4','5','6','7','8','9')){
        document.getElementById('fnameErr').innerText='No digits allowed';
        document.getElementById('fnameErr').classList.remove('error');
        document.getElementById('fnameErr').classList.add('show');
        fsuccess='fail';


    }else if(fname.includes(' ')){
        document.getElementById('fnameErr').innerText='Only single string allowed';
        document.getElementById('fnameErr').classList.remove('error');
        document.getElementById('fnameErr').classList.add('show');
        fsuccess='fail';

    }
    else{
        fsuccess='success'
;    }

}


function forLname(){
    const lname=formFIeld[1].value;
    if(!lname){
        document.getElementById('lnameErr').innerText='Empty name';
        document.getElementById('lnameErr').classList.remove('error');
        document.getElementById('lnameErr').classList.add('show');
        lsuccess='fail';

    }else if(lname.includes('0','1','2','3','4','5','6','7','8','9')){
        document.getElementById('lnameErr').innerText='No digits allowed';
        document.getElementById('lnameErr').classList.remove('error');
        document.getElementById('lnameErr').classList.add('show');
        lsuccess='fail';

    }else if(lname.includes(' ')){
        document.getElementById('lnameErr').innerText='Only single string allowed';
        document.getElementById('lnameErr').classList.remove('error');
        document.getElementById('lnameErr').classList.add('show');
        lsuccess='fail';
    }
    else{
        lsuccess='success';
    }
}


function forEmail(){
    const email=formFIeld[2].value;
    const emailPattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email){
        document.getElementById('emailErr').innerText='Empty string';
        document.getElementById('emailErr').classList.remove('error');
        document.getElementById('emailErr').classList.add('show');
        emsuccess='fail';
        
     }
    else if(!email.match(emailPattern)){
        document.getElementById('emailErr').innerText='Invalid input';
        document.getElementById('emailErr').classList.remove('error');
        document.getElementById('emailErr').classList.add('show');
        emsuccess='fail';
        
    }
    else{
        emsuccess='success';
    }
    
}


function forPassword(){
    const password=formFIeld[3].value;
    const passwordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;
  
    if(!password){
        document.getElementById('passwordErr').innerText='Empty string';
        document.getElementById('passwordErr').classList.remove('error');
        document.getElementById('passwordErr').classList.add('show');
        pwdsuccess='fail';
    }
    else if(!password.match(passwordValid))
    {
        document.getElementById('passwordErr').innerText='Invalid input';
        document.getElementById('passwordErr').classList.remove('error');
        document.getElementById('passwordErr').classList.add('show');
        pwdsuccess='fail';
    }
    else{
        pwdsuccess='success'
    }
}

function success(){

        formFIeld.submit();
        formFIeld.reset();
}
    




