import"./assets/styles-BZpqh7XX.js";const e={email:"",message:""},t=localStorage.getItem("feedback-form-state");if(t){const a=JSON.parse(t);e.email=a.email?a.email.trim():"",e.message=a.message?a.message.trim():"",document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message}document.querySelector(".feedback-form").addEventListener("input",a=>{const{name:m,value:l}=a.target;e[m]=l.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});document.querySelector(".feedback-form").addEventListener("submit",a=>{a.preventDefault(),e.email===""||e.message===""?alert("Fill please all fields"):(console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",document.querySelector('input[name="email"]').value="",document.querySelector('textarea[name="message"]').value="")});
//# sourceMappingURL=2-form.js.map
