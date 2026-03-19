import { Outlet, ScrollRestoration } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Root() {
  return (
    <div 
      className="min-h-screen antialiased" 
      style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale'
      }}
    >
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
