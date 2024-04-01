import Pages from "./pages/Pages";
import UserProvider from "./context/userContext"

function App() {
  return (
    <>
    <UserProvider>
       <Pages />
    </UserProvider>
      
    </>
  )
}

export default App;
