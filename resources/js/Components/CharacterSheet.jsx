import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Shield, Cpu, Cloud, Sword, BookOpenText } from 'lucide-react';

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function CharacterSheet({ character, experiences, educations }) {
    return (
        <section
            id="grimoire"
            className="relative border-t border-amber-500/10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(0,0,0,1),transparent_60%)] px-6 py-24 sm:px-10"
        >
            <motion.div
                className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.25fr)]"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className="space-y-6 rounded-3xl border border-amber-500/40 bg-zinc-950/70 p-6 shadow-[0_0_60px_rgba(0,0,0,0.85)] backdrop-blur">
                    <header className="flex items-start justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
                                Fiche de personnage
                            </p>
                            <h2 className="mt-2 font-display text-2xl text-amber-100 sm:text-3xl">
                                {character.name}
                            </h2>
                            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
                                {character.location} • {character.availability}
                            </p>
                        </div>
                        {/* <div className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200">
                            Niveau 6+
                        </div> */}
                    </header>

                    <p className="text-sm leading-relaxed text-zinc-300">
                        {character.bio}
                    </p>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/90">
                                <Shield className="h-3.5 w-3.5" />
                                Systèmes & Réseaux / Cloud
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {character.systemSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-amber-500/40 bg-amber-500/5 px-3 py-1 text-xs text-amber-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/90">
                                <Cpu className="h-3.5 w-3.5" />
                                Développement web
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {character.devSkills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-sky-500/40 bg-sky-500/5 px-3 py-1 text-xs text-sky-100"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/90">
                                <Cloud className="h-3.5 w-3.5" />
                                Outils & tests
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {character.tools.map((tool) => (
                                    <span
                                        key={tool}
                                        className="rounded-full border border-emerald-500/40 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-100"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-300/90">
                                <BookOpenText className="h-3.5 w-3.5" />
                                Langues & centres d&apos;intérêt
                            </p>
                            <div className="space-y-1 text-xs text-zinc-300">
                                <p>
                                    <span className="font-semibold text-amber-100">
                                        Langues :
                                    </span>{' '}
                                    {character.languages
                                        .map((lang) => `${lang.label} (${lang.level})`)
                                        .join(' • ')}
                                </p>
                                <p>
                                    <span className="font-semibold text-amber-100">
                                        Centres d&apos;intérêt :
                                    </span>{' '}
                                    {character.centersOfInterest.join(' • ')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-3xl border border-amber-500/40 bg-zinc-950/80 p-5 shadow-[0_0_55px_rgba(0,0,0,0.9)] backdrop-blur">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                            <Sword className="h-3.5 w-3.5" />
                            Quêtes accomplies
                        </p>
                        <ol className="mt-4 space-y-4 text-xs text-zinc-200 sm:text-sm">
                            {experiences.map((exp) => (
                                <li
                                    key={`${exp.company}-${exp.period}`}
                                    className="rounded-2xl border border-zinc-700/60 bg-zinc-900/80 p-4"
                                >
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                                                {exp.period}
                                            </p>
                                            <p className="text-sm font-semibold text-amber-100">
                                                {exp.role} – {exp.company}
                                            </p>
                                        </div>
                                        <span className="rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-amber-200">
                                            {exp.type}
                                        </span>
                                    </div>
                                    <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-zinc-300">
                                        {exp.tasks.map((task) => (
                                            <li key={task}>{task}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-b from-zinc-950/90 to-black p-5 shadow-[0_0_55px_rgba(0,0,0,0.9)] backdrop-blur">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/90">
                            <BookOpenText className="h-3.5 w-3.5" />
                            Parcours & niveaux
                        </p>
                        <ol className="mt-4 space-y-2 text-xs text-zinc-200 sm:text-sm">
                            {educations.map((edu, index) => (
                                <li
                                    key={`${edu.year}-${edu.title}`}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-amber-400/60 bg-amber-500/10 text-[10px] font-semibold text-amber-100">
                                        {educations.length - index}
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                                            {edu.year} • {edu.level}
                                        </p>
                                        <p className="text-sm text-amber-100">{edu.title}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

CharacterSheet.propTypes = {
    character: PropTypes.object.isRequired,
    experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
    educations: PropTypes.arrayOf(PropTypes.object).isRequired,
};

