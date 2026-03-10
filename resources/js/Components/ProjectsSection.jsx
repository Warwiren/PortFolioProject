import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Sparkles, ScrollText } from 'lucide-react';
import ProjectCubeScene from '@/Components/canvas/ProjectCubeScene';

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
};

export default function ProjectsSection({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isImageOpen, setIsImageOpen] = useState(false);

    return (
        <section
            id="projets"
            className="relative border-t border-amber-500/10 bg-gradient-to-b from-black via-zinc-950 to-black px-6 py-24 sm:px-10"
        >
            <motion.div
                className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className="flex-1 space-y-4">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                        <Sparkles className="h-3.5 w-3.5" />
                        Chambre des Projets
                    </p>
                    <h2 className="font-display text-2xl text-amber-100 sm:text-3xl">
                        Le cube des quêtes accomplies
                    </h2>
                    <p className="max-w-md text-sm text-zinc-300">
                        Cet artéfact contiendra tout mes projets accomplies. 
                        N'hésite pas à cliquer sur une face pour découvrir plus de détails.
                    </p>

                    <ul className="grid gap-3 text-xs text-zinc-300 sm:text-sm">
                        {projects.slice(0, 3).map((project) => (
                            <li
                                key={project.id}
                                className="rounded-2xl border border-zinc-700/70 bg-zinc-900/50 px-4 py-3"
                            >
                                <p className="font-medium text-amber-100">{project.title}</p>
                                <p className="mt-1 text-xs text-zinc-300">
                                    {project.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative flex-1">
                    <ProjectCubeScene
                        projects={projects}
                        onSelectProject={setSelectedProject}
                    />

                    {selectedProject && (
                        <div
                            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div
                                className="relative max-h-[90vh] w-full max-w-lg overflow-hidden rounded-3xl border border-amber-500/60 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-black shadow-[0_0_70px_rgba(0,0,0,0.9)]"
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                onClick={(event) => event.stopPropagation()}
                            >
                                {/* <button
                                    type="button"
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute right-4 top-4 rounded-full border border-amber-500/40 bg-zinc-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-200 hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                                >
                                    Fermer
                                </button> */}

                                <div className="relative max-h-[90vh] space-y-4 overflow-y-auto px-6 py-8">
                                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                                        <ScrollText className="h-3.5 w-3.5" />
                                        Détail de la quête
                                    </div>

                                    <h3 className="font-display text-2xl text-amber-100">
                                        {selectedProject.title}
                                    </h3>

                                    {selectedProject.image && (
                                        <div className="mt-3 flex items-center gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setIsImageOpen(true)}
                                                className="group relative inline-flex h-20 w-32 overflow-hidden rounded-xl border border-amber-500/50 bg-zinc-900/70 shadow-[0_0_20px_rgba(0,0,0,0.7)]"
                                            >
                                                <img
                                                    src={selectedProject.image}
                                                    alt={`Aperçu visuel de ${selectedProject.title}`}
                                                    className="h-full w-full object-cover transition duration-200 group-hover:scale-105 group-hover:brightness-110"
                                                />
                                                <span className="pointer-events-none absolute inset-x-0 bottom-1 text-center text-[10px] font-medium uppercase tracking-wide text-amber-100/90 drop-shadow">
                                                    Cliquer
                                                </span>
                                            </button>
                                        </div>
                                    )}

                                    <motion.p
                                        className="relative max-w-none text-sm leading-relaxed text-zinc-200"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.15, duration: 0.5 }}
                                    >
                                        {selectedProject.description}
                                        <span className="pointer-events-none absolute -left-6 top-0 text-2xl text-amber-400/70">
                                            ❦
                                        </span>
                                    </motion.p>

                                    <motion.div
                                        className="relative mt-4 overflow-hidden rounded-2xl border border-amber-500/40 bg-zinc-900/80 p-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25, duration: 0.5 }}
                                    >
                                        <motion.div
                                            className="absolute -left-10 top-2 h-32 w-32 origin-top-left rounded-full border border-amber-500/40 bg-gradient-to-b from-amber-500/20 to-transparent"
                                            initial={{ rotate: -10, opacity: 0 }}
                                            animate={{ rotate: -3, opacity: 1 }}
                                            transition={{ duration: 1.2, ease: 'easeOut' }}
                                        />

                                        <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                                            Loots techniques
                                        </p>

                                        <div className="relative z-10 mt-3 flex flex-wrap gap-2">
                                            {selectedProject.loots.map((loot) => (
                                                <span
                                                    key={loot}
                                                    className="inline-flex items-center gap-1 rounded-full border border-amber-500/60 bg-amber-500/10 px-3 py-1 text-[11px] font-medium text-amber-100 shadow-[0_0_20px_rgba(234,179,8,0.45)]"
                                                >
                                                    ✦ {loot}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    )}

                    {selectedProject && isImageOpen && selectedProject.image && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-sm"
                            onClick={() => setIsImageOpen(false)}
                        >
                            <div
                                className="relative max-h-[95vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-amber-500/60 bg-black/95 shadow-[0_0_80px_rgba(0,0,0,0.95)]"
                                onClick={(event) => event.stopPropagation()}
                            >
                                <button
                                    type="button"
                                    onClick={() => setIsImageOpen(false)}
                                    className="absolute right-4 top-4 rounded-full border border-amber-500/60 bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-100 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                                >
                                    Fermer l&apos;image
                                </button>
                                <div className="flex h-full w-full items-center justify-center p-4 sm:p-6">
                                    <img
                                        src={selectedProject.image}
                                        alt={`Visuel détaillé de ${selectedProject.title}`}
                                        className="max-h-[85vh] w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}

ProjectsSection.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

