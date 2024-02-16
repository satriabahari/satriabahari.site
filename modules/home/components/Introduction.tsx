export default function Introduction() {
  return (
    <section className="space-y-2 bg-cover bg-no-repeat">
      <div className="text-3xl font-medium text-neutral-900 dark:text-neutral-50">
        <h1>Hi, I&apos;m Satria Bahari</h1>
      </div>

      <div className="space-y-4">
        <ul className="ml-5 flex list-disc gap-10 text-neutral-700 dark:text-neutral-400">
          <li>
            Based in Jambi, Indonesia <span className="ml-1">🇮🇩</span>
          </li>
          <li>Remote worker</li>
        </ul>
        <p className="mt-6 leading-loose text-neutral-600 dark:text-neutral-300">
          Passionate and seasoned Software Engineer with a strong focus on
          frontend development. Proficient in TypeScript and well-versed in all
          aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web
          applications.
        </p>
      </div>
    </section>
  );
}
