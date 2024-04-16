namespace Subjects {
  export class Subject {
    teacher: Teacher;

    setTeacher(teacher: Teacher) {
      return (this.teacher = teacher);
    }
  }
}
