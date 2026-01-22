import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Info, Newspaper, Briefcase, Cpu, Brain, Users2, FileText, Building2, GraduationCap, UserCircle, Handshake, Lightbulb, Calendar, Database, Shield, MessageSquare, Heart, Award } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  submenu?: {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];
}

const navItems: NavItem[] = [
  {
    label: "Bản Tin",
    href: "/tin-tuc",
    icon: Newspaper,
    submenu: [
      { label: "Tin tuyển dụng", href: "/tin-tuc?category=tuyen-dung", icon: Briefcase },
      { label: "Xu hướng nghề nghiệp", href: "/tin-tuc?category=xu-huong", icon: Lightbulb },
      { label: "Sự kiện", href: "/tin-tuc?category=su-kien", icon: Calendar },
    ],
  },
  {
    label: "Kết Nối Việc Làm",
    href: "/viec-lam",
    icon: Briefcase,
    submenu: [
      { label: "Việc làm và tuyển dụng", href: "/viec-lam", icon: Briefcase },
      { label: "Hồ sơ năng lực cá nhân", href: "/ung-vien", icon: UserCircle },
      { label: "Thực tập & Học kỳ doanh nghiệp", href: "/viec-lam?tab=thuc-tap", icon: GraduationCap },
    ],
  },
  {
    label: "Kỹ Năng & AI",
    href: "/ky-nang",
    icon: Brain,
    submenu: [
      { label: "Kỹ năng làm việc & kỹ năng mềm", href: "/ky-nang", icon: MessageSquare },
      { label: "AI ứng dụng trong học tập & công việc", href: "/ky-nang?tab=ai", icon: Brain },
      { label: "Hội thảo – Tập huấn – Chia sẻ", href: "/ky-nang?tab=hoi-thao", icon: Calendar },
    ],
  },
  {
    label: "Kết Nối Cộng Đồng",
    href: "/cong-dong",
    icon: Users2,
    submenu: [
      { label: "Mạng lưới Cựu sinh viên & Doanh nhân", href: "/cong-dong", icon: Users2 },
      { label: "Câu lạc bộ & Hoạt động sinh viên", href: "/cong-dong?tab=clb", icon: Heart },
      { label: "Quỹ đầu tư & Học bổng", href: "/cong-dong?tab=quy", icon: Award },
    ],
  },
];

const MainNavSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="relative z-40 -mt-8">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-background/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 px-6 py-3">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;
              
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveItem(item.label)}
                  onMouseLeave={() => setActiveItem(null)}
                >
                  <Link
                    to={item.href}
                    className={`flex items-center gap-2 px-4 md:px-5 py-2.5 font-medium rounded-full transition-all duration-200 shadow-sm ${
                      activeItem === item.label 
                        ? "text-primary-foreground bg-primary shadow-md" 
                        : "text-foreground bg-muted/50 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
                    }`}
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    <item.icon className={`w-4 h-4 ${activeItem === item.label ? "text-primary-foreground" : "text-primary"}`} />
                    <span className="text-xs md:text-sm tracking-wide whitespace-nowrap">{item.label}</span>
                    {hasSubmenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeItem === item.label ? "rotate-180 text-primary-foreground" : "text-muted-foreground"
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubmenu && activeItem === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[260px] bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.15)] py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border/50 rotate-45 rounded-tl" />
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors mx-2 rounded-xl group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:shadow-md transition-all">
                            <subItem.icon className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                          </div>
                          <span className="text-sm font-medium">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavSection;
