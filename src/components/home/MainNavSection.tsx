import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Briefcase, Users, BookOpen, Newspaper, Target, Building2, FileText, PenTool, GraduationCap, MessageSquare, TrendingUp, Calendar, PenSquare, Lightbulb, Star } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  submenu: {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];
}

const navItems: NavItem[] = [
  {
    label: "Việc Làm",
    href: "/viec-lam",
    icon: Briefcase,
    submenu: [
      { label: "Tìm việc làm", href: "/viec-lam", icon: Briefcase },
      { label: "Việc làm theo ngành", href: "/viec-lam?filter=nganh", icon: Target },
      { label: "Doanh nghiệp tuyển dụng", href: "/viec-lam?filter=doanh-nghiep", icon: Building2 },
    ],
  },
  {
    label: "Ứng Viên",
    href: "/ung-vien",
    icon: Users,
    submenu: [
      { label: "Danh sách ứng viên", href: "/ung-vien", icon: Users },
      { label: "Tạo CV online", href: "/ung-vien?action=tao-cv", icon: PenTool },
      { label: "Hồ sơ của tôi", href: "/ung-vien?action=ho-so", icon: FileText },
    ],
  },
  {
    label: "Cẩm Nang",
    href: "/cam-nang",
    icon: BookOpen,
    submenu: [
      { label: "Tất cả bài viết", href: "/cam-nang", icon: BookOpen },
      { label: "Kỹ năng cơ bản", href: "/cam-nang?category=ky-nang-co-ban", icon: FileText },
      { label: "Kỹ năng nâng cao", href: "/cam-nang?category=ky-nang-nang-cao", icon: GraduationCap },
      { label: "Phỏng vấn thành công", href: "/cam-nang?category=phong-van", icon: MessageSquare },
    ],
  },
  {
    label: "Tin Tức",
    href: "/tin-tuc",
    icon: Newspaper,
    submenu: [
      { label: "Tin tuyển dụng", href: "/tin-tuc?category=tuyen-dung", icon: Briefcase },
      { label: "Xu hướng nghề nghiệp", href: "/tin-tuc?category=xu-huong", icon: TrendingUp },
      { label: "Sự kiện", href: "/tin-tuc?category=su-kien", icon: Calendar },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    icon: PenSquare,
    submenu: [
      { label: "Tất cả bài viết", href: "/blog", icon: PenSquare },
      { label: "Chia sẻ kinh nghiệm", href: "/blog?category=chia-se", icon: Lightbulb },
      { label: "Hỏi đáp nghề nghiệp", href: "/blog?category=hoi-dap", icon: MessageSquare },
      { label: "Review công ty", href: "/blog?category=review", icon: Star },
    ],
  },
];

const MainNavSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="relative z-40 -mt-6">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-background backdrop-blur-md rounded-full shadow-xl border border-border px-6 py-2.5">
          <ul className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveItem(item.label)}
                onMouseLeave={() => setActiveItem(null)}
              >
                <Link
                  to={item.href}
                  className={`flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2.5 font-medium rounded-full transition-all duration-200 ${
                    activeItem === item.label 
                      ? "text-primary bg-primary/10" 
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs md:text-sm tracking-wide">{item.label}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${
                      activeItem === item.label ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </Link>

                {/* Dropdown Menu */}
                {activeItem === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-background border border-border rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45 rounded-tl" />
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.label}
                        to={subItem.href}
                        className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors mx-2 rounded-lg group"
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
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavSection;
