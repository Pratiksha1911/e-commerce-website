console.log("This is External java script");
/*
age=17;
if(age<18)
{
    window.alert("You are not allow to enter");
}
*/

function greet()
{
   window.alert("Hello, welcome to website");
}
//this keyword is used to represent current


user = {
    name:{fname:"virat",laname:"kohli"},
    email:"abc@gmail.com",
    contact:"9136559379",
    play:function(){
        console.log(this.name+" is playing cricket");
    },
    
    code:function(){
        console.log(this.name+" is coding javascript programs");
    }
};


 btn = document.getElementById('btn');
  btn.addEventListener('click',function(){
    head3 = document.getElementsByTagName('h3');
    head3[0].style.color = "red";

    para = document.getElementById('test');
    para.style.fontSize = "24px";
    para.style.fontWeight = "bold";

    blue = document.getElementsByClassName('blue');
    blue[0].innerHTML = "This is my new text";
    blue[1].style.display = "none";
 });

 content =document.getElementById('content');
 content.addEventListener('keyup',function(){
     var data=content.value;
     msg=document.getElementsByClassName('msg');
     msg[0].innerHTML=data;
     msg[0].style.color="red";
     
 });

 sh = document.getElementById('sh');
 sh.addEventListener('click',function(){
    pwd = document.getElementsByName('pwd')[0];
    var typ = pwd.getAttribute('type');
    if(typ == 'password')
    {
      pwd.setAttribute('type','text');
      sh.innerHTML = "Hide";
    }else{
      pwd.setAttribute('type','password');
      sh.innerHTML = "Show";
    }
 });

 //<button>New Button</button>
 demo=document.getElementById('demo');
 demo.addEventListener('click',function(){
   var nb =document.createElement('button');
   var tn =document.createTextNode('New Button');
   nb.appendChild(tn);
   document.body.appendChild(nb);
 });


 function Validate()
 {
   email=document.getElementsByName('email')[0];
   mobile=document.getElementsByName('mobile')[0];

   if( email.value == '' || mobile.value == '')
   {
     alart("please Fill All The Details");
     return false;
   }
 };

 logo =document.getElementsById('logo');
 logo.addEventListener('mouseover',function(){
   logo.setAttribute('src','img in s jpg.gi');
 });
 addEventListener('mouseout',function(){
   logo.setAttribute('src','img in s jpg.gi');
 });

