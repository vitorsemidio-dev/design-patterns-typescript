import { DevCourseProtocol } from './dev-course-protocol';

export class DevCourseDecorator implements DevCourseProtocol {
  constructor(protected course: DevCourseProtocol) {}

  getName(): string {
    return this.course.getName();
  }

  getPrice(): number {
    return this.course.getPrice();
  }
}
