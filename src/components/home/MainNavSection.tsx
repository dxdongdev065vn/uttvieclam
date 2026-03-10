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
const navItems: NavItem[] = [{
  label: "Bản Tin",
  href: "/tin-tuc",
  icon: Newspaper,
  submenu: [{
    label: "Tin tuyển dụng",
    href: "/tin-tuc?category=tuyen-dung",
    icon: Briefcase
  }, {
    label: "Xu hướng nghề nghiệp",
    href: "/tin-tuc?category=xu-huong",
    icon: Lightbulb
  }, {
    label: "Sự kiện",
    href: "/tin-tuc?category=su-kien",
    icon: Calendar
  }]
}, {
  label: "Kết Nối Việc Làm",
  href: "/viec-lam",
  icon: Briefcase,
  submenu: [{
    label: "Việc làm và tuyển dụng",
    href: "/viec-lam",
    icon: Briefcase
  }, {
    label: "Hồ sơ năng lực cá nhân",
    href: "/ung-vien",
    icon: UserCircle
  }, {
    label: "Thực tập & Học kỳ doanh nghiệp",
    href: "/viec-lam?tab=thuc-tap",
    icon: GraduationCap
  }]
}, {
  label: "Kỹ Năng & AI",
  href: "/ky-nang",
  icon: Brain,
  submenu: [{
    label: "Kỹ năng làm việc & kỹ năng mềm",
    href: "/ky-nang",
    icon: MessageSquare
  }, {
    label: "AI ứng dụng trong học tập & công việc",
    href: "/ky-nang?tab=ai",
    icon: Brain
  }, {
    label: "Hội thảo – Tập huấn – Chia sẻ",
    href: "/ky-nang?tab=hoi-thao",
    icon: Calendar
  }]
}, {
  label: "Kết Nối Hệ Sinh Thái",
  href: "/cong-dong",
  icon: Users2,
  submenu: [{
    label: "Mạng lưới Cựu sinh viên & Doanh nhân",
    href: "/cong-dong",
    icon: Users2
  }, {
    label: "Câu lạc bộ & Hoạt động sinh viên",
    href: "/cong-dong?tab=clb",
    icon: Heart
  }, {
    label: "Quỹ đầu tư & Học bổng",
    href: "/cong-dong?tab=quy",
    icon: Award
  }]
}];
const MainNavSection = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return <nav className="relative z-40 -mt-8">
      <div className="container mx-auto px-4 flex justify-center">
        
      </div>
    </nav>;
};
export default MainNavSection;