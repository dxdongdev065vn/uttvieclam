import { useState } from "react";
import { MapPin, Globe, Briefcase, Gift, FileText, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import slideCampus from "@/assets/slide-campus.jpg";
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
  phutho: [
    {
      id: 3,
      name: "Công ty TNHH Sản xuất XYZ",
      address: "KCN Thụy Vân, Phú Thọ",
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
  { key: "phutho", label: "PHÚ THỌ", icon: "🏭" },
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

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Image + Location Selection (50% width) - Fixed height */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row h-auto lg:h-[280px]">
            {/* Left side - Image */}
            <div className="relative overflow-hidden lg:w-1/2 h-48 lg:h-full">
              <img
                src={slideCampus}
                alt="Cơ sở đào tạo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white">
                <p className="text-sm font-semibold">Cơ sở đào tạo UTT</p>
              </div>
            </div>

            {/* Right side - Location Selection */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Chọn khu vực:</h3>
              <div className="flex flex-col gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.key}
                    onClick={() => setSelectedLocation(loc.key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedLocation === loc.key
                        ? "border-primary bg-primary/10 text-primary shadow-md"
                        : "border-border bg-muted/30 text-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className="text-xl">{loc.icon}</span>
                    <span className="font-medium">{loc.label}</span>
                    {selectedLocation === loc.key && (
                      <span className="ml-auto text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        Đang chọn
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Job Details (50% width) - Fixed height matching left card */}
          {companies.length > 0 && (
            <div
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]"
            >
              {/* Left side - Company Logo/Image */}
              <div className="relative overflow-hidden lg:w-1/2 h-48 lg:h-full">
                {companies[0].logo ? (
                  <img src={companies[0].logo} alt={companies[0].name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-primary" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">{companies[0].name}</p>
                  <p className="text-xs flex items-center gap-1 opacity-90">
                    <MapPin className="w-3 h-3" />{companies[0].address}
                  </p>
                </div>
              </div>

              {/* Right side - Job Info */}
              <div className="lg:w-1/2 p-5 flex flex-col">
                {/* Company Header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                  <Globe className="w-4 h-4 text-primary" />
                  <p className="text-xs text-primary">{companies[0].website}</p>
                </div>

                {/* Job Info - Compact */}
                <div className="space-y-2 flex-1 overflow-hidden">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Vị trí</p>
                      <p className="text-sm font-semibold text-foreground">{companies[0].position}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-primary text-sm">💰</span>
                    <div>
                      <p className="text-xs text-muted-foreground">Lương</p>
                      <p className="text-sm font-semibold text-primary">{companies[0].salary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Đãi ngộ</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {companies[0].benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <FileText className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Mô tả</p>
                      <p className="text-foreground text-xs leading-relaxed line-clamp-2">{companies[0].description}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 text-sm">
                  👉 ỨNG TUYỂN NGAY
                </Button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default JobsSection;
