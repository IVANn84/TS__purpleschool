// Элемент коллекции (Task)
class Task {
     constructor(public id: number, public date: Date, public title: string) {}
}

// Коллекция задач (TaskList)
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

     // Получаем итератор по приоритету
     // priorityIterator(): PriorityTaskIterator {
     //      return new PriorityTaskIterator(this);
     // }
}

const firstTask = new Task(3, new Date('2025-04-12'), 'first task');
const secondTask = new Task(4, new Date('2025-04-13'), 'second task');
const threeTask = new Task(5, new Date('2025-04-14'), 'three task');
const fourTask = new Task(6, new Date('2025-04-15'), 'four task');

const tasks_ = new TaskList();

tasks_.add(firstTask);
tasks_.add(secondTask);
tasks_.add(threeTask);
tasks_.add(fourTask);
console.log(tasks_);

// Интерфейс итератора
interface IIterator<T> {
     current(): T | null;
     next(): T | null;
     prev(): T | null;
     index(): number;
}

// // Итератор по приоритету
class PriorityTaskIterator implements IIterator<Task> {
     private sortedTasks: Task[];
     private position: number = 0;

     constructor(taskList: TaskList) {
          // Сортируем задачи по приоритету
          this.sortedTasks = [...taskList.getAll()].sort(
               (a, b) => b.priority - a.priority
          );
     }

     current(): Task | null {
          return this.sortedTasks[this.position] ?? null;
     }

     next(): Task | null {
          if (this.position < this.sortedTasks.length - 1) {
               this.position++;
               return this.current();
          }
          return null;
     }

     prev(): Task | null {
          if (this.position > 0) {
               this.position--;
               return this.current();
          }
          return null;
     }

     index(): number {
          return this.position;
     }
}

// // === Пример использования ===
// const tasks = new TaskList();
// tasks.add(new Task('Починить баги', 2));
// tasks.add(new Task('Реализовать новую фичу', 5));
// tasks.add(new Task('Обновить документацию', 1));

// const iterator = tasks.priorityIterator();

// console.log(iterator.current()); // Task: Реализовать новую фичу
// console.log(iterator.next()); // Task: Починить баги
// console.log(iterator.next()); // Task: Обновить документацию
// console.log(iterator.prev()); // Task: Починить баги
// console.log(iterator.index()); // 1
