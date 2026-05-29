import { projectsData } from '../data/project';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {

  return (
    <section id="projects" className="py-10">
      <h3 className="text-2xl font-bold text-slate-200 tracking-tight mb-8">
        Featured Projects
      </h3>
      
      {/* ใช้ Grid Layout จัดการ์ดโปรเจกต์ให้เรียงกันสวยๆ บน Mobile จะขึ้น 1 คอลัมน์ บนจอคอมจะขึ้น 2 คอลัมน์ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}