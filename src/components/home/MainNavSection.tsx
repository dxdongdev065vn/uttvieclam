import { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, Users, BookOpen, Newspaper, Phone, Info } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    label: "Việc Làm",
    href: "/viec-lam",
    icon: Briefcase,
  },
  {
    label: "Ứng Viên",
    href: "/ung-vien",
    icon: Users,
  },
  {
    label: "Cẩm Nang",
    href: "/cam-nang",
    icon: BookOpen,
  },
  {
    label: "Tin Tức",
    href: "/tin-tuc",
    icon: Newspaper,
  },
  {
    label: "Giới Thiệu",
    href: "/gioi-thieu",
    icon: Info,
  },
  {
    label: "Liên Hệ",
    href: "/lien-he",
    icon: Phone,
  },
];

const MainNavSection = () => {
  return (
    <nav className="relative z-40 -mt-6">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-background/95 backdrop-blur-md rounded-full shadow-xl border border-border/50 px-6 py-2.5">
          <ul className="flex items-center gap-1 md:gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-2.5 font-medium rounded-full transition-all duration-200 text-foreground hover:text-primary hover:bg-primary/5"
                  style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-xs md:text-sm tracking-wide">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavSection;
