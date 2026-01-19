import { useState } from "react";
import { MapPin, Globe, Briefcase, Gift, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import company1 from "@/assets/company-1.jpg";
import company2 from "@/assets/company-2.jpg";

type Location = "hanoi" | "vinhphuc" | "thainguyen";

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
}

const companiesByLocation: Record<Location, Company[]> = {
  hanoi: [
    {
      id: 1,
      name: "Công ty Cổ phần Xây dựng Hạ tầng ABC",
      address: "Cầu Giấy, Hà Nội",
      website: "www.abcconstruction.com.vn",
      position: "Kỹ sư Cầu đường / IT / Logistics",
      salary: "15.000.000 - 20.000.000 VNĐ",
      benefits: ["Bảo hiểm đầy đủ", "Du lịch hàng năm", "Thưởng Tết"],
      description: "Yêu cầu kinh nghiệm 1 năm trong lĩnh vực xây dựng cầu đường. Ưu tiên ứng viên tốt nghiệp từ các trường kỹ thuật.",
      logo: company1,
    },
    {
      id: 2,
      name: "Tập đoàn Logistics Việt Nam",
      address: "Long Biên, Hà Nội",
      website: "www.vnlogistics.com",
      position: "Chuyên viên Vận tải / Điều phối",
      salary: "12.000.000 - 18.000.000 VNĐ",
      benefits: ["Bảo hiểm", "Xe đưa đón", "Thưởng KPI"],
      description: "Tìm kiếm ứng viên năng động, có khả năng làm việc dưới áp lực cao.",
      logo: company2,
    },
  ],
  vinhphuc: [
    {
      id: 3,
      name: "Công ty TNHH Sản xuất XYZ",
      address: "KCN Bình Xuyên, Vĩnh Phúc",
      website: "www.xyzmanufacturing.com",
      position: "Kỹ sư Cơ khí / Điện tử",
      salary: "18.000.000 - 25.000.000 VNĐ",
      benefits: ["Nhà ở miễn phí", "Bảo hiểm", "Thưởng năng suất"],
      description: "Cần tuyển kỹ sư có kinh nghiệm vận hành máy CNC, đọc hiểu bản vẽ kỹ thuật.",
      logo: company2,
    },
  ],
  thainguyen: [
    {
      id: 4,
      name: "Công ty CP Khai thác Khoáng sản TN",
      address: "TP. Thái Nguyên",
      website: "www.tnmining.com.vn",
      position: "Kỹ sư Mỏ / Địa chất",
      salary: "20.000.000 - 30.000.000 VNĐ",
      benefits: ["Phụ cấp độc hại", "Bảo hiểm cao cấp", "Thưởng dự án"],
      description: "Tuyển kỹ sư địa chất, mỏ có kinh nghiệm làm việc tại mỏ lộ thiên.",
      logo: company1,
    },
  ],
};

const locations: { key: Location; label: string; icon: string }[] = [
  { key: "hanoi", label: "HÀ NỘI", icon: "🏢" },
  { key: "vinhphuc", label: "VĨNH PHÚC", icon: "🏭" },
  { key: "thainguyen", label: "THÁI NGUYÊN", icon: "🏗️" },
];

const JobsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>("hanoi");
  const companies = companiesByLocation[selectedLocation];

  return (
    <section className="utt-section bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">CƠ HỘI VIỆC LÀM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            KẾT NỐI <span className="text-primary">DOANH NGHIỆP</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Dành cho Doanh nghiệp đăng tuyển - Chọn khu vực để xem chi tiết
          </p>
        </div>

        {/* Location Selection */}
        <div className="max-w-3xl mx-auto mb-12">
          <h3 className="text-xl font-semibold mb-6 text-foreground text-center">Chọn khu vực tuyển dụng:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((loc) => (
              <button
                key={loc.key}
                onClick={() => setSelectedLocation(loc.key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedLocation === loc.key
                    ? "border-primary bg-primary/10 text-primary shadow-lg"
                    : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-muted"
                }`}
              >
                <span className="text-2xl">{loc.icon}</span>
                <span className="font-semibold text-lg">{loc.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* B. Company Listings */}
        <div className="space-y-8">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-2">
                {/* Left Column: Brand */}
                <div className="p-8 bg-muted/30 border-r border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <Building2 className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{company.name}</h3>
                      <p className="flex items-center gap-2 text-muted-foreground text-sm">
                        <MapPin className="w-4 h-4" />
                        {company.address}
                      </p>
                      <p className="flex items-center gap-2 text-primary text-sm mt-1">
                        <Globe className="w-4 h-4" />
                        {company.website}
                      </p>
                    </div>
                  </div>
                  
                  {/* Company Image */}
                  <div className="w-full h-40 rounded-xl overflow-hidden">
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <Building2 className="w-12 h-12 text-muted-foreground opacity-50" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Job Details */}
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Vị trí tuyển dụng</p>
                        <p className="font-semibold text-foreground">{company.position}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="text-primary text-lg mt-0.5">💰</span>
                      <div>
                        <p className="text-sm text-muted-foreground">Mức lương</p>
                        <p className="font-semibold text-primary">{company.salary}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Chế độ đãi ngộ</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {company.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-primary mt-1 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground">Mô tả công việc</p>
                        <p className="text-foreground text-sm leading-relaxed">{company.description}</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6">
                    👉 ỨNG TUYỂN NGAY
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
