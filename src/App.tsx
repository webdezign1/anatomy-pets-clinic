import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { BookingModal } from './components/BookingModal';

// Separate Dedicated Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DoctorsPage } from './pages/DoctorsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';

// Helper to resolve active page from URL (supports pathnames, file names, queries, and hashes)
function getInitialPage(): string {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase().replace('#', '');
  const params = new URLSearchParams(window.location.search);
  const queryPage = params.get('page')?.toLowerCase();

  const candidates = [queryPage, hash, path].filter(Boolean);

  for (const item of candidates) {
    if (!item) continue;
    if (item.includes('about')) return 'about';
    if (item.includes('service')) return 'services';
    if (item.includes('doctor') || item.includes('vet')) return 'doctors';
    if (item.includes('gallery')) return 'gallery';
    if (item.includes('contact')) return 'contact';
    if (item.includes('privacy')) return 'privacy';
  }

  return 'home';
}

export function App() {
  const [activePage, setActivePage] = useState<string>(getInitialPage);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);

  // Sync with browser back/forward buttons and hash navigation
  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Update URL and scroll to top on page change
  const navigateTo = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update browser URL without reloading
    const newHash = page === 'home' ? '' : `#${page}`;
    if (window.location.protocol.startsWith('http')) {
      const newPath = page === 'home' ? '/' : `/${page}`;
      try {
        window.history.pushState({ page }, '', newPath);
      } catch {
        window.location.hash = newHash;
      }
    } else {
      window.location.hash = newHash;
    }
  };

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-slate-800 relative selection:bg-teal-700 selection:text-white">
      {/* Header with Navigation */}
      <Header
        activePage={activePage}
        setActivePage={navigateTo}
        onOpenBooking={handleOpenBooking}
      />

      {/* Dedicated Page View */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onOpenBooking={handleOpenBooking}
            onNavigate={navigateTo}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onOpenBooking={handleOpenBooking}
            onNavigate={navigateTo}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage onOpenBooking={handleOpenBooking} />
        )}

        {activePage === 'doctors' && (
          <DoctorsPage onOpenBooking={handleOpenBooking} />
        )}

        {activePage === 'gallery' && (
          <GalleryPage />
        )}

        {activePage === 'contact' && (
          <ContactPage />
        )}

        {activePage === 'privacy' && (
          <PrivacyPage />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Mobile Sticky Bottom Action Bar */}
      <MobileBottomBar onOpenBooking={handleOpenBooking} />

      {/* Universal Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;
