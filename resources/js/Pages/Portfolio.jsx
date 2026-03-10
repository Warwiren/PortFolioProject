import { Head } from '@inertiajs/react';
import PropTypes from 'prop-types';
import HeroSection from '@/Components/HeroSection';
import CharacterSheet from '@/Components/CharacterSheet';
import ProjectsSection from '@/Components/ProjectsSection';
import ContactSection from '@/Components/ContactSection';

export default function Portfolio({ hero, character, experiences, educations, projects }) {
    return (
        <>
            <Head title="Portfolio - Mystic Dev" />
            <div className="min-h-screen bg-black text-amber-50">
                <HeroSection hero={hero} />
                <CharacterSheet
                    character={character}
                    experiences={experiences}
                    educations={educations}
                />
                <ProjectsSection projects={projects} />
                <ContactSection />
            </div>
        </>
    );
}

Portfolio.propTypes = {
    hero: PropTypes.object.isRequired,
    character: PropTypes.object.isRequired,
    experiences: PropTypes.arrayOf(PropTypes.object).isRequired,
    educations: PropTypes.arrayOf(PropTypes.object).isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

