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
    <section className="py-12 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10 italic">
          Được tin tưởng bởi các doanh nghiệp hàng đầu
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mb-4">
                <stat.icon className="w-8 h-8 text-muted-foreground" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
