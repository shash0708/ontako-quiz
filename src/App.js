import Example from "./components/header";
 import Card from "./components/Card";
 import Qwe from "./components/qwe";
 import './App.css';
 function App() {
  const handleclick= () => {
    // Replace '/your-redirect-path' with the actual path you want to redirect to
    window.location.href = 'https://tailwindui.com/components#pricing';
  };
  return (
    <div className="App">
      
      <Example/>
      <div>
      <div className="flex p-6 items-end absolute top-200 right-0 justify-end">
    
  <p className="icon-button mr-10 text-2xl  bottom-10"></p>
  <button className="icon-button" onClick={handleclick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
      <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
    </svg>
  </button>
</div>

</div>
     <div className="app-container">  
       <Card/>
     
     <Qwe/>
     </div>
     
     </div>
    
  );
}

export default App;
