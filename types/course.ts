export type Lesson = {
  title: string,
  slug: string,
  number: number,
  downloadUrl: string;
  videoId: number;
  text: string;
  sourceUrl?: string;
}

export type LessonWithPath = Lesson & {
  path: string;
}

export type Chapter = {
  title: string,
  slug: string,
  number: number,
  lessons: Array<Lesson> | Array<LessonWithPath>,
}

export type Course = {
  title: string,
  chapters: Array<Chapter>,
}