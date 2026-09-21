import { site } from "@/content/site";

export default function Home() {
  const { profile, interests, education, publications, cv, contact } = site;

  return (
    <main className="mx-auto max-w-2xl px-5 py-12 sm:px-6 sm:py-16">
      <header className="border-b border-rule pb-8">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-foreground">
          {profile.title}, {profile.affiliation}
        </p>
        <p className="mt-1 text-sm text-muted">
          Supervisor: {profile.supervisor}
        </p>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-foreground">
          {profile.tagline}
        </p>
        <p className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.github} rel="noopener noreferrer">
            {contact.githubLabel}
          </a>
          <a href={cv.href}>{cv.label}</a>
        </p>
      </header>

      <section className="border-b border-rule py-8" aria-labelledby="interests">
        <h2
          id="interests"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Research Interests
        </h2>
        {interests.length > 0 ? (
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed">
            {interests.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-muted">No entries yet.</p>
        )}
      </section>

      <section className="border-b border-rule py-8" aria-labelledby="education">
        <h2
          id="education"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Education
        </h2>
        {education.length > 0 ? (
          <ul className="mt-4 space-y-4">
            {education.map((ed) => (
              <li key={`${ed.degree}-${ed.period}`}>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-[15px] font-medium">{ed.degree}</p>
                  <p className="shrink-0 text-sm text-muted">{ed.period}</p>
                </div>
                <p className="text-sm text-foreground">{ed.school}</p>
                {ed.detail ? (
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {ed.detail}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-muted">No entries yet.</p>
        )}
      </section>

      <section
        className="border-b border-rule py-8"
        aria-labelledby="publications"
      >
        <h2
          id="publications"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Publications
        </h2>
        {publications.length > 0 ? (
          <ol className="mt-4 list-decimal space-y-4 pl-5">
            {publications.map((pub) => (
              <li
                key={`${pub.title}-${pub.venue}-${pub.year}-${pub.authors}`}
                className="pl-1 text-[15px] leading-relaxed"
              >
                <span>{pub.authors} </span>
                {pub.url ? (
                  <a href={pub.url} rel="noopener noreferrer">
                    &ldquo;{pub.title}&rdquo;
                  </a>
                ) : (
                  <span>&ldquo;{pub.title}&rdquo;</span>
                )}
                <span>
                  . {pub.venue}
                  {pub.year ? `, ${pub.year}` : ""}
                  {pub.note ? ` (${pub.note})` : null}
                </span>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-3 text-sm text-muted">No entries yet.</p>
        )}
      </section>

      <section className="py-8" aria-labelledby="contact">
        <h2
          id="contact"
          className="font-serif text-lg font-semibold tracking-tight"
        >
          Contact
        </h2>
        <ul className="mt-3 space-y-1.5 text-[15px]">
          <li>
            Email:{" "}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
          <li>
            GitHub:{" "}
            <a href={contact.github} rel="noopener noreferrer">
              {contact.github.replace("https://", "")}
            </a>
          </li>
          <li>
            CV: <a href={cv.href}>{cv.label}</a>
          </li>
        </ul>
      </section>

      <footer className="border-t border-rule pt-6 pb-2 text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {profile.name}. Hosted on GitHub Pages.
        </p>
      </footer>
    </main>
  );
}
