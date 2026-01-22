import { Link } from "react-router-dom";
import { MessageSquare, Brain, Users, ArrowRight, BookOpen, Video, Mail, Sparkles, GraduationCap, HelpCircle, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleCV from "@/assets/article-cv.jpg";
import articleInterview from "@/assets/article-interview.jpg";
import articleNetworking from "@/assets/article-networking.jpg";

const skillCategories = [
  {
    id: 1,
    title: "KỸ NĂNG LÀM VIỆC & KỸ NĂNG MỀM",
    description: "Cẩm nang, bài viết, video hướng dẫn phát triển kỹ năng giao tiếp, viết email chuyên nghiệp, tư duy logic và làm việc nhóm hiệu quả.",
    icon: MessageSquare,
    image: articleCV,
    color: "from-blue-500 to-blue-600",
    highlights: [
      { icon: BookOpen, text: "Cẩm nang & Bài viết" },
      { icon: Video, text: "Video hướng dẫn" },
      { icon: Mail, text: "Kỹ năng giao tiếp, viết mail" },
    ],
    buttons: [
      { label: "Xem lớp Kỹ năng", href: "/ky-nang" },
      { label: "Đăng ký tham gia", href: "/ky-nang?action=register" },
      { label: "Tư vấn lộ trình", href: "/ky-nang?action=consult" },
    ]
  },
  {
    id: 2,
    title: "ỨNG DỤNG AI TRONG CÔNG VIỆC & HỌC TẬP",
    description: "Các khóa đào tạo AI thực dụng (Miễn phí/Trả phí) giúp sinh viên làm chủ công nghệ AI trong học tập và công việc thực tế.",
    icon: Brain,
    image: articleInterview,
    color: "from-purple-500 to-purple-600",
    highlights: [
      { icon: Sparkles, text: "Khóa học Miễn phí & Trả phí" },
      { icon: GraduationCap, text: "AI thực dụng cho SV" },
      { icon: Brain, text: "Ứng dụng AI thực tế" },
    ],
    buttons: [
      { label: "Khám phá AI", href: "/ky-nang?tab=ai" },
      { label: "Học AI cơ bản", href: "/ky-nang?tab=ai&level=basic" },
      { label: "Đăng ký khóa học", href: "/ky-nang?tab=ai&action=register" },
    ]
  },
  {
    id: 3,
    title: "HỘI THẢO & CHIA SẺ KINH NGHIỆM",
    description: "Forum chia sẻ kinh nghiệm phỏng vấn, chuyện nghề nghiệp - nơi sinh viên hỏi, chuyên gia và cựu sinh viên trả lời.",
    icon: Users,
    image: articleNetworking,
    color: "from-orange-500 to-orange-600",
    highlights: [
      { icon: HelpCircle, text: "Hỏi đáp với Chuyên gia" },
      { icon: UserCheck, text: "Cựu SV chia sẻ" },
      { icon: MessageSquare, text: "Kinh nghiệm phỏng vấn" },
    ],
    buttons: [
      { label: "Xem lịch sự kiện", href: "/ky-nang?tab=hoi-thao" },
      { label: "Đăng ký tham dự", href: "/ky-nang?tab=hoi-thao&action=register" },
      { label: "Đề xuất chủ đề", href: "/ky-nang?tab=hoi-thao&action=suggest" },
    ]
  }
];

const CareerGuideSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">
            KỸ NĂNG & AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            KỸ NĂNG & <span className="text-primary">AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Phát triển kỹ năng mềm và ứng dụng AI trong học tập, công việc
          </p>
        </div>

        {/* Three Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id} 
                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="space-y-2 mb-5">
                    {category.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm">
                        <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 flex items-center justify-center`}>
                          <highlight.icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-foreground text-xs">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-2 mt-auto">
                    {category.buttons.map((button, index) => (
                      <Link 
                        key={index}
                        to={button.href}
                        className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group/btn ${
                          index === 0 
                            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md" 
                            : "bg-muted hover:bg-muted/80 text-foreground border border-border hover:border-primary/30"
                        }`}
                      >
                        <span>{button.label}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform group-hover/btn:translate-x-1 ${
                          index === 0 ? "text-primary-foreground" : "text-primary"
                        }`} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/ky-nang">
            <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Khám phá tất cả kỹ năng & AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerGuideSection;
