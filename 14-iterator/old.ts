// Элемент коллекции (Task)
class Task_ {
     constructor(public title: string, public priority: number) {}
}

// Коллекция задач (TaskList)
class TaskList_ {
     private tasks: Task_[] = [];

     add(task: Task_) {
          this.tasks.push(task);
     }

     getAll(): Task_[] {
          return this.tasks;
     }

     count(): number {
          return this.tasks.length;
     }

     // Получаем итератор по приоритету
     priorityIterator(): PriorityTaskIterator {
          return new PriorityTaskIterator(this);
     }
}

// Интерфейс итератора
interface IIterator<T> {
     current(): T | null;
     next(): T | null;
     prev(): T | null;
     index(): number;
}

// Итератор по приоритету
class PriorityTaskIterator_ implements IIterator<Task_> {
     private sortedTasks: Task_[];
     private position: number = 0;

     constructor(taskList: TaskList_) {
          // Сортируем задачи по приоритету
          this.sortedTasks = [...taskList.getAll()].sort(
               (a, b) => b.priority - a.priority
          );
     }

     current(): Task_ | null {
          return this.sortedTasks[this.position] ?? null;
     }

     next(): Task_ | null {
          if (this.position < this.sortedTasks.length - 1) {
               this.position++;
               return this.current();
          }
          return null;
     }

     prev(): Task_ | null {
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

// === Пример использования ===
const tasks = new TaskList_();
tasks.add(new Task_('Починить баги', 2));
tasks.add(new Task_('Реализовать новую фичу', 5));
tasks.add(new Task_('Обновить документацию', 1));

const iterator = tasks.priorityIterator();

console.log(iterator.current()); // Task: Реализовать новую фичу
console.log(iterator.next()); // Task: Починить баги
console.log(iterator.next()); // Task: Обновить документацию
console.log(iterator.prev()); // Task: Починить баги
console.log(iterator.index()); // 1
