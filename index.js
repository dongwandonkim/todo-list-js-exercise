const newTask = function (title, description) {
  const task = {
    title,
    description,
    complete: false,
    completeTask: function () {
      this.complete = true;
    },
    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
  };
  return task;
};

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// Print the state of a task to the console in a nice readable way

const task1 = newTask("learn", "things");
const task2 = newTask("learn2", "thing2s");
// const tasks = [task1, task2];

task1.logTaskState(task1);
task1.completeTask(task1);
task1.logTaskState(task1);

// console.log(tasks);
