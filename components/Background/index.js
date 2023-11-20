import { black } from "styles/theme/variables";

function Background(props) {
  return (
    <div className="background bg-primary-white dark:bg-primary-black">
      <style jsx>{`
        .background {
          position: fixed;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          z-index: -999;
        }
      `}</style>
    </div>
  );
}

export default Background;
