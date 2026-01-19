import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="utt-section bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">VỀ CHÚNG TÔI</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Trường Đại học <span className="text-primary">Công nghệ GTVT</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Đào tạo nhân lực chất lượng cao: Ứng dụng • Đa ngành • Đa lĩnh vực
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="utt-card-orange relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/2 translate-x-1/4" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Sứ mạng</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Đào tạo và cung cấp nguồn nhân lực chất lượng cao, nghiên cứu khoa học và 
                chuyển giao công nghệ phục vụ sự nghiệp phát triển của ngành Giao thông vận tải và đất nước.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="utt-card-dark relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/4" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-secondary-foreground/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Tầm nhìn 2030</h3>
              <p className="text-secondary-foreground/80 leading-relaxed">
                Có một số ngành đào tạo ngang tầm với các trường đại học có uy tín trong khu vực 
                và thế giới, là trung tâm nghiên cứu khoa học ứng dụng hàng đầu.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link to="/gioi-thieu">
            <Button className="utt-btn-primary">
              Tìm hiểu thêm về chúng tôi
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
