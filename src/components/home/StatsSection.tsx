import { Building2, Users, Briefcase, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Doanh nghiệp đối tác"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Sinh viên kết nối"
  },
  {
    icon: Briefcase,
    value: "500+",
    label: "Việc làm mỗi tháng"
  },
  {
    icon: ThumbsUp,
    value: "95%",
    label: "Tỷ lệ hài lòng"
  }
];

const StatsSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl shadow-lg px-8 py-6 max-w-4xl w-full">
          <h2 className="text-lg md:text-xl font-semibold text-center text-foreground mb-6 italic">
            Được tin tưởng bởi các doanh nghiệp hàng đầu
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl md:text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs md:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
