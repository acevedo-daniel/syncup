import AppLayout from "./app/layouts/AppLayout";
import Navbar from "./shared/components/Navbar";
import Home from "./modules/chats/pages/Home";

export default function App() {
  return (
    <>
      <Navbar />
      <AppLayout>
        <Home />
      </AppLayout>
    </>
  );
}
