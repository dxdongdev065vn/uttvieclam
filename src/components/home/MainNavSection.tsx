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
  { label: "Trang Chủ", href: "/", icon: Home },
  {
    label: "Giới Thiệu",
    href: "/gioi-thieu",
    icon: Info,
    submenu: [
      { label: "Giới thiệu về trường", href: "/gioi-thieu", icon: Building2 },
      { label: "Khoa, ngành đào tạo", href: "/gioi-thieu?tab=khoa-nganh", icon: GraduationCap },
      { label: "Lãnh đạo nhà trường", href: "/gioi-thieu?tab=lanh-dao", icon: UserCircle },
      { label: "Trung tâm hướng nghiệp", href: "/gioi-thieu?tab=trung-tam", icon: Handshake },
    ],
  },
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
    label: "Công Nghệ & Đổi Mới",
    href: "/cong-nghe",
    icon: Cpu,
    submenu: [
      { label: "Danh mục công nghệ & giải pháp", href: "/cong-nghe", icon: Database },
      { label: "Đặt hàng nghiên cứu & đổi mới", href: "/cong-nghe?tab=dat-hang", icon: Lightbulb },
      { label: "Chuyển giao công nghệ & sở hữu trí tuệ", href: "/cong-nghe?tab=chuyen-giao", icon: Shield },
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
  { label: "Tạo CV", href: "/tao-cv", icon: FileText },
];

const MainNavSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="relative z-40 -mt-6">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-background backdrop-blur-md rounded-full shadow-xl border border-border px-4 py-2">
          <ul className="flex items-center gap-0.5">
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
                    className={`flex items-center gap-1 px-2.5 md:px-3 py-2 font-medium rounded-full transition-all duration-200 ${
                      activeItem === item.label 
                        ? "text-primary bg-primary/10" 
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                    style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                  >
                    <item.icon className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[10px] md:text-xs tracking-wide whitespace-nowrap">{item.label}</span>
                    {hasSubmenu && (
                      <ChevronDown
                        className={`w-3 h-3 text-muted-foreground transition-transform duration-200 ${
                          activeItem === item.label ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasSubmenu && activeItem === item.label && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[240px] bg-background border border-border rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45 rounded-tl" />
                      {item.submenu?.map((subItem) => (
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
