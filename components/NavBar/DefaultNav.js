function DefaultNav(props) {
  return (
    <div className="default-nav">
      {props.children}
      <style jsx>{`
        .default-nav {
          position: absolute;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 50px;
        }
      `}</style>
    </div>
  );
}

export default DefaultNav;