const input = document.querySelector('input');
const btn = document.querySelector('#addBtn');
const list = document.querySelector('ul');

btn.addEventListener('click', function(){
    let task = input.value;
        input.value = '';

    const newLi = document.createElement('li');
    const deleteBtn = document.createElement('button');
    const checkBox = document.createElement('button');

    newLi.innerHTML = task;
    deleteBtn.textContent = '❌';
    checkBox.textContent = '⬜';
    newLi.appendChild(checkBox)
    newLi.appendChild(deleteBtn);
    list.appendChild(newLi);

    deleteBtn.addEventListener('click', function(){
        list.removeChild(newLi);   
    })
    input.focus();
})