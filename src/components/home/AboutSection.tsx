import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Lightbulb, GraduationCap, Users, Building2, Award, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutCampus from "@/assets/about-campus.jpg";

const AboutSection = () => {
  return (
    <section className="utt-section bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden">
      {/* Floating Decorative Elements - Techex Style */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full animate-pulse-slow opacity-40" />
      <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full animate-float opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Modern Style */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-5 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            VỀ CHÚNG TÔI
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trường Đại học{" "}
            <span className="text-gradient-orange">Công nghệ GTVT</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nơi đào tạo nguồn nhân lực chất lượng cao cho ngành Giao thông Vận tải Việt Nam
          </p>
        </div>

        {/* Main Content - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
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
                <img 
                  src={aboutCampus} 
                  alt="Khuôn viên ĐH Công nghệ GTVT" 
                  className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card - Top Right */}
              <div className="absolute -top-6 -right-6 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/50 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Award className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">79+</p>
                    <p className="text-xs text-muted-foreground">Năm đào tạo</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-xs text-muted-foreground">Sinh viên</p>
                  </div>
                </div>
              </div>

              {/* Logo Badge - Bottom Center */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-card/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-primary/30 flex items-center gap-3">
                <GraduationCap className="w-7 h-7 text-primary" />
                <div className="text-left">
                  <p className="font-bold text-foreground text-sm">ĐH Công nghệ GTVT</p>
                  <p className="text-xs text-primary font-medium">Việc làm & Tuyển dụng</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content Cards */}
          <div className="lg:col-span-7 space-y-5">
            {/* Mission Card */}
            <div className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden">
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    Sứ mạng
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">Core</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Cung cấp nguồn nhân lực chất lượng cao",
                      "Phục vụ sự phát triển của ngành GTVT",
                      "Hỗ trợ phát triển đất nước"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-secondary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    Tầm nhìn 2030
                    <span className="text-xs bg-secondary/10 text-secondary-foreground px-2 py-1 rounded-full font-medium">Vision</span>
                  </h3>
                  <ul className="space-y-2">
                    {[
                      "Số 1 tại Việt Nam về đào tạo ngành GTVT",
                      "Quy mô đào tạo 50.000 sinh viên"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/40 hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-foreground rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Triết lý giáo dục
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Thực học", "Thực dụng", "Thực nghiệm"].map((item, idx) => (
                      <span 
                        key={idx}
                        className="px-5 py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="/gioi-thieu" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground px-8 py-6 rounded-full font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                  Tìm hiểu thêm về chúng tôi
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building2 className="w-5 h-5" />
                <span className="text-sm">3 cơ sở đào tạo trên toàn quốc</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
