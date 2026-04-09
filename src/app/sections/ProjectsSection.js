// sections/ProjectsSection.js
import ProjectCard from '../components/ProjectCard'
import { useCallback, useMemo, useState } from 'react'
import ProjectModal from '../components/ProjectModal'
import { projects } from '../data/projectsContent'

const ProjectsSection = ({ className }) => {
    const [selectedProjectId, setSelectedProjectId] = useState(null)

    const selectedProject = useMemo(
        () => projects.find((project) => project.id === selectedProjectId) ?? null,
        [selectedProjectId]
    )

    const handleOpenProject = useCallback((projectId) => {
        setSelectedProjectId(projectId)
    }, [])

    const handleOpenChange = useCallback((isOpen) => {
        if (!isOpen) {
            setSelectedProjectId(null)
        }
    }, [])

    return (
        <section id="projects" className={className}>
            <div className="max-w-6xl py-8">
                <h2 className="mb-8 text-2xl font-bold text-foreground uppercase">
                    Web Development Projects
                </h2>

                {/* Grid: 1 col mobile → 2 col md+ */}
                <div className="flex flex-wrap justify-start gap-8 p-4">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            onOpenModal={handleOpenProject}
                            {...project}
                        />
                    ))}
                </div>
            </div>
            <ProjectModal
                project={selectedProject}
                isOpen={Boolean(selectedProject)}
                onOpenChange={handleOpenChange}
            />
        </section>
    )
}

export default ProjectsSection
