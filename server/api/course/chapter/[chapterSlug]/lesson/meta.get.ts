import course from "~~/server/courseData";
import { Course, Chapter } from "~/types/course";
course as Course;

type OutlineBase = {
    title: string;
    slug: string;
    number: number;
};

type OutlineChapter = OutlineBase & {
    lessons: Array<OutlineLesson>;
};
type OutlineLesson = OutlineBase & {
    path: string;
}
type CourseMeta = {
    title: string;
    chapters: Array<OutlineChapter>;
};

export default defineEventHandler((event) : CourseMeta => {
    const outline: Array<OutlineChapter> = course.chapters.reduce(
        (prev: Array<OutlineChapter>, next: Chapter) => {
          const lessons: Array<OutlineLesson> = next.lessons.map(
            (lesson) => ({
              title: lesson.title,
              slug: lesson.slug,
              number: lesson.number,
              path: `/course/chapter/${next.slug}/lesson/${lesson.slug}`,
            })
          );
    
          const chapter: OutlineChapter = {
            title: next.title,
            slug: next.slug,
            number: next.number,
            lessons,
          };
    
          return [...prev, chapter];
        },
        []
      );
    
      return {
        title: course.title,
        chapters: outline,
      };

});