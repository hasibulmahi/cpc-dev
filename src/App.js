import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./Hooks/AuthProvider";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    // Route Properties
    <BrowserRouter>
      {/* Context API */}
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
