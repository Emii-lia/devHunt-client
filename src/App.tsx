import { AppProvider } from "./providers/app.provider"
import { AppRoute } from "./routes"

function App() {
  return (
    <AppProvider>
      <AppRoute/>
    </AppProvider>
  )
}

export default App
