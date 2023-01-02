import { QuoteProvider } from "./context/QuoteProvider"
import InsuraceApp from "./components/InsuraceApp"


function App() {

  return (
    <QuoteProvider>
      <InsuraceApp />
    </QuoteProvider>
  )
}

export default App
