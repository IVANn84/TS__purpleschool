class Task {
     constructor(public id: number, public date: Date, public title: string) {}
}
class TaskList {
     private tasks: Task[] = [];

     add(task: Task) {
          this.tasks.push(task);
     }

     getAll(): Task[] {
          return this.tasks;
     }

     count(): number {
          return this.tasks.length;
     }

     priorityIterator(
          key: keyof Task,
          direction: 'incr' | 'decr'
     ): PriorityTaskIterator {
          return new PriorityTaskIterator(this, key, direction);
     }
}
interface IIterator<T> {
     current(): T | null;
     next(): T | null;
     prev(): T | null;
     index(): number;
}
class PriorityTaskIterator implements IIterator<Task> {
     private sortedTasks: Task[];
     private position: number = 0;
     private direction: 'incr' | 'decr';

     constructor(
          taskList: TaskList,
          key: keyof Task,
          direction: typeof this.direction
     ) {
          this.direction = direction;
          const sorted = [...taskList.getAll()].sort((a, b) => {
               if (a[key] > b[key]) return 1;
               if (a[key] < b[key]) return -1;
               return 0;
          });
          if (this.direction === 'incr') {
               this.sortedTasks = sorted;
          } else {
               this.sortedTasks = sorted.reverse();
          }
     }

     current(): Task | null {
          return this.sortedTasks[this.position] ?? null;
     }

     next(): Task | null {
          if (this.position < this.sortedTasks.length - 1) {
               this.position += 1;
               return this.current();
          }
          return null;
     }

     prev(): Task | null {
          if (this.position > 0) {
               this.position -= 1;
               return this.current();
          }
          return null;
     }

     index(): number {
          return this.position;
     }
}

// const threeTask = new Task(5, new Date('2025-04-14'), 'c');
// const firstTask = new Task(3, new Date('2025-04-12'), 'a');
// const fourTask = new Task(6, new Date('2025-04-15'), 'd');
// const secondTask = new Task(4, new Date('2025-04-13'), 'b');

// const tasks_ = new TaskList();

// tasks_.add(firstTask);
// tasks_.add(secondTask);
// tasks_.add(threeTask);
// tasks_.add(fourTask);
// console.log(tasks_);

// const priorityID = new PriorityTaskIterator(tasks_, 'id', 'incr');
// const priorityID = new PriorityTaskIterator(tasks_, 'id', 'decr');
// console.log(priorityID);
