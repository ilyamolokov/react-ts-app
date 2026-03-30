import { Toaster } from "@/ui/sonner";
import { AuthPage } from "./pages/auth-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-full h-screen font-inter">
        <AuthPage />
        {/*<ProductsPage />*/}
      </div>
      <Toaster position="top-center" />
    </QueryClientProvider>
  );
}

export default App;
