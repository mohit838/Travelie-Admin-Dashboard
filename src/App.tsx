import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./app/router";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Toast system */}
      <Toaster richColors position="top-center" closeButton />

      {/* Application Router */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
