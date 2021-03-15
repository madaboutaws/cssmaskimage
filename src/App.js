import './App.css';

function App() {
  return (
    <div className="App">
      <img src="https://i.pinimg.com/originals/7a/63/55/7a6355f7604c03b428883231c1c70b71.png" alt="spiderman"></img>
      <div style={{
        width: "100px",
        height: "100px",
        crossOrigin: "anonymous",
        maskImage: "url('https://i.pinimg.com/originals/7a/63/55/7a6355f7604c03b428883231c1c70b71.png')",
        WebkitMaskImage: "url('https://i.pinimg.com/originals/7a/63/55/7a6355f7604c03b428883231c1c70b71.png')"
      }}></div>
    </div>
  );
}

export default App;
