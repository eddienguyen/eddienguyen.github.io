import { black, headerHeight } from "@/styles/theme/variables";

function Section(props) {
  const {className: _class, ..._props} = props;
  return (
    <section className={`app-section ${_class}`} {..._props}>
      {props.children}
      <style jsx>{`
        .app-section {
          // background-color: ${black}; // set background here cause the after pseudo in anchor not showing when hover

          &.first {
            padding-top: ${headerHeight}px;
          }
        }
      `}</style>
    </section>
  );
}

export default Section;
