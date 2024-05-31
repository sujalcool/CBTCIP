const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');

    const taskList = document.getElementById('taskList');
    const completedTaskList = document.getElementById('completedTaskList');







    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const now = new Date();
        const taskDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
        const li = document.createElement('li');
        const details = document.createElement('span');
        details.textContent = taskDateTime;
        details.className = 'taskDetails';
        li.textContent = taskText;
        li.appendChild(details);
        li.className = 'taskItem';
        li.addEventListener('click', () => {


          if (!li.classList.contains('completedTask')) {
            li.classList.add('completedTask');
            const completionDateTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
            const completedDetails = document.createElement('span');
            completedDetails.textContent = `(Completed: ${completionDateTime})`;
            completedDetails.className = 'taskDetails';
            li.appendChild(completedDetails);
            completedTaskList.appendChild(li);
          } else {
            li.classList.remove('completedTask');
            const completionDetails = li.querySelector('.taskDetails');
            if (completionDetails) {
              li.removeChild(completionDetails);
            }
            taskList.appendChild(li);
          }
        });




        
        taskList.appendChild(li);
        taskInput.value = '';
      }
    });