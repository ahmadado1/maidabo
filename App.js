import { NavigationContainer } from "@react-navigation/native"
import { StackNav } from "./Screens/StackNav"
import { AppProvider } from "./variante/Global"

export default function App () {
  return(
    <AppProvider>
        <NavigationContainer>
          <StackNav/>
        </NavigationContainer>
    </AppProvider>
  )
}