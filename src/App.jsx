import Root from "./companents/root";
import FooterComp from "./pages/home/companents/FooterComp";

function App() {
  return (
    <>
      <Root />
      <div className="footer__app__comp max-w-[1140px] w-[100%]  m-auto ">
        <FooterComp/>
      </div>
    </>
  );
}

export default App;
