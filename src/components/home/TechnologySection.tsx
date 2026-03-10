import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Lightbulb, FileSearch, Award, ArrowRight, Cpu, FlaskConical, Handshake, Search, Send, MessageCircle, BookOpen, Phone, Building, Check, Clock, Users, Zap, Shield, TrendingUp, FileCheck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import articleCV from "@/assets/article-cv.jpg";
import articleInterview from "@/assets/article-interview.jpg";
import articleNetworking from "@/assets/article-networking.jpg";
const tabButtons = [{
  key: "ideas",
  label: "Sàn Ý tưởng sáng tạo",
  icon: Lightbulb,
  description: "Khơi nguồn sáng tạo"
}, {
  key: "research",
  label: "Đặt hàng NC & Đổi mới sáng tạo",
  icon: FlaskConical,
  description: "DN đề xuất bài toán"
}, {
  key: "solutions",
  label: "Danh mục Công nghệ & Giải pháp",
  icon: Cpu,
  description: "Sẵn sàng ứng dụng"
}, {
  key: "transfer",
  label: "Tư vấn Chuyển giao CN & SHTT",
  icon: Handshake,
  description: "Hỗ trợ thương mại hóa"
}, {
  key: "spinoff",
  label: "Spin-off & Quản trị DN SME",
  icon: Briefcase,
  description: "Khởi nghiệp & quản trị"
}];
const SLIDE_DURATIONS: Record<string, number> = {
  solutions: 10000,
  research: 9000,
  transfer: 9000
};

// Tab 1: Danh mục công nghệ sẵn sàng
const technologyCatalog = [{
  id: 1,
  name: "Hệ thống Giám sát Giao thông Thông minh",
  category: "ITS",
  status: "Sẵn sàng",
  description: "Giám sát, phân tích luồng giao thông realtime bằng AI",
  icon: Cpu
}, {
  id: 2,
  name: "Phần mềm Quản lý Logistics",
  category: "Software",
  status: "Sẵn sàng",
  description: "Tối ưu hóa chuỗi cung ứng và vận chuyển",
  icon: TrendingUp
}, {
  id: 3,
  name: "Giải pháp Bãi đỗ xe Thông minh",
  category: "IoT",
  status: "Đang triển khai",
  description: "Hệ thống cảm biến và app quản lý bãi đỗ",
  icon: Zap
}, {
  id: 4,
  name: "Nền tảng Đào tạo Trực tuyến",
  category: "EdTech",
  status: "Sẵn sàng",
  description: "LMS tích hợp AI hỗ trợ học tập cá nhân hóa",
  icon: BookOpen
}];

// Tab 2: Dự án nghiên cứu đang thực hiện
const researchProjects = [{
  id: 1,
  title: "Tối ưu hóa tuyến vận tải cho Viettel Post",
  partner: "Viettel Post",
  progress: 75,
  deadline: "Q2/2026",
  type: "Đặt hàng"
}, {
  id: 2,
  title: "Nghiên cứu vật liệu xanh trong xây dựng",
  partner: "Coteccons",
  progress: 40,
  deadline: "Q4/2026",
  type: "Hợp tác"
}, {
  id: 3,
  title: "Ứng dụng AI trong bảo trì thiết bị công nghiệp",
  partner: "Samsung Vietnam",
  progress: 60,
  deadline: "Q3/2026",
  type: "Đặt hàng"
}];

