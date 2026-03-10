import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import PropTypes from 'prop-types';

function Cube({ projects, onSelect }) {
    const meshRef = useRef();

    // On prépare les textures pour les projets existants
    const projectTextures = useLoader(
        THREE.TextureLoader,
        projects.slice(0, 6).map((p) => p.image),
    );

    // On crée les 6 faces du cube
    const materials = Array.from({ length: 6 }).map((_, i) => {
        const project = projects[i];
        const texture = projectTextures[i];

        if (project && texture) {
            // Face avec projet (texture pleine, légèrement brillante)
            return new THREE.MeshStandardMaterial({
                map: texture,
                transparent: true,
                opacity: 0.9,
                roughness: 0.2,
                metalness: 0.5,
                side: THREE.DoubleSide,
            });
        }

        // Face vide (gris légèrement transparent)
        return new THREE.MeshStandardMaterial({
            color: '#4b5563',
            transparent: true,
            opacity: 0.25,
            roughness: 0.2,
            metalness: 0.4,
            wireframe: false,
            side: THREE.DoubleSide,
        });
    });

    const handleClick = (e) => {
        e.stopPropagation(); // Empêche le clic de traverser le cube
        
        // faceIndex / 2 nous donne l'index du matériau (0 à 5)
        const materialIndex = Math.floor(e.faceIndex / 2);
        const selectedProject = projects[materialIndex];

        if (selectedProject) {
            onSelect?.(selectedProject);
        }
    };

    return (
        <mesh 
            ref={meshRef} 
            onClick={handleClick} 
            material={materials} // On passe le tableau de 6 matériaux ici
        >
            <boxGeometry args={[2.2, 2.2, 2.2]} />
        </mesh>
    );
}

export default function ProjectCubeScene({ projects, onSelectProject }) {
    return (
        <div>
            <div className="relative h-[500px] w-full cursor-pointer rounded-3xl bg-gray-200/90">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.8} />
                        <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbbf24" />
                        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />

                        {/* Cube texturé avec les projets */}
                        <Cube projects={projects} onSelect={onSelectProject} />

                        <OrbitControls 
                            enableZoom={false} 
                            enablePan={false} 
                            autoRotate 
                            autoRotateSpeed={0.8} 
                        />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 py-3 px-4 rounded-xl bg-black/60 backdrop-blur-md border border-amber-900/30 shadow-[0_0_20px_rgba(0,0,0,0.5)] pointer-events-none">
                <div className="text-amber-400 font-fantasy text-sm animate-pulse text-center">
                    ✦ Artefact de Vision ✦
                </div>
                <div className="text-[10px] text-amber-100/70 italic text-center leading-tight">
                    Cliquez sur une facette pour des précisions
                </div>
            </div>
        </div>
    );
}

ProjectCubeScene.propTypes = {
    projects: PropTypes.array.isRequired,
    onSelectProject: PropTypes.func,
};