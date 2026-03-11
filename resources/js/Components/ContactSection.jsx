import { motion } from "framer-motion";
import { Mail, MapPin, Gamepad2 } from "lucide-react";
import { useForm } from "@inertiajs/react";

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function ContactSection() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const submit = () => {
        e.preventDefault();
        post(route("contact.send"), {
            onSuccess: () => {
                reset();
                alert("Le sort a été lancé avec succès !");
            },
        });
    };

    return (
        <section
            id="contact"
            className="border-t border-amber-500/10 bg-black px-6 py-20 sm:px-10"
        >
            <motion.div
                className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
            >
                <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                        Invocation
                    </p>
                    <h2 className="font-display text-2xl text-amber-100 sm:text-3xl">
                        Discutons de notre prochaine quête
                    </h2>

                    <div className="mt-4 space-y-3 text-sm text-zinc-200">
                        <p className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-amber-300" />
                            <a
                                href="mailto:killian.wautersprogmail.com"
                                className="underline decoration-amber-500/60 decoration-dotted underline-offset-4 hover:text-amber-200"
                            >
                                killian.wauterspro@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-amber-300" />
                            <span>76420, Rouen – Normandie / Autres</span>
                        </p>
                        <p className="flex items-center gap-3 text-xs text-zinc-400">
                            <MapPin className="h-4 w-4 text-amber-300" />
                            <span>
                                Je recherche principalement en Normandie, mais
                                également Lille ou autre, devoir déménager n'est
                                pas un problème.
                            </span>
                        </p>
                    </div>
                </div>

                {/* <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-zinc-950/90 to-black p-6 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/90">
                        Sort de communication
                    </p>
                    <p className="mt-3 text-xs text-zinc-300">
                        Ce formulaire est décoratif dans cette version de démonstration, mais
                        peut facilement être connecté à un backend Laravel ou un service
                        tiers pour envoyer de vrais messages.
                    </p>

                    <form onSubmit={submit} className="mt-4 space-y-3 text-sm">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400"
                            >
                                Nom / Guilde
                            </label>
                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                required
                                className="mt-1 block w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-sm text-amber-50 shadow-inner shadow-black/40 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                                placeholder="Votre nom ou celui de votre entreprise"
                            />
                            {errors.name && <div className="text-red-500 text-xs">{errors.name}</div>}
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400"
                            >
                                Mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                required
                                className="mt-1 block w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-sm text-amber-50 shadow-inner shadow-black/40 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                                placeholder="contact@votre-guilde.com"
                            />
                            {errors.email && <div className="text-red-500 text-xs">{errors.email}</div>}
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="block text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400"
                            >
                                Description de la quête
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                value={data.message}
                                onChange={e => setData('message', e.target.value)}
                                required
                                className="mt-1 block w-full rounded-lg border border-zinc-700 bg-zinc-900/80 px-3 py-2 text-sm text-amber-50 shadow-inner shadow-black/40 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                                placeholder="En quoi puis-je vous servir ?"
                            />
                            {errors.message && <div className="text-red-500 text-xs">{errors.message}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="mt-1 inline-flex w-full items-center justify-center rounded-full border border-amber-500/60 bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_35px_rgba(234,179,8,0.9)] transition hover:from-amber-400 hover:to-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        >
                            Lancer le sort
                        </button>
                    </form>
                </div> */}
            </motion.div>
        </section>
    );
}
