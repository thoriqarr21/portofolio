/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { useParams } from "react-router-dom";
const ProjectImageCarousel = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const selectedProject = storedProjects.find((p) => String(p.id) === id);

    if (selectedProject) {
      const enhancedProject = {
        ...selectedProject,
        Img: Array.isArray(selectedProject.Img)
          ? selectedProject.Img
          : [selectedProject.Img].filter(Boolean),
      };

      setProject(enhancedProject);
    }
  }, [id]);

  const images = Array.isArray(project?.Img)
    ? project.Img
    : [project?.Img].filter(Boolean);

  useEffect(() => {
    if (!isLightboxOpen && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isLightboxOpen, images.length]);

  const handlePrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handleLightboxPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") handleLightboxPrevious();
      if (e.key === "ArrowRight") handleLightboxNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxIndex, images.length]);

  // Debug log
  useEffect(() => {
    console.log("Project data:", project);
    console.log("Images array:", images);
  }, [project, images]);

  if (!project) {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center h-64">
        <p className="text-white/50">No project data</p>
      </div>
    );
  }

  if (!images || images.length === 0 || !images[0]) {
    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center h-64">
        <p className="text-white/50">No images available</p>
      </div>
    );
  }

  return (
    <>
      {/* Image Carousel */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Main Image */}
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`${project.Title} - Image ${currentIndex + 1}`}
            className="w-full object-cover transform transition-transform duration-700 will-change-transform group-hover:scale-105"
            onLoad={() => setIsImageLoaded(true)}
            loading="lazy"
          />
        </div>

        {/* View Button */}
        <button
          onClick={() => openLightbox(currentIndex)}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/10"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </button>

        {/* Navigation Arrows - Only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-md rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(index);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-blue-500"
                    : "w-2 h-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300 rounded-2xl pointer-events-none z-10" />
      </div>

      {/* Thumbnail Preview - Only show if multiple images */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3" style={{ marginTop: "1rem" }}>
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                index === currentIndex
                  ? "border-blue-500 scale-105"
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {index === currentIndex && (
                <div className="absolute inset-0 bg-blue-500/20" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Project Title */}
          <div className="absolute top-4 left-4 z-50 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm">
            {project.Title}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handleLightboxPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              <button
                onClick={handleLightboxNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>
            </>
          )}

          {/* Main Lightbox Image */}
          <img
            src={images[lightboxIndex]}
            alt={`${project.Title} - Full view ${lightboxIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl"
          />

          {/* Thumbnail Navigation in Lightbox */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex space-x-2 bg-black/50 backdrop-blur-md p-3 rounded-2xl max-w-full overflow-x-auto">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                    index === lightboxIndex
                      ? "border-blue-500 scale-110"
                      : "border-white/20 hover:border-white/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectImageCarousel;
