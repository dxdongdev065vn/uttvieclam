import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Target, Eye, Lightbulb, GraduationCap, Users, Building2, Award, CheckCircle, Sparkles, School, BookOpen, UserCog, Handshake, Briefcase, Globe, FlaskConical, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutCampus from "@/assets/about-campus.jpg";
import aboutStudents from "@/assets/about-students.jpg";
const aboutButtons = [{
  id: "intro",
  label: "Giới thiệu về trường",
  icon: School
}, {
  id: "faculties",
  label: "Khoa, ngành đào tạo",
  icon: BookOpen
}, {
  id: "leaders",
  label: "Lãnh đạo nhà trường",
  icon: UserCog
}, {
  id: "center",
  label: "Trung tâm hợp tác Doanh Nghiệp và Khởi Nghiệp Sáng Tạo",
  icon: Handshake
}];

// Content data for each section
const sectionContent = {
  intro: {
    image: aboutCampus,
    imageAlt: "Khuôn viên ĐH Công nghệ GTVT",
    stat1: {
      value: "79+",
      label: "Năm đào tạo",
      icon: Award
    },
    stat2: {
      value: "50K+",
      label: "Sinh viên",
      icon: Users
    },
    badge: {
      title: "ĐH Công nghệ GTVT",
      subtitle: "Việc làm & Tuyển dụng"
    },
    cards: [{
      icon: Target,
      title: "Sứ mạng",
      badge: "Core",
      badgeColor: "primary",
      items: ["Cung cấp nguồn nhân lực chất lượng cao", "Phục vụ sự phát triển của ngành GTVT", "Hỗ trợ phát triển đất nước"]
    }, {
      icon: Eye,
      title: "Tầm nhìn 2030",
      badge: "Vision",
      badgeColor: "secondary",
      items: ["Số 1 tại Việt Nam về đào tạo ngành GTVT", "Quy mô đào tạo 50.000 sinh viên"]
    }, {
      icon: Lightbulb,
      title: "Triết lý giáo dục",
      tags: ["Thực học", "Thực dụng", "Thực nghiệm"]
    }],
    cta: {
      text: "Tìm hiểu thêm về chúng tôi",
      subText: "3 cơ sở đào tạo trên toàn quốc"
    }
  },
  faculties: {
    image: aboutStudents,
    imageAlt: "Sinh viên ĐH Công nghệ GTVT",
    stat1: {
      value: "30+",
      label: "Chuyên ngành",
      icon: BookOpen
    },
    stat2: {
      value: "8",
      label: "Khoa đào tạo",
      icon: Building2
    },
    badge: {
      title: "Khoa & Ngành",
      subtitle: "Đào tạo chuyên sâu"
    },
    cards: [{
      icon: BookOpen,
      title: "Các Khoa đào tạo",
      badge: "Faculties",
      badgeColor: "primary",
      linkedItems: [
        { name: "Khoa Công trình", url: "https://civil.utt.edu.vn" },
        { name: "Khoa Công nghệ thông tin", url: "https://fit.utt.edu.vn" },
        { name: "Khoa Quản trị", url: "https://utt.edu.vn/vn/khoaquantri" },
        { name: "Khoa Kinh tế vận tải", url: "https://ktvt.utt.edu.vn" },
        { name: "Khoa Khoa học ứng dụng", url: "https://utt.edu.vn/vn/khud" },
        { name: "Khoa Cơ sở kỹ thuật", url: "https://utt.edu.vn/vn/cosokythuat" },
        { name: "Khoa Luật - Chính trị", url: "https://utt.edu.vn/vn/luatchinhtri" }
      ]
    }],
    cta: {
      text: "Xem các ngành đào tạo",
      subText: "Đào tạo theo hướng ứng dụng"
    }
  },
  leaders: {
    image: aboutCampus,
    imageAlt: "Ban lãnh đạo nhà trường",
    stat1: {
      value: "100+",
      label: "Giáo sư, Tiến sĩ",
      icon: Award
    },
    stat2: {
      value: "500+",
      label: "Giảng viên",
      icon: Users
    },
    badge: {
      title: "Ban Giám hiệu",
      subtitle: "Lãnh đạo & Định hướng"
    },
    cards: [{
      icon: UserCog,
      title: "Triết lý lãnh đạo",
      badge: "Leadership",
      badgeColor: "primary",
      items: ["Cây cầu tri thức kết nối tương lai", "Sự ổn định và phát triển bền vững", "Sắc màu của thịnh vượng và thành công"]
    }, {
      icon: Target,
      title: "Định hướng phát triển",
      badge: "Strategy",
      badgeColor: "secondary",
      items: ["Kết nối Tài năng - Công nghệ - Cộng đồng", "Đào tạo nguồn nhân lực chất lượng cao theo hướng ứng dụng"]
    }, {
      icon: Award,
      title: "Giá trị cốt lõi",
      tags: ["Tri thức", "Sáng tạo", "Bền vững"]
    }],
    cta: {
      text: "Xem chi tiết Ban lãnh đạo",
      subText: "Đội ngũ giảng viên giàu kinh nghiệm"
    }
  },
  center: {
    image: aboutStudents,
    imageAlt: "Trung tâm kết nối doanh nghiệp",
    stat1: {
      value: "200+",
      label: "Đối tác DN",
      icon: Briefcase
    },
    stat2: {
      value: "95%",
      label: "Tỉ lệ việc làm",
      icon: Network
    },
    badge: {
      title: "Trung tâm KNDTN",
      subtitle: "Hỗ trợ & Kết nối"
    },
    cards: [{
      icon: Handshake,
      title: "Hoạt động chính",
      badge: "Activities",
      badgeColor: "primary",
      items: ["Tổ chức ngày hội việc làm", "Kết nối sinh viên - doanh nghiệp", "Tư vấn hướng nghiệp"]
    }, {
      icon: Globe,
      title: "Hợp tác doanh nghiệp",
      badge: "Partners",
      badgeColor: "secondary",
      items: ["Hơn 200 doanh nghiệp đối tác", "Chương trình thực tập có lương"]
    }, {
      icon: Briefcase,
      title: "Dịch vụ hỗ trợ",
      tags: ["Tư vấn CV", "Phỏng vấn thử", "Kỹ năng mềm"]
    }],
    cta: {
      text: "Liên hệ Trung tâm",
      subText: "Hỗ trợ sinh viên 24/7"
    }
  }
};

