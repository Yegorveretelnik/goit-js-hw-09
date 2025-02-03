
const formData = {
    email: "",
    message: ""
  };
 
  const savedData = localStorage.getItem("feedback-form-state");
  
  if (savedData) {
    const parsedData = JSON.parse(savedData);
  
    formData.email = parsedData.email ? parsedData.email.trim() : "";
    formData.message = parsedData.message ? parsedData.message.trim() : "";
  
    document.querySelector('input[name="email"]').value = formData.email;
    document.querySelector('textarea[name="message"]').value = formData.message;
  }
 
  document.querySelector(".feedback-form").addEventListener("input", (event) => {
    const { name, value } = event.target;
  
    formData[name] = value.trim();
 
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  });

  document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    if (formData.email === "" || formData.message === "") {
      alert("Fill please all fields");
    } else {
      console.log(formData);
      localStorage.removeItem("feedback-form-state");
      
      formData.email = "";
      formData.message = "";
      
      document.querySelector('input[name="email"]').value = "";
      document.querySelector('textarea[name="message"]').value = "";
    }
  });