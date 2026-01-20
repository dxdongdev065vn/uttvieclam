import { useState } from "react";
import { MapPin, Globe, Briefcase, Gift, Building2, Flame, Star, Users, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import company1 from "@/assets/company-1.jpg";
import company2 from "@/assets/company-2.jpg";

type Location = "hanoi" | "phutho" | "thainguyen";

interface Company {
  id: number;
  name: string;
  address: string;
  website: string;
  logo?: string;
  position: string;
  salary: string;
  benefits: string[];
  description: string;
  isHot?: boolean;
  isNew?: boolean;
  employees?: string;
}

const companiesByLocation: Record<Location, Company[]> = {
  hanoi: [
    {
      id: 1,
      name: "Công ty Cổ phần Xây dựng Hạ tầng ABC",
      address: "Cầu Giấy, Hà Nội",
      website: "www.abcconstruction.com.vn",
      position: "Kỹ sư Cầu đường / IT / Logistics",
      salary: "15 - 20 triệu",
      benefits: ["Bảo hiểm đầy đủ", "Du lịch hàng năm", "Thưởng Tết"],
      description: "Yêu cầu kinh nghiệm 1 năm trong lĩnh vực xây dựng cầu đường.",
      logo: company1,
      isHot: true,
      employees: "500-1000",
    },
    {
      id: 2,
      name: "Tập đoàn Logistics Việt Nam",
      address: "Long Biên, Hà Nội",
      website: "www.vnlogistics.com",
      position: "Chuyên viên Vận tải / Điều phối",
      salary: "12 - 18 triệu",
      benefits: ["Bảo hiểm", "Xe đưa đón", "Thưởng KPI"],
      description: "Tìm kiếm ứng viên năng động, có khả năng làm việc dưới áp lực cao.",
      logo: company2,
      isNew: true,
      employees: "100-500",
    },
  ],
  phutho: [
    {
      id: 3,
      name: "Công ty TNHH Sản xuất XYZ",
      address: "KCN Thụy Vân, Phú Thọ",
      website: "www.xyzmanufacturing.com",
      position: "Kỹ sư Cơ khí / Điện tử",
      salary: "18 - 25 triệu",
      benefits: ["Nhà ở miễn phí", "Bảo hiểm", "Thưởng năng suất"],
      description: "Cần tuyển kỹ sư có kinh nghiệm vận hành máy CNC.",
      logo: company2,
      isHot: true,
      employees: "1000+",
    },
  ],
  thainguyen: [
    {
      id: 4,
      name: "Công ty CP Khai thác Khoáng sản TN",
      address: "TP. Thái Nguyên",
      website: "www.tnmining.com.vn",
      position: "Kỹ sư Mỏ / Địa chất",
      salary: "20 - 30 triệu",
      benefits: ["Phụ cấp độc hại", "Bảo hiểm cao cấp", "Thưởng dự án"],
      description: "Tuyển kỹ sư địa chất, mỏ có kinh nghiệm làm việc tại mỏ lộ thiên.",
      logo: company1,
      isNew: true,
      employees: "200-500",
    },
  ],
};

const locations: { key: Location; label: string; icon: string }[] = [
  { key: "hanoi", label: "Hà Nội", icon: "🏢" },
  { key: "phutho", label: "Phú Thọ", icon: "🏭" },
  { key: "thainguyen", label: "Thái Nguyên", icon: "🏗️" },
];

const JobsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>("hanoi");
  
  const companies = companiesByLocation[selectedLocation];

  return (
    <section className="utt-section-gradient">
      {/* Decorative Blobs - Techex Style */}
      <div className="utt-blob utt-blob-primary w-96 h-96 -top-48 -right-48 animate-pulse-slow" />
      <div className="utt-blob utt-blob-secondary w-64 h-64 bottom-0 left-0 animate-float" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">
            <Briefcase className="w-4 h-4 mr-1" />
            CƠ HỘI VIỆC LÀM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Kết Nối <span className="text-gradient-orange">Doanh Nghiệp</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Khám phá các cơ hội việc làm từ những doanh nghiệp uy tín đang tuyển dụng sinh viên UTT
          </p>
        </div>

        {/* Location Tabs - JobsGO Style */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.key}
              onClick={() => setSelectedLocation(loc.key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedLocation === loc.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                  : "bg-card border border-border text-foreground hover:border-primary/50 hover:bg-muted"
              }`}
            >
              <span className="text-lg">{loc.icon}</span>
              <span>{loc.label}</span>
              {selectedLocation === loc.key && (
                <Badge variant="secondary" className="ml-1 text-xs bg-primary-foreground/20 text-primary-foreground">
                  {companiesByLocation[loc.key].length}
                </Badge>
              )}
            </button>
          ))}
        </div>

        {/* Companies Grid - JobsGO Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {companies.map((company) => (
            <div key={company.id} className="utt-company-card">
              <div className="flex gap-4">
                {/* Company Logo */}
                <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-border group-hover:border-primary/30 transition-colors">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Building2 className="w-10 h-10 text-muted-foreground" />
                    </div>
                  )}
                </div>

                {/* Company Info */}
                <div className="flex-1 min-w-0">
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {company.isHot && (
                      <span className="utt-badge-hot">
                        <Flame className="w-3 h-3" />HOT
                      </span>
                    )}
                    {company.isNew && (
                      <span className="utt-badge-new">
                        <Star className="w-3 h-3" />MỚI
                      </span>
                    )}
                  </div>

                  {/* Company Name */}
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1 text-lg">
                    {company.name}
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {company.address}
                    </span>
                    {company.employees && (
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {company.employees}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border my-4" />

              {/* Position & Salary */}
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Vị trí tuyển dụng</p>
                      <p className="font-semibold text-foreground">{company.position}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Mức lương</p>
                    <p className="font-bold text-primary">{company.salary}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-1.5">
                  {company.benefits.map((benefit, idx) => (
                    <span 
                      key={idx}
                      className="utt-tag utt-tag-location"
                    >
                      <Gift className="w-3 h-3" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn">
                  Ứng tuyển ngay
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="icon" className="shrink-0 border-border hover:border-primary hover:text-primary">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
            Xem tất cả doanh nghiệp
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
