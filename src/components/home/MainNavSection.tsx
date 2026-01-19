import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Info, Building2, Users, BookOpen, Briefcase, GraduationCap, FileText, Handshake, UserCheck, Target, Lightbulb } from "lucide-react";

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
    label: "Về chúng tôi",
    href: "/gioi-thieu",
    icon: Info,
    submenu: [
      { label: "Giới thiệu chung", href: "/gioi-thieu", icon: Info },
      { label: "Sứ mệnh & Tầm nhìn", href: "/gioi-thieu#mission", icon: Target },
      { label: "Đội ngũ", href: "/gioi-thieu#team", icon: Users },
    ],
  },
  {
    label: "Kết nối DN",
    href: "/viec-lam",
    icon: Handshake,
    submenu: [
      { label: "Việc làm", href: "/viec-lam", icon: Briefcase },
      { label: "Doanh nghiệp đối tác", href: "/doanh-nghiep", icon: Building2 },
      { label: "Đăng tin tuyển dụng", href: "/dang-tin", icon: FileText },
    ],
  },
  {
    label: "Ứng viên",
    href: "/ung-vien",
    icon: UserCheck,
    submenu: [
      { label: "Tìm việc", href: "/viec-lam", icon: Briefcase },
      { label: "Tạo CV", href: "/tao-cv", icon: FileText },
      { label: "Hồ sơ ứng viên", href: "/ho-so", icon: Users },
    ],
  },
  {
    label: "Cẩm nang",
    href: "/cam-nang",
    icon: Lightbulb,
    submenu: [
      { label: "Kỹ năng cơ bản", href: "/cam-nang/ky-nang-co-ban", icon: BookOpen },
      { label: "Kỹ năng nâng cao", href: "/cam-nang/ky-nang-nang-cao", icon: GraduationCap },
      { label: "Bài viết", href: "/cam-nang/bai-viet", icon: FileText },
    ],
  },
];

const MainNavSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="relative z-40 -mt-6">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-background/95 backdrop-blur-md rounded-full shadow-xl border border-border/50 px-4 py-2">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-2 px-5 py-3 text-foreground font-medium hover:text-primary hover:bg-primary/5 rounded-full transition-all duration-200"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm tracking-wide">{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                        activeItem === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeItem === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-background border border-border rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45 rounded-tl" />
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors mx-2 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <subItem.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium">{subItem.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavSection;
