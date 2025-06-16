import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ToastContainer } from "react-toastify";
import { ScrollArea } from "./ui/scroll-area";

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <header className="bg-primary-800 text-white p-4 shadow-md h-[68px]">
        <Navbar />
      </header>

      {/* Main Content - flex-grow to take remaining space */}
      <main className="flex-grow overflow-auto p-4">
        <ScrollArea className="h-full">
          <Outlet />
        </ScrollArea>
      </main>

      <ToastContainer />

      <footer className="bg-primary-900 text-white p-4 h-[56px]">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
