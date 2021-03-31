// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.like-glyph').forEach(item => {
    item.addEventListener('click',event => {

          if(item.innerText===EMPTY_HEART){
            mimicServerCall()
            .then(() => {
              item.classList.add('activated-heart')
              item.innerText=FULL_HEART
              
            })
            .catch((message) => {
              let errorModal=document.getElementById('modal')
              errorModal.classList.remove('hidden')
              let modalMessage=document.getElementById('modal-message')
              modalMessage.innerText=message
              setTimeout(function(){ 
                errorModal.classList.add("hidden")
              }, 3000)
              })
 
          } else {
            item.innerText=EMPTY_HEART
            item.classList.remove('activated-heart')
          }
    })
  })




})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
