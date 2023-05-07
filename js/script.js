window.addEventListener("DOMContentLoaded", () => {    
  const vocals = {
      "a": "ai",
      "e": "enter",
      "i": "imes",
      "o": "ober",
      "u": "ufat"
  }
  
  input.addEventListener("input", function() {
      this.value = this.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if(this.value === ""){
          worked_text.innerText = "";
          disappear_container.style.display = "flex";
          encrypt_container.style.display = "none"
          copy_container.style.display = "none"
      }
  });
  
  function Encrypt(){
      let text_array = input.value.split("");
      text_array.forEach((element, index) => {
          if(vocals[element]){
              text_array[index] = vocals[element];
          }
      });
      let encrypt_string = text_array.join("");
      worked_text.innerText = encrypt_string;
      if(encrypt_string){
          toComplete();
      }
  }
  
  function Decrypt(){
      let content_array = input.value.split(" ");
      for(let j = 0; j < content_array.length; j++){
          content_array[j] = content_array[j].replace(/ai/g, "a")
          .replace(/enter/g, "e")
          .replace(/imes/g, "i")
          .replace(/ober/g, "o")
          .replace(/ufat/g, "u")
      }
      content_string = content_array.join(" ")
      worked_text.innerText = content_string;
      if(content_string){
          toComplete()
      }
  }
  
  function toComplete(){
      disappear_container.style.display = "none"
      encrypt_container.style.display = "block"
      aside_container.style.justifyContent = "space-evenly"
      copy_container.style.display = "flex"
  }
  
  function copyText(){
      navigator.clipboard.writeText(worked_text.textContent);
      swal.fire("Texto copiado correctamente en el portapapeles!");
  }
  
  btn_encrypt.onclick = Encrypt;
  btn_decrypt.onclick = Decrypt;
  btn_copy.onclick = copyText;
});