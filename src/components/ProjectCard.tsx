import React from "react";
import { motion } from "framer-motion";
import { AiFillEye } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  previewLink: string;
  githubLink?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial="hidden"
      animate="visible"
      className="mt-8 border-[#D1D5DB] border   md:px-4 px-3 py-4 rounded-[6px]"
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <a
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 py-2 bg-[#1E293B] text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            <AiFillEye className="text-lg" />
            <span>Preview</span>
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <FaGithub className="text-2xl" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
