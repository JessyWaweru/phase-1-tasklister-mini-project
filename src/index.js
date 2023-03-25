document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form=document.querySelector('form')
  
  form.addEventListener('submit', (e)=>{
  e.preventDefault()
  addList(e.target.taskdescription.value)})
  
});
function addList(list){
  let p= document.createElement('p')
  p.textContent=list
  document.querySelector('#list').appendChild(p)
  console.log(p)
}
