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
      description: "Yêu cầu kinh nghiệm 1 năm trong lĩnh vực xây dựng cầu đường.",
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
    {
      id: 3,
      name: "Công ty CP Công nghệ VinFast",
      address: "Gia Lâm, Hà Nội",
      website: "www.vinfast.vn",
      position: "Kỹ sư Ô tô / Cơ khí",
      salary: "18.000.000 - 30.000.000 VNĐ",
      benefits: ["Lương tháng 13", "Bảo hiểm cao cấp", "Nhà ở"],
      description: "Tuyển kỹ sư ô tô có kiến thức về hệ thống điện và cơ khí.",
      logo: company1,
    },
    {
      id: 4,
      name: "Công ty TNHH Samsung Electronics",
      address: "Bắc Ninh (Gần Hà Nội)",
      website: "www.samsung.com/vn",
      position: "Kỹ sư Điện tử / Phần mềm",
      salary: "15.000.000 - 25.000.000 VNĐ",
      benefits: ["Shuttle bus", "Canteen", "Thưởng sản xuất"],
      description: "Tuyển kỹ sư điện tử, ưu tiên có kinh nghiệm về embedded systems.",
      logo: company2,
    },
    {
      id: 5,
      name: "Tổng Công ty Đường sắt Việt Nam",
      address: "Hai Bà Trưng, Hà Nội",
      website: "www.vr.com.vn",
      position: "Kỹ sư Đường sắt / Vận hành",
      salary: "10.000.000 - 18.000.000 VNĐ",
      benefits: ["Biên chế nhà nước", "Bảo hiểm", "Phụ cấp"],
      description: "Tuyển kỹ sư chuyên ngành đường sắt, cơ khí giao thông.",
      logo: company1,
    },
    {
      id: 6,
      name: "Công ty CP Phần mềm FPT",
      address: "Cầu Giấy, Hà Nội",
      website: "www.fpt-software.com",
      position: "Lập trình viên / DevOps",
      salary: "15.000.000 - 35.000.000 VNĐ",
      benefits: ["Remote", "Laptop", "Đào tạo quốc tế"],
      description: "Tuyển lập trình viên React, Node.js, có khả năng làm việc nhóm.",
      logo: company2,
    },
  ],
  phutho: [
    {
      id: 7,
      name: "Công ty TNHH Sản xuất XYZ",
      address: "KCN Thụy Vân, Phú Thọ",
      website: "www.xyzmanufacturing.com",
      position: "Kỹ sư Cơ khí / Điện tử",
      salary: "18.000.000 - 25.000.000 VNĐ",
      benefits: ["Nhà ở miễn phí", "Bảo hiểm", "Thưởng năng suất"],
      description: "Cần tuyển kỹ sư có kinh nghiệm vận hành máy CNC.",
      logo: company2,
    },
    {
      id: 8,
      name: "Công ty CP Hóa chất Việt Trì",
      address: "TP. Việt Trì, Phú Thọ",
      website: "www.vicaco.vn",
      position: "Kỹ sư Hóa học / Môi trường",
      salary: "12.000.000 - 18.000.000 VNĐ",
      benefits: ["Phụ cấp độc hại", "Bảo hiểm", "Xe đưa đón"],
      description: "Tuyển kỹ sư hóa học, môi trường làm việc tại nhà máy.",
      logo: company1,
    },
    {
      id: 9,
      name: "Công ty TNHH Giấy Lee & Man",
      address: "KCN Thụy Vân, Phú Thọ",
      website: "www.leemanpaper.com",
      position: "Kỹ sư Sản xuất / Bảo trì",
      salary: "14.000.000 - 22.000.000 VNĐ",
      benefits: ["Nhà ở", "Bảo hiểm", "Thưởng tháng"],
      description: "Tuyển kỹ sư cơ khí, điện cho bộ phận sản xuất và bảo trì.",
      logo: company2,
    },
  ],
  thainguyen: [
    {
      id: 10,
      name: "Công ty CP Khai thác Khoáng sản TN",
      address: "TP. Thái Nguyên",
      website: "www.tnmining.com.vn",
      position: "Kỹ sư Mỏ / Địa chất",
      salary: "20.000.000 - 30.000.000 VNĐ",
      benefits: ["Phụ cấp độc hại", "Bảo hiểm cao cấp", "Thưởng dự án"],
      description: "Tuyển kỹ sư địa chất, mỏ có kinh nghiệm làm việc tại mỏ lộ thiên.",
      logo: company1,
    },
    {
      id: 11,
      name: "Công ty TNHH Samsung Electronics TN",
      address: "KCN Yên Bình, Thái Nguyên",
      website: "www.samsung.com/vn",
      position: "Kỹ sư Điện tử / QC",
      salary: "12.000.000 - 20.000.000 VNĐ",
      benefits: ["Shuttle bus", "Canteen", "Ký túc xá"],
      description: "Tuyển kỹ sư điện tử, kiểm soát chất lượng sản phẩm.",
      logo: company2,
    },
    {
      id: 12,
      name: "Công ty CP Gang Thép Thái Nguyên",
      address: "TP. Thái Nguyên",
      website: "www.tisco.com.vn",
      position: "Kỹ sư Luyện kim / Cơ khí",
      salary: "15.000.000 - 25.000.000 VNĐ",
      benefits: ["Nhà ở", "Bảo hiểm", "Phụ cấp nặng nhọc"],
      description: "Tuyển kỹ sư luyện kim, cơ khí cho nhà máy sản xuất thép.",
      logo: company1,
    },
    {
      id: 13,
      name: "Công ty CP Xi măng Quang Sơn",
      address: "Đồng Hỷ, Thái Nguyên",
      website: "www.quangsoncement.vn",
      position: "Kỹ sư Xây dựng / Vận hành",
      salary: "12.000.000 - 18.000.000 VNĐ",
      benefits: ["Bảo hiểm", "Xe đưa đón", "Thưởng năm"],
      description: "Tuyển kỹ sư vận hành, bảo trì dây chuyền sản xuất xi măng.",
      logo: company2,
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
  const [selectedCompanyIndex, setSelectedCompanyIndex] = useState(0);
  
  const companies = companiesByLocation[selectedLocation];
  const selectedCompany = companies[selectedCompanyIndex] || companies[0];

  // Reset company index when location changes
  const handleLocationChange = (loc: Location) => {
    setSelectedLocation(loc);
    setSelectedCompanyIndex(0);
  };

  return (
    <section className="utt-section bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">KẾT NỐI VIỆC LÀM</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            VIỆC LÀM VÀ <span className="text-primary">TUYỂN DỤNG</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Dành cho Công ty đăng tuyển - Chọn khu vực để xem chi tiết
          </p>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Left: Image + Location Selection (50% width) - Fixed height */}
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row h-auto lg:h-[280px]">
            {/* Left side - Image with text below */}
            <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
              {/* Image area - 2/3 */}
              <div className="relative overflow-hidden h-2/3">
                <img
                  src={slideCampus}
                  alt="Cơ sở đào tạo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Text area - 1/3 */}
              <div className="h-1/3 bg-muted/50 flex items-center justify-center px-3">
                <p className="text-sm font-semibold text-foreground text-center">Cơ sở đào tạo UTT</p>
              </div>
            </div>

            {/* Right side - Location Selection */}
            <div className="lg:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Chọn khu vực:</h3>
              <div className="flex flex-col gap-3">
                {locations.map((loc) => (
                  <button
                    key={loc.key}
                    onClick={() => handleLocationChange(loc.key)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all duration-300 text-left ${
                      selectedLocation === loc.key
                        ? "border-primary bg-primary/10 text-primary shadow-md"
                        : "border-border bg-muted/30 text-foreground hover:border-primary/50"
                    }`}
                  >
                    <span className="text-xl">{loc.icon}</span>
                    <span className="font-medium">{loc.label}</span>
                    <span className="ml-auto text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                      {companiesByLocation[loc.key].length} DN
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Job Details (50% width) - Fixed height matching left card */}
          {selectedCompany && (
            <div
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row h-auto lg:h-[280px]"
            >
              {/* Left side - Company Logo/Image with text below */}
              <div className="lg:w-1/2 h-48 lg:h-full flex flex-col">
                {/* Image area - 2/3 */}
                <div className="relative overflow-hidden h-2/3">
                  {selectedCompany.logo ? (
                    <img src={selectedCompany.logo} alt={selectedCompany.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-16 h-16 text-primary" />
                    </div>
                  )}
                </div>
                {/* Text area - 1/3 */}
                <div className="h-1/3 bg-muted/50 flex flex-col items-center justify-center px-3">
                  <p className="text-sm font-semibold text-foreground text-center line-clamp-1">{selectedCompany.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />{selectedCompany.address}
                  </p>
                </div>
              </div>

              {/* Right side - Job Info */}
              <div className="lg:w-1/2 p-5 flex flex-col">
                {/* Company Header */}
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border">
                  <Globe className="w-4 h-4 text-primary" />
                  <p className="text-xs text-primary">{selectedCompany.website}</p>
                </div>

                {/* Job Info - Compact */}
                <div className="space-y-2 flex-1 overflow-hidden">
                  <div className="flex items-start gap-2">
                    <Briefcase className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Vị trí</p>
                      <p className="text-sm font-semibold text-foreground">{selectedCompany.position}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-primary text-sm">💰</span>
                    <div>
                      <p className="text-xs text-muted-foreground">Lương</p>
                      <p className="text-sm font-semibold text-primary">{selectedCompany.salary}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Gift className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Đãi ngộ</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedCompany.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
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

        {/* Company List - Horizontal scroll */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Công ty tại {locations.find(l => l.key === selectedLocation)?.label} ({companies.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {companies.map((company, index) => (
              <button
                key={company.id}
                onClick={() => setSelectedCompanyIndex(index)}
                className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedCompanyIndex === index
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-card hover:border-primary/50 hover:shadow-sm"
                }`}
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden mx-auto mb-2">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
                <p className="text-xs font-medium text-foreground text-center line-clamp-2">{company.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Xem tất cả công ty
          </Button>
        </div>

      </div>
    </section>
  );
};

export default JobsSection;
