import { DevCourseDecorator } from './dev-course-decorator';

export class DevCourseBackDecorator extends DevCourseDecorator {
  getPrice(): number {
    return this.course.getPrice() + 75;
  }

  getName(): string {
    return this.course.getName() + ' (Node, Express, MongoDB)';
  }
}
