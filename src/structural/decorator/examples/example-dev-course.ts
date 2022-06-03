import { showDetail } from '../common/fn/show-detail';
import { DevCourse } from '../dev-course/dev-course';
import { DevCourseBackDecorator } from '../dev-course/dev-course-back-decorator';
import { DevCourseDecorator } from '../dev-course/dev-course-decorator';
import { DevCourseFrontDecorator } from '../dev-course/dev-course-front-decorator';
import { DevCourseProtocol } from '../dev-course/dev-course-protocol';

function showDetailDevCourse(...protocols: DevCourseProtocol[]) {
  console.log('Dev Course:');
  protocols.forEach(showDetail);
}

const devCourse = new DevCourse('Dev Course Base', 100);
const devBaseDecorator = new DevCourseDecorator(devCourse);
const devFront = new DevCourseFrontDecorator(devBaseDecorator);
const devBack = new DevCourseBackDecorator(devCourse);
const devFullStack = new DevCourseBackDecorator(devFront);

export function example() {
  showDetailDevCourse(
    devCourse,
    devBaseDecorator,
    devFront,
    devBack,
    devFullStack,
  );
}
