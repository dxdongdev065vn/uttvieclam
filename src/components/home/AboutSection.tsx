import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutCampus from "@/assets/about-campus.jpg";

const AboutSection = () => {
  return (
    <section className="utt-section bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">VỀ CHÚNG TÔI</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary uppercase tracking-wide">
            TRƯỜNG ĐẠI HỌC CÔNG NGHỆ GIAO THÔNG VẬN TẢI
          </h2>
          <p className="text-muted-foreground mt-4 text-base">
            Đào tạo nhân lực chất lượng cao: Ứng dụng • Đa ngành • Đa lĩnh vực
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image with organic shape */}
          <div className="relative flex justify-center">
            {/* Decorative accent circle */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-16 h-32 bg-primary rounded-full opacity-80" />
            
            {/* Organic blob shape container */}
            <div className="relative">
              <div 
                className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] overflow-hidden shadow-2xl"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              >
                <img 
                  src={aboutCampus} 
                  alt="Khuôn viên ĐH Công nghệ GTVT" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Border accent */}
              <div 
                className="absolute inset-0 border-4 border-primary/30"
                style={{
                  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
                }}
              />
            </div>

            {/* Logo & Name Badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card rounded-xl px-6 py-3 shadow-lg border border-border flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              <div>
                <p className="font-bold text-foreground text-sm">ĐH Công nghệ GTVT</p>
                <p className="text-xs text-muted-foreground">Việc làm & Tuyển dụng</p>
              </div>
            </div>
          </div>

          {/* Right Column - Core Information */}
          <div className="space-y-5">
            {/* Mission */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 bg-muted/50 hover:bg-muted rounded-xl transition-colors cursor-pointer border border-border/50 hover:border-primary/30 hover:shadow-md">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">🚀 Sứ mạng</h3>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Cung cấp nguồn nhân lực chất lượng cao
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Phục vụ sự phát triển của ngành GTVT
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Hỗ trợ phát triển đất nước
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 bg-muted/50 hover:bg-muted rounded-xl transition-colors cursor-pointer border border-border/50 hover:border-primary/30 hover:shadow-md">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">👁️ Tầm nhìn 2030</h3>
                  <ul className="space-y-1.5 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Số 1 tại Việt Nam về đào tạo ngành GTVT
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Quy mô đào tạo 50.000 sinh viên
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="group">
              <div className="flex items-start gap-4 p-5 bg-muted/50 hover:bg-muted rounded-xl transition-colors cursor-pointer border border-border/50 hover:border-primary/30 hover:shadow-md">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">💡 Triết lý giáo dục</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                      Thực học
                    </span>
                    <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                      Thực dụng
                    </span>
                    <span className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                      Thực nghiệm
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link to="/gioi-thieu">
                <Button className="utt-btn-primary">
                  Tìm hiểu thêm về chúng tôi
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
