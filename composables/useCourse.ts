import courseData from "./courseData";
type Lesson = {
  title: string,
  slug: string,
  number: number,
  downloadUrl: string;
  videoId: number;
  text: string;
  path: string;
  sourceUrl?: string;
}

type Chapter = {
  title: string,
  slug: string,
  number: number,
  lessons: Array<Lesson>,
}

type Course = {
  title: string,
  chapters: Array<Chapter>,
}

export const useCourse = (): Course => {
  const chapters: Array<Chapter> = courseData.chapters.map(chapter => {

    const lessons: Array<Lesson> = chapter.lessons.map(lesson => ({
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
