import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../shared/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt={t('site.name')} className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">ApexBart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about">{t('nav.about')}</Link>
            <Link href="/services">{t('nav.services')}</Link>
            <Link href="/projects">{t('nav.projects')}</Link>
            <LanguageSelector />
            <Link href="/contact" className="btn-primary">{t('nav.contact')}</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about">{t('nav.about')}</Link>
              <Link href="/services">{t('nav.services')}</Link>
              <Link href="/projects">{t('nav.projects')}</Link>
              <LanguageSelector />
              <Link href="/contact" className="btn-primary inline-block text-center">
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;