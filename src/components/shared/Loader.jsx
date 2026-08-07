import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div
      style={{
        width:"100%",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        paddingTop:"30px"
      }}
    >
      <TailSpin
        height="80"
        width="80"
        color="#2563eb"
        ariaLabel="tail-spin-loading"
      />
    </div>
  );
}

export default Loader;
