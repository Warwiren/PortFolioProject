<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    public function __invoke(): Response
    {
        $hero = [
            'title' => 'Apprenti Administrateur Systèmes et Réseaux cloud',
            'ctaLabel' => 'Explorer mes Informations',
        ];

        $character = [
            'name' => 'Killian Wauters',
            'location' => 'Normandie',
            'availability' => 'Disponible immédiatement',
            'bio' => "Rigoureux et curieux, je développe mes compétences en administration systèmes & réseaux cloud tout en m’appuyant sur une base dans le développement web. Mon profil hybride me permet d’aborder les projets avec une vision globale, de l’infrastructure à l’application.",
            'languages' => [
                ['label' => 'Français', 'level' => 'Maternelle'],
                ['label' => 'Anglais', 'level' => 'B2'],
            ],
            'centersOfInterest' => [
                'Club de jeux de rôle',
                'World building',
            ],
            'systemSkills' => [
                'Windows',
                'Linux',
                'Virtualisation',
                'Scripting',
                'AWS (EC2, S3, IAM, ...)',
            ],
            'devSkills' => [
                'ReactJS',
                'Laravel',
                'TypeScript',
                'JavaScript',
                'HTML',
                'CSS',
                'Tailwind CSS',
            ],
            'tools' => [
                'Cypress',
                'MySQL',
                'Supabase',
                'GitHub',
                'GitLab',
            ],
        ];

        $experiences = [
            [
                'period' => '09/2025 - 12/2025',
                'company' => 'ib Cegos',
                'role' => 'Projet fil rouge',
                'type' => 'Quête d’infrastructure',
                'tasks' => [
                    'Concevoir une infrastructure réseau et système',
                    'Installer et configurer des machines virtuelles (VMware, ESXi, vCenter, ADDS)',
                    'Sécuriser l’environnement',
                    'Travail en équipe',
                ],
            ],
            [
                'period' => '11/05/2023 - 12/06/2024',
                'company' => 'Medeep Tech',
                'role' => 'Développeur frontend',
                'type' => 'Quête d’alternance',
                'tasks' => [
                    'Développement d’interfaces ReactJS / TypeScript',
                    'Travail en équipe (Git, gestion de versions, répartition des tâches)',
                    'Participation aux phases de tests et de validation',
                ],
            ],
            [
                'period' => 'Début 2022',
                'company' => 'Sharebooks',
                'role' => 'Designer / Développeur web',
                'type' => 'Quête d’apprentissage',
                'tasks' => [
                    'Réalisation de maquettes',
                    'Veille technique',
                    'Prototype d’application PHP',
                ],
            ],
        ];

        $educations = [
            [
                'year' => '2026',
                'title' => 'AWS Cloud Quest: Cloud Practitioner – Training Badge',
                'level' => '',
            ],
            [
                'year' => '2025',
                'title' => 'Administrateur systèmes & réseaux cloud (POEC) – Ib Cegos Mont St Aignan',
                'level' => '',
            ],
            [
                'year' => '2022 - 2024',
                'title' => 'Concepteur développeur d’application (niveau 6) – Créative Hérouville St Clair',
                'level' => '',
            ],
            [
                'year' => '2021 - 2022',
                'title' => 'Prépa Num’Sup (niveau 5) – Créative Hérouville St Clair',
                'level' => '',
            ],
            [
                'year' => '2018 - 2020',
                'title' => 'BTS SIO option SISR – Lycée la Châtaigneraie',
                'level' => '',
            ],
            [
                'year' => '2017 - 2018',
                'title' => 'BAC ES option économique – Lycée Jeanne d’Arc',
                'level' => '',
            ],
        ];

        $projects = [
            [
                'id' => 1,
                'title' => 'Projet Grimoire des MJ - Beta',
                'image' => '/images/GrimoireBeta.png',
                'description' => 'Conception et développement d’un site pour la création de parties de JDR. Le site comprend une création de compte (ou connexion via discord OAuth2), gestions de comptes, paramètres d’affichages des parties. Le site est lié à un discord et un bot discord qui publiera annonces/commentaires/problèmes dans des salons spécifiques par rapport aux créations sur le site.',
                'loots' => ['ReactJS', 'Laravel', 'MySQL', 'Supabase', 'GitHub', 'TypeScript', 'Vercel', 'Render'],
            ],
            [
                'id' => 2,
                'title' => 'Frontend React pour application de supervision',
                'image' => '/images/Thiana.png',
                'description' => 'Interfaces ReactJS / TypeScript pour une application de supervisions métiers. L’application contenait la mise en place de tableaux/graphiques afin de garder un oeil sur la croissance de l’entreprise et pour pouvoir gérer certains aspects des autres applications.',
                'loots' => ['ReactJS', 'TypeScript', 'Tailwind CSS', 'Cypress', 'Git'],
            ],
        ];

        return Inertia::render('Portfolio', [
            'hero' => $hero,
            'character' => $character,
            'experiences' => $experiences,
            'educations' => $educations,
            'projects' => $projects,
        ]);
    }
}