// Tab 3: Bằng sáng chế & chuyển giao
const intellectualProperty = [{
  id: 1,
  title: "Bằng sáng chế Hệ thống điều khiển đèn giao thông AI",
  type: "Sáng chế",
  year: 2024,
  status: "Đã cấp",
  transferable: true
}, {
  id: 2,
  title: "Giải pháp hữu ích: Cảm biến đo độ rung cầu đường",
  type: "Giải pháp hữu ích",
  year: 2025,
  status: "Đã cấp",
  transferable: true
}, {
  id: 3,
  title: "Phần mềm quản lý bến xe khách liên tỉnh",
  type: "Bản quyền phần mềm",
  year: 2025,
  status: "Đang chuyển giao",
  transferable: false
}];
const sectionContent = {
  solutions: {
    title: "Danh mục Công nghệ & Giải pháp",
    subtitle: "Các công nghệ sẵn sàng ứng dụng",
    description: "Khám phá danh mục các công nghệ, giải pháp kỹ thuật đã được nghiên cứu và phát triển bởi đội ngũ chuyên gia của trường, sẵn sàng chuyển giao và ứng dụng vào thực tiễn sản xuất.",
    image: articleCV,
    stats: [{
      value: "50+",
      label: "Giải pháp công nghệ"
    }, {
      value: "120+",
      label: "Dự án triển khai"
    }],
    buttons: [{
      label: "Xem danh mục",
      href: "/cong-nghe?tab=catalog",
      icon: BookOpen
    }, {
      label: "Tìm giải pháp",
      href: "/cong-nghe?tab=catalog&action=search",
      icon: Search
    }, {
      label: "Liên hệ tư vấn",
      href: "/lien-he?subject=technology",
      icon: Phone
    }]
  },
  research: {
    title: "Đặt hàng Nghiên cứu & Đổi mới",
    subtitle: "Doanh nghiệp đề xuất bài toán",
    description: "Cầu nối giữa doanh nghiệp và đội ngũ nghiên cứu của trường. Doanh nghiệp có thể đặt hàng các dự án nghiên cứu, đổi mới sáng tạo để giải quyết các bài toán thực tiễn trong sản xuất kinh doanh.",
    image: articleInterview,
    stats: [{
      value: "30+",
      label: "Dự án đang thực hiện"
    }, {
      value: "85%",
      label: "Tỷ lệ thành công"
    }],
    buttons: [{
      label: "Gửi yêu cầu",
      href: "/cong-nghe?tab=research&action=submit",
      icon: Send
    }, {
      label: "Đặt hàng giải pháp",
      href: "/cong-nghe?tab=research&action=order",
      icon: FileSearch
    }, {
      label: "Trao đổi chuyên gia",
      href: "/cong-nghe?tab=research&action=consult",
      icon: MessageCircle
    }]
  },
  transfer: {
    title: "Chuyển giao CN & Sở hữu trí tuệ",
    subtitle: "Hỗ trợ thương mại hóa",
    description: "Hỗ trợ doanh nghiệp tiếp nhận công nghệ, bảo hộ quyền sở hữu trí tuệ và thương mại hóa các kết quả nghiên cứu. Đội ngũ tư vấn chuyên nghiệp đồng hành trong suốt quá trình.",
    image: articleNetworking,
    stats: [{
      value: "25+",
      label: "Bằng sáng chế"
    }, {
      value: "40+",
      label: "Hợp đồng chuyển giao"
    }],
    buttons: [{
      label: "Tìm hiểu chuyển giao",
      href: "/cong-nghe?tab=ip",
      icon: BookOpen
    }, {
      label: "Tư vấn SHTT",
      href: "/cong-nghe?tab=ip&action=consult",
      icon: Award
    }, {
      label: "Liên hệ Trung tâm",
      href: "/lien-he?subject=transfer",
      icon: Building
    }]
  }
};
const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState("solutions");
  const [isPaused, setIsPaused] = useState(false);
  const goToNextSlide = useCallback(() => {
    const keys = Object.keys(sectionContent);
    const currentIndex = keys.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % keys.length;
    setActiveTab(keys[nextIndex]);
  }, [activeTab]);
  useEffect(() => {
    if (isPaused) return;
    const duration = SLIDE_DURATIONS[activeTab] || 8000;
    const timer = setTimeout(goToNextSlide, duration);
    return () => clearTimeout(timer);
  }, [activeTab, isPaused, goToNextSlide]);
  const currentContent = sectionContent[activeTab as keyof typeof sectionContent];
  return <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full blur-3xl" />

      <div className="w-full max-w-[1800px] mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-primary/10 text-primary py-2.5 rounded-full text-base font-semibold mb-4 px-6">
            HUB - ĐỔI MỚI SÁNG TẠO
          </span>
          
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Kết nối doanh nghiệp với nguồn lực nghiên cứu, công nghệ của trường
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabButtons.map(tab => {
          const IconComponent = tab.icon;
          const isActive = activeTab === tab.key;
          return <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`
                  flex items-center gap-3 px-5 py-3 rounded-full font-medium transition-all duration-300
                  ${isActive ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105' : 'bg-background text-foreground border border-border hover:border-primary hover:text-primary shadow-md hover:shadow-lg'}
                `}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-primary/10'}`}>
                  <IconComponent className={`w-4 h-4 ${isActive ? 'text-white' : 'text-primary'}`} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">{tab.label}</div>
                  <div className={`text-xs ${isActive ? 'text-white/80' : 'text-muted-foreground'}`}>
                    {tab.description}
                  </div>
                </div>
              </button>;
        })}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={currentContent.image} alt={currentContent.title} className="w-full h-[350px] lg:h-[450px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                {currentContent.stats.map((stat, index) => <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex-1">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>)}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {currentContent.subtitle}
              </span>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mt-2">
                {currentContent.title}
              </h3>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {currentContent.description}
            </p>

            {/* Dynamic Content Based on Tab */}
            {activeTab === "solutions" && <div className="grid sm:grid-cols-2 gap-3">
                {technologyCatalog.map(tech => {
              const TechIcon = tech.icon;
              return <div key={tech.id} className="bg-background rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-md transition-all group">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <TechIcon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-sm text-foreground truncate">{tech.name}</h4>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">{tech.category}</Badge>
                            <Badge className={`text-xs ${tech.status === "Sẵn sàng" ? "bg-green-500" : "bg-amber-500"}`}>
                              {tech.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2">{tech.description}</p>
                        </div>
                      </div>
                    </div>;
            })}
              </div>}

            {activeTab === "research" && <div className="space-y-3">
                {researchProjects.map(project => <div key={project.id} className="bg-background rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-foreground mb-1">{project.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Briefcase className="w-3 h-3" />
                          <span>Đối tác: {project.partner}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>Hoàn thành: {project.deadline}</span>
                        </div>
                      </div>
                      <Badge className={project.type === "Đặt hàng" ? "bg-primary" : "bg-blue-500"}>
                        {project.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all" style={{
                    width: `${project.progress}%`
                  }} />
                      </div>
                      <span className="text-sm font-semibold text-primary">{project.progress}%</span>
                    </div>
                  </div>)}
              </div>}

            {activeTab === "transfer" && <div className="space-y-3">
                {intellectualProperty.map(ip => <div key={ip.id} className="bg-background rounded-xl p-4 border border-border hover:border-primary/50 hover:shadow-md transition-all">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <FileCheck className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-sm text-foreground">{ip.title}</h4>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <Badge variant="outline" className="text-xs">{ip.type}</Badge>
                          <Badge variant="secondary" className="text-xs">{ip.year}</Badge>
                          <Badge className={`text-xs ${ip.status === "Đã cấp" ? "bg-green-500" : "bg-amber-500"}`}>
                            {ip.status}
                          </Badge>
                          {ip.transferable && <Badge className="text-xs bg-blue-500">
                              <Check className="w-3 h-3 mr-1" />
                              Sẵn sàng chuyển giao
                            </Badge>}
                        </div>
                      </div>
                    </div>
                  </div>)}
              </div>}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {currentContent.buttons.map((btn, index) => {
              const BtnIcon = btn.icon;
              return <Link key={index} to={btn.href}>
                    <Button variant={index === 0 ? "default" : "outline"} className={`
                        rounded-full px-5 py-2.5 font-medium transition-all
                        ${index === 0 ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25' : 'border-border hover:border-primary hover:text-primary'}
                      `}>
                      <BtnIcon className="w-4 h-4 mr-2" />
                      {btn.label}
                    </Button>
                  </Link>;
            })}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/cong-nghe">
            <Button className="utt-btn-primary">
              Khám phá Hub - Đổi mới sáng tạo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default TechnologySection;