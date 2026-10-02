import { useState } from 'react';
import { NavigationProvider, useRouter } from './context/NavigationContext';
import Splash from './components/common/Splash';
import Header from './components/layout/Header';
import MobileMenu from './components/layout/MobileMenu';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Directory from './pages/Directory';
import Tradition from './pages/Tradition';
import PalkhiModal from './components/palkhi/PalkhiModal';
import { Palkhi } from './types';

function AppContent() {
  const { currentPath, isSplashActive, isSplashFadingOut, isLandingActive, dismissSplash } = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedPalkhi, setSelectedPalkhi] = useState<Palkhi | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      {/* Splash Screen */}
      {isSplashActive && <Splash isFadingOut={isSplashFadingOut} onDismiss={dismissSplash} />}

      {/* Main Landing/App Page Wrapper */}
      <div id="landing-page" className={(!isSplashActive || isLandingActive) ? 'active' : ''}>
        
        {/* Navigation Header */}
        <Header 
          activeSection={activeSection} 
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)} 
        />

        {/* Mobile Navigation Drawer */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />

        {/* Main Content Viewport with lightweight 250ms transition */}
        <main className="app-main-viewport">
          {currentPath === '/palkhis' ? (
            <div className="app-route-transition-wrap" key="route-palkhis">
              <Directory onSelectPalkhi={setSelectedPalkhi} />
            </div>
          ) : currentPath.startsWith('/tradition') ? (
            <div className="app-route-transition-wrap" key="route-tradition">
              <Tradition />
            </div>
          ) : (
            <div className="app-route-transition-wrap" key="route-home">
              <Home 
                onSelectPalkhi={setSelectedPalkhi} 
                setActiveSection={setActiveSection} 
              />
            </div>
          )}
        </main>

        {/* Floating Back to Top Button */}
        <button
          className="btn-back-to-top-float"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Go to Top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>

        {/* Main Footer */}
        <Footer />

      </div>

      {/* Palkhi Details Modal Overlay */}
      {selectedPalkhi && (
        <PalkhiModal 
          palkhi={selectedPalkhi} 
          onClose={() => setSelectedPalkhi(null)} 
        />
      )}
    </>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
