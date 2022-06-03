import { DevCourseDecorator } from './dev-course-decorator';

export class DevCourseFrontDecorator extends DevCourseDecorator {
  getPrice(): number {
    return this.course.getPrice() + 85;
  }

  getName(): string {
    return this.course.getName() + ' (HTML, CSS, JS)';
  }
}
