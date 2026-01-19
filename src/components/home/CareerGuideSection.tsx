import { FileText, Bot, CheckCircle } from "lucide-react";
import articleCV from "@/assets/article-cv.jpg";
import articleInterview from "@/assets/article-interview.jpg";

const basicSkills = [
  "Cách viết CV ấn tượng",
  "Kỹ năng giới thiệu bản thân",
  "Viết Email xin việc"
];

const advancedSkills = [
  "Ứng dụng Trí tuệ nhân tạo (AI)",
  "Kỹ năng làm việc nhóm",
  "Tư duy phản biện"
];

const CareerGuideSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            CẨM NANG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            CẨM NANG NGHỀ NGHIỆP
          </h2>
          <p className="text-muted-foreground text-lg">
            Hỗ trợ phát triển kỹ năng cho sinh viên
          </p>
        </div>

        {/* Two Blocks */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Block 1: Basic Skills */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={articleCV}
                alt="CV và Phỏng vấn"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <FileText className="w-6 h-6" />
                  <span className="font-bold text-lg">KHỐI 1: KỸ NĂNG CƠ BẢN</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Tạo CV & Phỏng vấn
              </h3>
              
              <ul className="space-y-3">
                {basicSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-primary/10 text-primary font-semibold py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
                Xem chi tiết
              </button>
            </div>
          </div>

          {/* Block 2: Advanced Skills */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={articleInterview}
                alt="Công nghệ & Kỹ năng mềm"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 text-white">
                  <Bot className="w-6 h-6" />
                  <span className="font-bold text-lg">KHỐI 2: KỸ NĂNG NÂNG CAO</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5 text-primary" />
                Công nghệ & Kỹ năng mềm
              </h3>
              
              <ul className="space-y-3">
                {advancedSkills.map((skill, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 w-full bg-primary/10 text-primary font-semibold py-3 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerGuideSection;