// Time for each slide (in milliseconds) - adjusted for reading content
const SLIDE_DURATIONS: Record<string, number> = {
  intro: 8000,
  // 8 seconds - 3 cards with lists
  faculties: 6000,
  // 6 seconds - 1 card with 8 items
  leaders: 7000,
  // 7 seconds - 3 cards
  center: 7000 // 7 seconds - 3 cards
};
const AboutSection = () => {
  const [activeButton, setActiveButton] = useState<string>("intro");
  const [isPaused, setIsPaused] = useState(false);
  const goToNextSlide = useCallback(() => {
    const currentIndex = aboutButtons.findIndex(btn => btn.id === activeButton);
    const nextIndex = (currentIndex + 1) % aboutButtons.length;
    setActiveButton(aboutButtons[nextIndex].id);
  }, [activeButton]);

  // Auto-play effect
  useEffect(() => {
    if (isPaused) return;
    const duration = SLIDE_DURATIONS[activeButton] || 7000;
    const timer = setTimeout(goToNextSlide, duration);
    return () => clearTimeout(timer);
  }, [activeButton, isPaused, goToNextSlide]);
  const currentContent = sectionContent[activeButton as keyof typeof sectionContent];
  return <section className="utt-section bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden">
      {/* Floating Decorative Elements - Techex Style */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-slow opacity-40" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-50" />

      <div className="max-w-full xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 lg:px-8 xl:px-12 relative z-10">
        {/* Section Header - Modern Style */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary py-2.5 rounded-full text-base font-semibold mb-6 px-6">
            <Sparkles className="w-5 h-5" />
            VỀ CHÚNG TÔI
          </div>

          {/* 3D Shadow Buttons - Single Row */}
          <div className="flex flex-wrap justify-center gap-3">
            {aboutButtons.map(btn => {
            const Icon = btn.icon;
            const isActive = activeButton === btn.id;
            return <button key={btn.id} onClick={() => setActiveButton(btn.id)} className={`
                    flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm
                    transition-all duration-200 ease-out
                    ${isActive ? "bg-primary text-primary-foreground shadow-lg translate-y-1" : "bg-card text-foreground hover:bg-primary/10 shadow-[0_4px_0_0_hsl(var(--primary)/0.3),0_6px_12px_-2px_hsl(var(--primary)/0.2)] hover:shadow-[0_2px_0_0_hsl(var(--primary)/0.3),0_4px_8px_-2px_hsl(var(--primary)/0.2)] hover:translate-y-0.5"}
                    border border-border/50
                    active:translate-y-1 active:shadow-[0_1px_0_0_hsl(var(--primary)/0.3)]
                  `}>
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
                  <span className="hidden sm:inline">{btn.label}</span>
                  <span className="sm:hidden">{btn.label.split(" ")[0]}</span>
                </button>;
          })}
          </div>
        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Left Column - Image Composition */}
          <div className="lg:col-span-5 relative">
            {/* Background Shape */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] blur-2xl opacity-50" />

            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Ring */}
              <div className="absolute -inset-3 border-2 border-dashed border-primary/30 rounded-[2.5rem] animate-pulse-slow" />

              {/* Image */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img src={currentContent.image} alt={currentContent.imageAlt} className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card - Top Right */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <currentContent.stat1.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{currentContent.stat1.value}</p>
                    <p className="text-xs text-muted-foreground">{currentContent.stat1.label}</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <currentContent.stat2.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{currentContent.stat2.value}</p>
                    <p className="text-xs text-muted-foreground">{currentContent.stat2.label}</p>
                  </div>
                </div>
              </div>

              {/* Logo Badge - Bottom Center */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-primary/30 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                <div className="text-left">
                  <p className="font-bold text-foreground text-sm">{currentContent.badge.title}</p>
                  <p className="text-xs text-primary font-medium">{currentContent.badge.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="lg:col-span-7 space-y-5">
            {currentContent.cards.map((card, cardIdx) => {
            const CardIcon = card.icon;
            const isSecondary = card.badgeColor === "secondary";
            return <div key={cardIdx} className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden">
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 ${isSecondary ? "bg-gradient-to-r from-secondary/5" : "bg-gradient-to-r from-primary/5"} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative flex items-start gap-5">
                    <div className={`w-14 h-14 bg-gradient-to-br ${isSecondary ? "from-secondary to-secondary/80" : "from-primary to-primary/80"} rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <CardIcon className={`w-7 h-7 ${isSecondary ? "text-secondary-foreground" : "text-primary-foreground"}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                        {card.title}
                        {card.badge && <span className={`text-xs ${isSecondary ? "bg-secondary/10 text-secondary-foreground" : "bg-primary/10 text-primary"} px-2 py-1 rounded-full font-medium`}>
                            {card.badge}
                          </span>}
                      </h3>

                      {card.items && <ul className="space-y-2">
                          {card.items.map((item, idx) => <li key={idx} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                              <CheckCircle className={`w-4 h-4 ${isSecondary ? "text-secondary" : "text-primary"} shrink-0`} />
                              <span>{item}</span>
                            </li>)}
                        </ul>}

                      {card.linkedItems && <ul className="space-y-2">
                          {card.linkedItems.map((item, idx) => <li key={idx} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                              <CheckCircle className={`w-4 h-4 ${isSecondary ? "text-secondary" : "text-primary"} shrink-0`} />
                              <a 
                                href={item.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary hover:underline transition-colors"
                              >
                                {item.name}
                              </a>
                            </li>)}
                        </ul>}

                      {card.tags && <div className="flex flex-wrap gap-3">
                          {card.tags.map((tag, idx) => <span key={idx} className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer">
                              {tag}
                            </span>)}
                        </div>}
                    </div>
                  </div>
                </div>;
          })}

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="/gioi-thieu" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 rounded-full font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                  {currentContent.cta.text}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-5 h-5" />
                <span className="text-sm">{currentContent.cta.subText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;