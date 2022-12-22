import courseData from "./courseData";
import { Course, Chapter, Lesson, LessonWithPath } from "~/types/course";

export const useCourse = (): Course => {
  const chapters: Array<Chapter> = courseData.chapters.map((chapter: Chapter) => {

    const lessons: Array<LessonWithPath> = chapter.lessons.map((lesson: Lesson) => ({
      ...lesson,
      path: `/course/chapter/${chapter.slug}/lesson/${lesson.slug}`,
    }));

    return {
      ...chapter,
      lessons
    }
  })

  return {
    ...courseData,
    chapters
  }
}
