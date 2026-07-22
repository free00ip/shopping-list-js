const sendInput = document.querySelector('#input');
const taskContainer = document.querySelector('#items');

const taskList = document.createElement('ul');
taskContainer.append(taskList);

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {

        if (sendInput.value.trim()) {

            const inputTask = document.createElement('li');
            inputTask.textContent = sendInput.value;
            taskList.append(inputTask);

            inputTask.addEventListener('click', function() {
                inputTask.classList.toggle('done');
            })

            sendInput.value = '';

        }
    }
})