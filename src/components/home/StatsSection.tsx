import { Building2, Users, Briefcase, ThumbsUp, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "200+",
    label: "Doanh nghiệp đối tác",
    trend: "+15%"
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Sinh viên kết nối",
    trend: "+23%"
  },
  {
    icon: Briefcase,
    value: "500+",
    label: "Việc làm mỗi tháng",
    trend: "+18%"
  },
  {
    icon: ThumbsUp,
    value: "95%",
    label: "Tỷ lệ hài lòng",
    trend: "+5%"
  }
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-4 left-[10%] w-20 h-20 bg-primary-foreground/5 rounded-full animate-float" />
      <div className="absolute bottom-4 right-[15%] w-16 h-16 bg-primary-foreground/5 rounded-full animate-pulse-slow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left: Title */}
          <div className="lg:w-1/4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Award className="w-6 h-6 text-primary-foreground" />
              <span className="text-primary-foreground/80 text-sm font-medium">Thành tựu</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-primary-foreground">
              Được tin tưởng bởi các doanh nghiệp hàng đầu
            </h2>
          </div>

          {/* Right: Stats Grid */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex items-center justify-center gap-1.5 mb-1">
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                      {stat.value}
                    </span>
                    <span className="flex items-center text-xs text-primary-foreground/70 bg-primary-foreground/10 px-1.5 py-0.5 rounded-full">
                      <TrendingUp className="w-3 h-3 mr-0.5" />
                      {stat.trend}
                    </span>
                  </div>
                  <span className="text-primary-foreground/80 text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
