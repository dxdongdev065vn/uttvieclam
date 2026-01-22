import { Link, useLocation } from "react-router-dom";
import { User, Globe, Menu, X, Home, Info, Newspaper, Briefcase, Cpu, Brain, Users2, FileText, ChevronDown, GraduationCap, Building2, UserCircle, Handshake, Lightbulb, Database, Shield, MessageSquare, Calendar, Heart, Award } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import uttLogo from "@/assets/utt-logo-new.png";

interface NavItem {
  name: string;
  path: string;
  icon: React.ElementType;
  submenu?: {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];
}

const navLinks: NavItem[] = [
  { name: "Trang Chủ", path: "/", icon: Home },
  { 
    name: "Giới Thiệu", 
    path: "/gioi-thieu", 
    icon: Info,
    submenu: [
      { label: "Giới thiệu về trường", href: "/gioi-thieu", icon: Building2 },
      { label: "Khoa, ngành đào tạo", href: "/gioi-thieu?tab=khoa-nganh", icon: GraduationCap },
      { label: "Lãnh đạo nhà trường", href: "/gioi-thieu?tab=lanh-dao", icon: UserCircle },
      { label: "Trung tâm hướng nghiệp", href: "/gioi-thieu?tab=trung-tam", icon: Handshake },
    ]
  },
  { 
    name: "Bản Tin", 
    path: "/tin-tuc", 
    icon: Newspaper,
    submenu: [
      { label: "Tin tuyển dụng", href: "/tin-tuc?category=tuyen-dung", icon: Briefcase },
      { label: "Xu hướng nghề nghiệp", href: "/tin-tuc?category=xu-huong", icon: Lightbulb },
      { label: "Sự kiện", href: "/tin-tuc?category=su-kien", icon: Calendar },
    ]
  },
  { 
    name: "Kết Nối Việc Làm", 
    path: "/viec-lam", 
    icon: Briefcase,
    submenu: [
      { label: "Việc làm và tuyển dụng", href: "/viec-lam", icon: Briefcase },
      { label: "Hồ sơ năng lực cá nhân", href: "/ung-vien", icon: UserCircle },
      { label: "Thực tập & Học kỳ doanh nghiệp", href: "/viec-lam?tab=thuc-tap", icon: GraduationCap },
    ]
  },
  { 
    name: "Công Nghệ & Đổi Mới", 
    path: "/cong-nghe", 
    icon: Cpu,
    submenu: [
      { label: "Danh mục công nghệ & giải pháp", href: "/cong-nghe", icon: Database },
      { label: "Đặt hàng nghiên cứu & đổi mới", href: "/cong-nghe?tab=dat-hang", icon: Lightbulb },
      { label: "Chuyển giao công nghệ & sở hữu trí tuệ", href: "/cong-nghe?tab=chuyen-giao", icon: Shield },
    ]
  },
  { 
    name: "Kỹ Năng & AI", 
    path: "/ky-nang", 
    icon: Brain,
    submenu: [
      { label: "Kỹ năng làm việc & kỹ năng mềm", href: "/ky-nang", icon: MessageSquare },
      { label: "AI ứng dụng trong học tập & công việc", href: "/ky-nang?tab=ai", icon: Brain },
      { label: "Hội thảo – Tập huấn – Chia sẻ", href: "/ky-nang?tab=hoi-thao", icon: Calendar },
    ]
  },
  { 
    name: "Kết Nối Cộng Đồng", 
    path: "/cong-dong", 
    icon: Users2,
    submenu: [
      { label: "Mạng lưới Cựu sinh viên & Doanh nhân", href: "/cong-dong", icon: Users2 },
      { label: "Câu lạc bộ & Hoạt động sinh viên", href: "/cong-dong?tab=clb", icon: Heart },
      { label: "Quỹ đầu tư & Học bổng", href: "/cong-dong?tab=quy", icon: Award },
    ]
  },
  { name: "Tạo CV", path: "/tao-cv", icon: FileText },
];

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm">
      {/* Top Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={uttLogo} 
              alt="Trường Đại học Công nghệ GTVT" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-md px-4 py-2 text-sm font-medium">
              Đăng Tin Tuyển Dụng
            </Button>
            
            <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
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
      <nav className="bg-primary border-b-2 border-primary">
        <div className="container mx-auto px-4">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center gap-0.5">
            {navLinks.map((link) => {
              const IconComponent = link.icon;
              const hasSubmenu = link.submenu && link.submenu.length > 0;
              const isActive = location.pathname === link.path;
              
              return (
                <div 
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`relative flex items-center gap-1.5 px-3 py-3 text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive 
                        ? "text-primary-foreground bg-primary-foreground/15 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:bg-primary-foreground" 
                        : "text-primary-foreground/85 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                    <span className="whitespace-nowrap">{link.name}</span>
                    {hasSubmenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubmenu && activeDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 min-w-[240px] bg-background border border-border rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45 rounded-tl" />
                      {link.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-foreground hover:bg-muted hover:text-primary transition-colors mx-2 rounded-lg group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <subItem.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <span className="text-sm font-medium">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {navLinks.map((link) => {
                const IconComponent = link.icon;
                const hasSubmenu = link.submenu && link.submenu.length > 0;
                
                return (
                  <div key={link.path}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium tracking-wide rounded-lg transition-colors ${
                        location.pathname === link.path 
                          ? "text-primary-foreground bg-primary-foreground/15 border-l-4 border-primary-foreground" 
                          : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      }`}
                      onClick={() => !hasSubmenu && setIsMenuOpen(false)}
                    >
                      <IconComponent className="w-5 h-5" />
                      {link.name}
                    </Link>
                    {hasSubmenu && (
                      <div className="ml-8 mt-1 space-y-1">
                        {link.submenu?.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className="flex items-center gap-2 px-4 py-2 text-xs text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <subItem.icon className="w-4 h-4" />
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-4 mt-4 border-t border-primary-foreground/20 space-y-2">
                <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium">
                  Đăng Tin Tuyển Dụng
                </Button>
                <Button variant="outline" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <User className="w-4 h-4 mr-2" />
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
