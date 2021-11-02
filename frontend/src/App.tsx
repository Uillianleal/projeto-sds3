import DataTable from "components/DataTable";
import NaveBar from "components/NaveBar";
import Footer from "components/NaveBar/Footer";

function App() {
  return (
    <>
      <NaveBar />
      <div className = "container">
        <h1 className="text-primary">Olá mundo!</h1>
        
        <DataTable/>
      </div>
     <Footer/>
    </>
  );
}

export default App;
