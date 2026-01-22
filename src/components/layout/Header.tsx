import { Link, useLocation } from "react-router-dom";
import { User, Globe, Menu, X, Home, Info, Newspaper, Briefcase, Cpu, Brain, Users2, FileText, ChevronDown, ChevronRight, GraduationCap, Building2, UserCircle, Handshake, Lightbulb, Database, Shield, MessageSquare, Calendar, Heart, Award, Search, Bell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

  const toggleMobileSubmenu = (itemName: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setExpandedMobileItems([]);
  };

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

            {/* Mobile Menu Button - Using Sheet */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85vw] max-w-[400px] p-0">
                <SheetHeader className="p-4 border-b border-border bg-primary">
                  <SheetTitle className="flex items-center gap-3 text-primary-foreground">
                    <img src={uttLogo} alt="UTT" className="h-10 w-auto brightness-0 invert" />
                    <span className="text-sm font-medium">Menu</span>
                  </SheetTitle>
                </SheetHeader>
                
                <ScrollArea className="h-[calc(100vh-180px)]">
                  <div className="p-2">
                    {navLinks.map((link) => {
                      const IconComponent = link.icon;
                      const hasSubmenu = link.submenu && link.submenu.length > 0;
                      const isExpanded = expandedMobileItems.includes(link.name);
                      const isActive = location.pathname === link.path;
                      
                      if (hasSubmenu) {
                        return (
                          <Collapsible 
                            key={link.path}
                            open={isExpanded}
                            onOpenChange={() => toggleMobileSubmenu(link.name)}
                          >
                            <CollapsibleTrigger asChild>
                              <button
                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                                  isActive || isExpanded
                                    ? "bg-primary/10 text-primary" 
                                    : "text-foreground hover:bg-muted"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                    isActive || isExpanded ? "bg-primary text-primary-foreground" : "bg-muted"
                                  }`}>
                                    <IconComponent className="w-5 h-5" />
                                  </div>
                                  <span className="font-medium">{link.name}</span>
                                </div>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                              </button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4 pr-2 pb-2">
                              <div className="mt-1 ml-4 border-l-2 border-primary/20 pl-4 space-y-1">
                                {link.submenu?.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    onClick={closeMobileMenu}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                                  >
                                    <subItem.icon className="w-4 h-4" />
                                    <span className="text-sm">{subItem.label}</span>
                                  </Link>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      }
                      
                      return (
                        <Link
                          key={link.path}
                          to={link.path}
                          onClick={closeMobileMenu}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                            isActive 
                              ? "bg-primary/10 text-primary" 
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isActive ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="font-medium">{link.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </ScrollArea>

                {/* Mobile Bottom Actions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-background border-t border-border space-y-3">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium h-12">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Đăng Tin Tuyển Dụng
                  </Button>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="h-11">
                      <User className="w-4 h-4 mr-2" />
                      Đăng nhập
                    </Button>
                    <Button variant="outline" className="h-11">
                      <Globe className="w-4 h-4 mr-2" />
                      VI / EN
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop Only */}
      <nav className="bg-primary hidden lg:block py-2 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-1">
            {navLinks.map((link, index) => {
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
                    className={`relative flex items-center gap-1.5 px-4 py-2 text-xs font-medium tracking-wide transition-all duration-150 rounded-full ${
                      isActive 
                        ? "bg-primary text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)]" 
                        : "bg-white text-foreground shadow-[0_2px_8px_rgba(249,115,22,0.25)] hover:shadow-[0_4px_12px_rgba(249,115,22,0.4)]"
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-primary"}`} />
                    <span className="whitespace-nowrap">{link.name}</span>
                    {hasSubmenu && (
                      <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubmenu && activeDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 min-w-[240px] bg-background border border-border rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45 rounded-tl" />
                      {link.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="flex items-center gap-3 px-4 py-2.5 text-foreground hover:bg-muted hover:text-primary transition-colors mx-2 rounded-lg group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-b from-muted to-muted/50 border border-border/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] flex items-center justify-center group-hover:from-primary group-hover:to-primary group-hover:border-primary transition-all">
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
