import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { Sparkles } from "lucide-react";

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function HeroSection({ hero }) {
    return (
        <section
            id="hero"
            className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-black to-zinc-950 px-6 py-24 sm:px-10"
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),transparent_60%),_radial-gradient(circle_at_bottom,_rgba(234,179,8,0.25),transparent_60%)] opacity-80" />

            <motion.div
                className="relative z-10 grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
            >
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-amber-200 shadow-[0_0_20px_rgba(234,179,8,0.4)] backdrop-blur">
                        <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                        <span>Profil hybride cloud & développement</span>
                    </div>

                    <div className="space-y-4">
                        <h1 className="font-display text-4xl tracking-tight text-amber-50 sm:text-5xl lg:text-6xl">
                            L&apos;Aventurier des{" "}
                            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-sky-300 bg-clip-text text-transparent">
                                Systèmes & Réseaux Cloud
                            </span>
                        </h1>
                        <p className="max-w-xl text-sm text-zinc-300 sm:text-base">
                            {hero.title}, j'aimerais profiter de ma double
                            casquette afin de participer à des projets me
                            faisant gagner en compétences.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#grimoire"
                            className="group relative inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(234,179,8,0.65)] transition hover:from-amber-400 hover:to-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        >
                            <span>{hero.ctaLabel}</span>
                            <span className="translate-y-px text-xs text-amber-950">
                                ↴
                            </span>
                            <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition group-hover:opacity-100 group-hover:blur-2xl" />
                        </a>

                        <p className="text-xs text-zinc-400 sm:text-sm">
                            Regardez ma fiche et mes compétences pour voir
                            comment je pourrais intégrer votre équipe.
                        </p>
                    </div>
                </div>

                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-zinc-900 via-zinc-950 to-black blur-3xl" />

                    <motion.div
                        className="relative flex h-52 w-52 items-center justify-center rounded-full border border-amber-500/50 bg-gradient-to-b from-zinc-900/80 to-black/90 shadow-[0_0_50px_rgba(234,179,8,0.8)]"
                        animate={{ rotate: [0, 6, -4, 0] }}
                        transition={{
                            duration: 16,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border border-dashed border-amber-400/60 bg-gradient-to-b from-zinc-950 to-black">
                            <img
                                src="/images/token_1.png"
                                alt="Portrait de Killian Wauters"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

HeroSection.propTypes = {
    hero: PropTypes.shape({
        title: PropTypes.string.isRequired,
        ctaLabel: PropTypes.string.isRequired,
    }).isRequired,
};
