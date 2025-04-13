
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Brain, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Skills Assessment', path: '/skills' },
    { label: 'Career Paths', path: '/careers' },
    { label: 'Resume Builder', path: '/resume' },
    { label: 'Interview Prep', path: '/interview' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-advisor-purple" />
          <span className="font-bold text-xl">
            <span className="gradient-text">Career</span>AI
          </span>
        </Link>

        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
            
            {mobileMenuOpen && (
              <div className="absolute top-16 left-0 right-0 bg-white shadow-md">
                <nav className="flex flex-col py-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="px-6 py-3 hover:bg-muted"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="px-4 py-3">
                    <Button className="w-full btn-primary">Get Started</Button>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button className="hidden md:flex btn-primary">Get Started</Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
