import { FaGithub } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import type { Project } from "../data/project";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="group relative flex flex-col rounded-lg border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:border-slate-700/80 transition-all duration-200 overflow-hidden cursor-pointer h-full"
      onClick={() => setIsOpen(true)}
    >
      {/* Project Image Preview */}
      {project.imageUrl && project.imageUrl.length > 0 && (
        <div className="aspect-video w-full overflow-hidden bg-slate-800">
          <img
            src={project.imageUrl[0]}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* หัวข้อโปรเจกต์ และ ลิงก์ออกไปดูงาน */}
          <div className="flex items-center justify-between gap-4">
            <h4 className="text-xl font-bold text-slate-100 group-hover:text-teal-400 transition-colors">
              {project.title}
            </h4>
            <div className="flex items-center gap-3 text-slate-400">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-100 transition-colors text-xl"
                  title="View Source Code"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-100 transition-colors text-xl"
                  title="View Live Demo"
                  onClick={(e) => e.stopPropagation()}
                >
                  <CiPlay1 />
                </a>
              )}
            </div>
          </div>

          {/* รายละเอียดโปรเจกต์ */}
          <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 text-xs font-medium text-teal-400 bg-teal-950/40 rounded border border-teal-900/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal
        Open={isOpen}
        onClose={() => setIsOpen(false)}
        Project={project}
      />
    </div>
  );
}
