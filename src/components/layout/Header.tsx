import { Link, useLocation } from "react-router-dom";
import { User, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Trang Chủ", path: "/" },
  { name: "Giới Thiệu", path: "/gioi-thieu" },
  { name: "Cơ Hội Nghề Nghiệp", path: "/viec-lam" },
  { name: "Cẩm Nang Nghề Nghiệp", path: "/cam-nang" },
  { name: "Liên Hệ", path: "/lien-he" },
  { name: "Tạo CV", path: "/tao-cv" },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">UTT</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Bộ Giao Thông Vận Tải</p>
              <p className="text-sm md:text-base font-bold text-foreground leading-tight">TRƯỜNG ĐẠI HỌC CÔNG NGHỆ GTVT</p>
              <p className="text-[10px] text-muted-foreground">UNIVERSITY OF TRANSPORT TECHNOLOGY</p>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Link to="/viec-lam">
              <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">
                Join Our Talent Network
              </Button>
            </Link>
            
            <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2 text-foreground">
              <User className="w-4 h-4" />
              <span>Đăng nhập</span>
            </Button>

            <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground">
              <Globe className="w-4 h-4" />
              <span className="font-medium text-foreground">VI</span>
              <span>/</span>
              <span>EN</span>
            </div>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-primary">
        <div className="container mx-auto px-4">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`utt-nav-link ${
                  location.pathname === link.path ? "active bg-primary-foreground/10" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 text-primary-foreground rounded-lg transition-colors ${
                    location.pathname === link.path 
                      ? "bg-primary-foreground/20" 
                      : "hover:bg-primary-foreground/10"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary-foreground/20">
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Đăng nhập
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
