import NavBar from "./components/NavBar/NavBar";
import Map from "./components/Map/Map";
import '../src/App.css'
import Request from "./components/request/Request";
// import RequestSend from "./components/requestSend/RequestSend";
export default function App() {
  return (
    <div className="App relative">
      <Request/>
      <NavBar/>
     <Map/>
    </div>
  )
}
