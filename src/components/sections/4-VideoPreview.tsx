const VideoPreview = () => (
  <section
    id="showAboutUs"
    className="bg-foreground min-h-[90vw] sm:min-h-screen flex justify-center items-center px-4 py-12 sm:py-10"
  >
    <div className="w-full max-w-[1546px] flex justify-center">
      <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[60%] bg-gray-100 rounded-lg shadow-lg overflow-hidden flex justify-center items-center aspect-video transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/_soJx6NFIsA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
);

export default VideoPreview;
