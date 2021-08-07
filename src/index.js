document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //  const form = document.getElementById('create-task-form')

  //  form.addEventListener('submit', e => {
  //    e.preventDefault()
  //     const description = document.getElementById('new-task-description').value 
  //     description !== '' ? addNewDescription(description) : console.log("Empty") 
  //  })

  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', e => {
    e.preventDefault()
    const new_description = e.target.new_task_description.value
    console.log(document.getElementById('task_priority').selected)
     new_description !== ' ' ? addNewDescription(new_description) : " "
     form.reset()
  })
});

function addNewDescription(newDescription){
  const del = document.createElement('button')
  del.addEventListener('click', deleteDescription)
  del.textContent = 'x'
  let pTag = document.createElement('p')
  pTag.textContent = `${newDescription} `
  let li = document.createElement('li')
  pTag.appendChild(del)
  li.appendChild(pTag)
  document.getElementById('tasks').appendChild(li) 
}

function deleteDescription(e) {
 e.target.parentNode.parentNode.remove()
}