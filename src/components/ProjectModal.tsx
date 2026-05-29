import { HiOutlineX } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import type { Project } from "../data/project";
import { useState } from "react";

interface Modal {
  Open: boolean;
  onClose: () => void;
  Project: Project;
}

export default function ProjectModal({ Open, Project, onClose }: Modal) {
  if (!Open) return null;

  const [currentImage, setCurrentImage] = useState<string | undefined>(
    Project.imageUrl ? Project.imageUrl[0] : undefined
  );

  const handleClick = (index: number) => {
    const slider = Project.imageUrl?.[index];
    setCurrentImage(slider);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-100 z-10 bg-slate-900/50 rounded-full p-1"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close modal"
        >
          <HiOutlineX size={24} />
        </button>

        {/* ชื่อโปรเจกต์ และ ลิงก์ไปดูงาน */}
        <div className="flex items-center gap-4 mb-6 pr-10">
          {" "}
          {/* เพิ่ม pr-10 กันชื่อยาวทับปุ่มปิด */}
          <h1 className="text-3xl font-bold text-slate-100">
            {Project.title}
          </h1>
          <div className="flex items-center gap-3 text-slate-400">
            {Project.githubUrl && (
              <a
                href={Project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 transition-colors text-2xl"
                title="View Source Code"
              >
                <FaGithub />
              </a>
            )}
            {Project.liveUrl && (
              <a
                href={Project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100 transition-colors text-2xl"
                title="View Live Demo"
              >
                <CiPlay1 />
              </a>
            )}
          </div>
        </div>

        {/* แสดงส่วนของรูปภาพ */}
        <div className="flex flex-col items-center gap-4 mb-8">
          {currentImage && (
            <div className="w-full bg-slate-800/50 rounded-xl overflow-hidden border border-slate-800 shadow-inner">
              {/* --- แก้ไขจุดที่ 1: รูปหลัก --- */}
              {/* บังคับความสูง (เช่น h-[400px] หรือ h-[50vh]) และใช้ object-cover */}
              <img
                src={currentImage}
                alt="Project Master"
                className="w-full h-[300px] md:h-[500px] object-contain object-center transition-all duration-300"
              />
            </div>
          )}

          {/* --- แก้ไขจุดที่ 2: รูป Thumbnails --- */}
          {Project.imageUrl && Project.imageUrl.length > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-3 p-2 bg-slate-800/30 rounded-2xl border border-slate-800/50">
              {Project.imageUrl.map((url, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={`relative aspect-square h-20 w-20 overflow-hidden rounded-xl border-2 transition-all 
                  ${
                    currentImage === url
                      ? "border-teal-500 shadow-lg scale-105"
                      : "border-slate-700 hover:border-slate-500"
                  }`}
                >
                  <img
                    src={url}
                    alt={`Thumbnail ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  {/* Overlay แสง เวลารูปถูกเลือก */}
                  {currentImage === url && (
                    <div className="absolute inset-0 bg-teal-500/10" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* รายละเอียดโปรเจกต์ */}
        <div className="prose prose-invert max-w-none mb-8">
          {" "}
          {/* ใช้ prose ของ tailwind/typography จะสวยกว่า */}
          <p className="text-slate-300 leading-relaxed text-lg">
            {Project.description}
          </p>
        </div>

        {/* Tech Stack*/}
        <div className="border-t border-slate-800 pt-6">
          <h3 className="text-sm font-semibold text-slate-500 mb-3 uppercase tracking-wider">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {Project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 text-xs font-medium text-teal-300 bg-teal-950/50 rounded-full border border-teal-900/50 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}