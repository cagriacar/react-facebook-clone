import "./App.css";
import  { Header, Sidebar, Feed, Widgets, Login} from './components'
import { useStateValue } from './components/authentication/stateprovider/StateProvider'

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">

      {/* Login İşlemi */}
      { !user ? ( <Login /> ) : (
<>
          {/* Header */}
      <Header />

      {/* App Body */}
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
        </>
      )}
   


    </div>
  );
}

export default App;
