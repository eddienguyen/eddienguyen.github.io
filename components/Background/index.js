import Container from "@/components/Container";
import { border } from "@/styles/theme/variables";

/**
 *
 * @param {Object} props - Background properties
 * @param {string} [props.pos]=('fixed'|'absolute') - Background properties
 * @returns {import('react').ComponentElement}
 */
function Background({ pos = "fixed", ...props }) {
  return (
    <div className="background bg-primary-white dark:bg-primary-black">
      <Container className="w-full h-full">
        <table className="w-full h-full table border-collapse">
          <tbody className="table-row-group">
            <tr className="table-row">
              <td className="col table-cell w-1/4" />
              <td className="col table-cell w-1/4" />
              <td className="col table-cell w-1/4" />
              <td className="col table-cell w-1/4" />
            </tr>
          </tbody>
        </table>
      </Container>
      <style jsx>{`
        .background {
          position: ${pos};
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
          z-index: -999;
        }
        .table {
          opacity: 0.1;
        }
        .col {
          border-left: 1px solid ${border};
          border-right: 1px solid ${border};
        }
      `}</style>
    </div>
  );
}

export default Background;
