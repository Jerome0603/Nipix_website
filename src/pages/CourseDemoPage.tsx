import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, PlayCircle, ArrowLeft, Award } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'Introduction to Web Development',
    duration: '6 min',
  },
  {
    id: 2,
    title: 'HTML Basics & Structure',
    duration: '8 min',
  },
  {
    id: 3,
    title: 'CSS Styling Essentials',
    duration: '9 min',
  },
  {
    id: 4,
    title: 'JavaScript Interactivity',
    duration: '10 min',
  },
];

const quizQuestions = [
  {
    id: 1,
    question: 'Which tag is used to create a link in HTML?',
    options: ['<div>', '<a>', '<span>', '<p>'],
    correct: '<a>',
  },
  {
    id: 2,
    question: 'Which CSS property changes text color?',
    options: ['background', 'font-style', 'color', 'border'],
    correct: 'color',
  },
  {
    id: 3,
    question: 'Which JavaScript keyword declares a constant?',
    options: ['var', 'let', 'const', 'static'],
    correct: 'const',
  },
];

export function CourseDemoPage() {
  const [activeLessonId, setActiveLessonId] = useState(1);
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const activeLesson = lessons.find((lesson) => lesson.id === activeLessonId) ?? lessons[0];
  const progress = Math.round((completedLessonIds.length / lessons.length) * 100);
  const allLessonsCompleted = completedLessonIds.length === lessons.length;

  const score = useMemo(() => {
    return quizQuestions.reduce((total, question) => {
      return total + (quizAnswers[question.id] === question.correct ? 1 : 0);
    }, 0);
  }, [quizAnswers]);

  const passedQuiz = quizSubmitted && score >= 2;

  const toggleLessonComplete = (lessonId: number) => {
    setCompletedLessonIds((prev) => {
      if (prev.includes(lessonId)) {
        return prev.filter((id) => id !== lessonId);
      }
      return [...prev, lessonId];
    });
  };

  const handleAnswerChange = (questionId: number, answer: string) => {
    setQuizAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleQuizSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setQuizSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[var(--page-bg)] text-[var(--page-text)]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-[#007DFF] hover:text-[#066EE2] font-semibold"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold">Demo Course: Web Development Foundations</h1>
            <p className="text-base lg:text-lg text-[var(--muted-text)] mt-2 max-w-2xl">
              Complete the lessons, watch the demo video, finish the quiz, and unlock a sample
              certificate.
            </p>
          </div>
          <div className="bg-[var(--surface-bg)] border border-[var(--surface-border)] rounded-2xl px-6 py-4 min-w-[240px]">
            <p className="text-sm text-[var(--muted-text)]">Progress</p>
            <p className="text-2xl font-bold text-[#007DFF]">{progress}%</p>
            <div className="mt-3 h-2 rounded-full bg-[var(--surface-muted)]">
              <div
                className="h-2 rounded-full bg-[#007DFF] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <section className="space-y-6">
            <div className="bg-[var(--surface-bg)] border border-[var(--surface-border)] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="text-[#007DFF]" size={26} />
                <div>
                  <h2 className="text-xl font-semibold">{activeLesson.title}</h2>
                  <p className="text-sm text-[var(--muted-text)]">{activeLesson.duration}</p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[var(--surface-border)] bg-black/10">
                <video
                  controls
                  className="w-full h-[320px] bg-black"
                  poster="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=1200"
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-5">
                <button
                  className="px-5 py-2.5 rounded-xl bg-[#007DFF] text-white font-semibold hover:bg-[#066EE2] transition-colors"
                  onClick={() => toggleLessonComplete(activeLesson.id)}
                  type="button"
                >
                  {completedLessonIds.includes(activeLesson.id)
                    ? 'Mark as Incomplete'
                    : 'Mark Lesson Complete'}
                </button>
                <button
                  className="px-5 py-2.5 rounded-xl border border-[#007DFF] text-[#007DFF] font-semibold hover:bg-[var(--nav-link-hover-bg)] transition-colors"
                  onClick={() => {
                    const currentIndex = lessons.findIndex((lesson) => lesson.id === activeLesson.id);
                    const nextLesson = lessons[currentIndex + 1] ?? lessons[0];
                    setActiveLessonId(nextLesson.id);
                  }}
                  type="button"
                >
                  Next Lesson
                </button>
              </div>
            </div>

            <div className="bg-[var(--surface-bg)] border border-[var(--surface-border)] rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-[#007DFF]" size={24} />
                <h2 className="text-xl font-semibold">Completion Quiz</h2>
              </div>
              {!allLessonsCompleted && (
                <p className="text-sm text-[var(--muted-text)]">
                  Complete all lessons to unlock the quiz.
                </p>
              )}

              {allLessonsCompleted && (
                <form onSubmit={handleQuizSubmit} className="space-y-5 mt-4">
                  {quizQuestions.map((question) => (
                    <div key={question.id} className="space-y-3">
                      <p className="font-semibold">{question.question}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {question.options.map((option) => (
                          <label
                            key={option}
                            className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 cursor-pointer transition-colors ${
                              quizAnswers[question.id] === option
                                ? 'border-[#007DFF] bg-[var(--nav-link-hover-bg)]'
                                : 'border-[var(--surface-border)]'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              checked={quizAnswers[question.id] === option}
                              onChange={() => handleAnswerChange(question.id, option)}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}

                  <button
                    className="px-6 py-2.5 rounded-xl bg-[#007DFF] text-white font-semibold hover:bg-[#066EE2] transition-colors"
                    type="submit"
                  >
                    Submit Quiz
                  </button>

                  {quizSubmitted && (
                    <p className={`text-sm font-semibold ${passedQuiz ? 'text-emerald-500' : 'text-red-500'}`}>
                      {passedQuiz
                        ? `Great job! You scored ${score}/${quizQuestions.length}.`
                        : `Score ${score}/${quizQuestions.length}. Please try again.`}
                    </p>
                  )}
                </form>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="bg-[var(--surface-bg)] border border-[var(--surface-border)] rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-4">Course Outline</h3>
              <div className="space-y-3">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setActiveLessonId(lesson.id)}
                    className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border text-left transition-colors ${
                      activeLessonId === lesson.id
                        ? 'border-[#007DFF] bg-[var(--nav-link-hover-bg)]'
                        : 'border-[var(--surface-border)]'
                    }`}
                    type="button"
                  >
                    <div>
                      <p className="font-semibold">{lesson.title}</p>
                      <p className="text-xs text-[var(--muted-text)]">{lesson.duration}</p>
                    </div>
                    {completedLessonIds.includes(lesson.id) && (
                      <CheckCircle className="text-[#007DFF]" size={18} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-[var(--surface-bg)] border border-[var(--surface-border)] rounded-3xl p-6">
              <h3 className="text-lg font-semibold mb-3">Completion Certificate</h3>
              <p className="text-sm text-[var(--muted-text)] mb-4">
                Finish the lessons and pass the quiz to unlock your sample certificate.
              </p>
              <div
                className={`rounded-3xl border border-dashed p-6 text-center transition-all ${
                  passedQuiz && allLessonsCompleted
                    ? 'border-[#007DFF] bg-[var(--nav-link-hover-bg)]'
                    : 'border-[var(--surface-border)] opacity-70'
                }`}
              >
                {passedQuiz && allLessonsCompleted ? (
                  <div className="space-y-2">
                    <p className="text-sm uppercase tracking-widest text-[#007DFF]">Certificate of Completion</p>
                    <h4 className="text-2xl font-bold">Student Name</h4>
                    <p className="text-sm">Web Development Foundations</p>
                    <p className="text-xs text-[var(--muted-text)]">Issued by Nipix Technology</p>
                  </div>
                ) : (
                  <p className="text-sm text-[var(--muted-text)]">Certificate locked</p>
                )}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
