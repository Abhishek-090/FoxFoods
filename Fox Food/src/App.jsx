
import Header from './components/Header';
import Body from './components/Body';
import{ navBar }from './Data/header';
function App() {
  return (
    <>
      <Header {...navBar}/>
      <Body/>
       
    </>
  );
}
export default App;
