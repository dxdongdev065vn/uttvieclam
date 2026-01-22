import { Link } from "react-router-dom";
import { Users, Heart, Award, UserCheck, Handshake, GraduationCap, Lightbulb, Calendar, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";

const communityCategories = [
  {
    id: 1,
    title: "MẠNG LƯỚI CỰU SINH VIÊN & DOANH NHÂN",
    description: "Kết nối các thế hệ sinh viên UTT",
    icon: Users,
    image: candidate1,
    color: "from-blue-500 to-indigo-600",
    highlights: [
      { icon: UserCheck, text: "1,500+ Cựu sinh viên" },
      { icon: Trophy, text: "50+ Doanh nhân thành công" },
      { icon: Handshake, text: "Mentorship 1-1" },
    ],
    buttons: [
      { label: "Kết nối Cựu SV", href: "/cong-dong" },
      { label: "Tham gia Mạng lưới", href: "/cong-dong?action=join" },
      { label: "Liên hệ Hỗ trợ", href: "/cong-dong?action=contact" },
    ]
  },
  {
    id: 2,
    title: "CLB & HOẠT ĐỘNG SINH VIÊN",
    description: "Không gian rèn luyện và phát triển",
    icon: Heart,
    image: candidate2,
    color: "from-rose-500 to-pink-600",
    highlights: [
      { icon: Heart, text: "15+ Câu lạc bộ" },
      { icon: Lightbulb, text: "Dự án khởi nghiệp" },
      { icon: Calendar, text: "Sự kiện hàng tuần" },
    ],
    buttons: [
      { label: "Xem danh sách CLB", href: "/cong-dong?tab=clb" },
      { label: "Tham gia Hoạt động", href: "/cong-dong?tab=clb&action=join" },
      { label: "Đề xuất CLB mới", href: "/cong-dong?tab=clb&action=propose" },
    ]
  },
  {
    id: 3,
    title: "QUỸ ĐẦU TƯ & HỌC BỔNG",
    description: "Hỗ trợ tài năng trẻ phát triển",
    icon: Award,
    image: candidate3,
    color: "from-amber-500 to-orange-600",
    highlights: [
      { icon: Award, text: "20+ Học bổng/năm" },
      { icon: GraduationCap, text: "Hỗ trợ khởi nghiệp" },
      { icon: Trophy, text: "Đầu tư dự án SV" },
    ],
    buttons: [
      { label: "Góp quỹ / Tài trợ", href: "/cong-dong?tab=quy" },
      { label: "ĐK nhận hỗ trợ", href: "/cong-dong?tab=quy&action=apply" },
      { label: "Đồng hành cùng SV", href: "/cong-dong?tab=quy&action=partner" },
    ]
  },
];

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Cộng đồng UTT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
            KẾT NỐI <span className="text-primary">CỘNG ĐỒNG</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Xây dựng mạng lưới kết nối giữa các thế hệ sinh viên, câu lạc bộ và nguồn lực hỗ trợ
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {communityCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-background rounded-2xl border border-border/60 shadow-lg overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white leading-tight" style={{ fontFamily: "'Be Vietnam Pro', sans-serif" }}>
                    {category.title}
                  </h3>
                  <p className="text-white/80 text-sm mt-1">{category.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Highlights */}
                <div className="space-y-2 mb-5">
                  {category.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 flex items-center justify-center`}>
                        <highlight.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {category.buttons.map((button, idx) => (
                    <Link key={idx} to={button.href} className="block">
                      <Button
                        variant={idx === 0 ? "default" : "outline"}
                        size="sm"
                        className={`w-full justify-center ${
                          idx === 0 
                            ? `bg-gradient-to-r ${category.color} hover:opacity-90 text-white border-0` 
                            : "hover:bg-muted"
                        }`}
                      >
                        {button.label}
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/cong-dong">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
              <Users className="w-5 h-5 mr-2" />
              Khám phá Cộng đồng UTT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
