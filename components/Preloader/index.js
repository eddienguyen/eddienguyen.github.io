function Preloader({ isLoading = false, ...props }) {
  return (
    <div
      className={`preloader fixed top-0 left-0 h-screen w-screen flex items-center justify-center bg-primary-black text-primary-white transition-all duration-500${
        isLoading ? "z-[601] opacity-100" : "-z-10 opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}

export default Preloader;
