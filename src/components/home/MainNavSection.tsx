import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Home, Info, Building2, Users, BookOpen, Phone, Briefcase, GraduationCap, FileText, Mail, MapPin, HelpCircle } from "lucide-react";

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
    label: "Trang chủ",
    href: "/",
    icon: Home,
  },
  {
    label: "Về chúng tôi",
    href: "/gioi-thieu",
    icon: Info,
    submenu: [
      { label: "Giới thiệu chung", href: "/gioi-thieu", icon: Info },
      { label: "Sứ mệnh & Tầm nhìn", href: "/gioi-thieu#mission", icon: GraduationCap },
      { label: "Đội ngũ", href: "/gioi-thieu#team", icon: Users },
    ],
  },
  {
    label: "Kết nối DN",
    href: "/viec-lam",
    icon: Building2,
    submenu: [
      { label: "Việc làm", href: "/viec-lam", icon: Briefcase },
      { label: "Doanh nghiệp đối tác", href: "/doanh-nghiep", icon: Building2 },
      { label: "Đăng tin tuyển dụng", href: "/dang-tin", icon: FileText },
    ],
  },
  {
    label: "Ứng viên",
    href: "/ung-vien",
    icon: Users,
    submenu: [
      { label: "Tìm việc", href: "/viec-lam", icon: Briefcase },
      { label: "Tạo CV", href: "/tao-cv", icon: FileText },
      { label: "Hồ sơ ứng viên", href: "/ho-so", icon: Users },
    ],
  },
  {
    label: "Cẩm nang",
    href: "/cam-nang",
    icon: BookOpen,
    submenu: [
      { label: "Kỹ năng cơ bản", href: "/cam-nang/ky-nang-co-ban", icon: BookOpen },
      { label: "Kỹ năng nâng cao", href: "/cam-nang/ky-nang-nang-cao", icon: GraduationCap },
      { label: "Bài viết", href: "/cam-nang/bai-viet", icon: FileText },
    ],
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
    icon: Phone,
    submenu: [
      { label: "Thông tin liên hệ", href: "/lien-he", icon: Phone },
      { label: "Gửi email", href: "/lien-he#email", icon: Mail },
      { label: "Địa chỉ", href: "/lien-he#address", icon: MapPin },
      { label: "Hỗ trợ", href: "/lien-he#support", icon: HelpCircle },
    ],
  },
];

const MainNavSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="bg-primary shadow-lg relative z-40">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-0">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveItem(item.label)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <Link
                to={item.href}
                className="flex items-center gap-2 px-5 py-4 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.submenu && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      activeItem === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown Menu */}
              {item.submenu && activeItem === item.label && (
                <div className="absolute top-full left-0 min-w-[220px] bg-background border border-border rounded-lg shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      <subItem.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm">{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MainNavSection;
