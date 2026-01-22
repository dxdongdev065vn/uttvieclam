import { Link } from "react-router-dom";
import { MessageSquare, Brain, Calendar, CheckCircle, ArrowRight, Users, Sparkles, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleCV from "@/assets/article-cv.jpg";
import articleInterview from "@/assets/article-interview.jpg";
import articleNetworking from "@/assets/article-networking.jpg";

const skillCategories = [
  {
    id: 1,
    title: "Kỹ năng làm việc & Kỹ năng mềm",
    description: "Phát triển các kỹ năng mềm thiết yếu cho công việc",
    icon: MessageSquare,
    image: articleCV,
    href: "/ky-nang",
    color: "bg-blue-500",
    skills: ["Kỹ năng giao tiếp", "Làm việc nhóm", "Thuyết trình", "Quản lý thời gian"]
  },
  {
    id: 2,
    title: "AI ứng dụng trong học tập & công việc",
    description: "Làm chủ công cụ AI để tăng năng suất 10x",
    icon: Brain,
    image: articleInterview,
    href: "/ky-nang?tab=ai",
    color: "bg-purple-500",
    skills: ["ChatGPT cơ bản", "Prompt Engineering", "AI Tools văn phòng", "Tạo nội dung AI"]
  },
  {
    id: 3,
    title: "Hội thảo – Tập huấn – Chia sẻ",
    description: "Các sự kiện đào tạo và chia sẻ kinh nghiệm",
    icon: Calendar,
    image: articleNetworking,
    href: "/ky-nang?tab=hoi-thao",
    color: "bg-orange-500",
    skills: ["Workshop kỹ năng", "Chia sẻ từ chuyên gia", "Tập huấn nghề nghiệp", "Networking event"]
  }
];

const CareerGuideSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            KỸ NĂNG & AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            KỸ NĂNG & <span className="text-primary">AI</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Phát triển kỹ năng mềm và ứng dụng AI trong học tập, công việc
          </p>
        </div>

        {/* Three Blocks Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link 
                key={category.id} 
                to={category.href}
                className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-sm font-medium ${category.color}`}>
                      <IconComponent className="w-4 h-4" />
                      <span className="line-clamp-1">{category.title.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {category.skills.slice(0, 3).map((skill, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Khám phá ngay <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-muted rounded-xl p-4 text-center">
            <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">50+</p>
            <p className="text-sm text-muted-foreground">Khóa học</p>
          </div>
          <div className="bg-muted rounded-xl p-4 text-center">
            <Users className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">5,000+</p>
            <p className="text-sm text-muted-foreground">Học viên</p>
          </div>
          <div className="bg-muted rounded-xl p-4 text-center">
            <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">20+</p>
            <p className="text-sm text-muted-foreground">Giảng viên</p>
          </div>
          <div className="bg-muted rounded-xl p-4 text-center">
            <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">10+</p>
            <p className="text-sm text-muted-foreground">Sự kiện/tháng</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link to="/ky-nang">
            <Button className="utt-btn-primary">
              Xem tất cả khóa học
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerGuideSection;