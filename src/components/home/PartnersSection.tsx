import { Building2 } from "lucide-react";

const stats = [
  { value: "200+", label: "Doanh nghiệp đối tác" },
  { value: "10,000+", label: "Sinh viên kết nối" },
  { value: "500+", label: "Việc làm mỗi tháng" },
  { value: "95%", label: "Tỷ lệ hài lòng" },
];

const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

const PartnersSection = () => {
  return (
    <section className="utt-section bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">ĐỐI TÁC TUYỂN DỤNG</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Được tin tưởng bởi các doanh nghiệp hàng đầu
          </h2>
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-muted rounded-xl p-6 flex items-center justify-center h-24 hover:shadow-md transition-shadow"
            >
              <Building2 className="w-12 h-12 text-muted-foreground/50" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
