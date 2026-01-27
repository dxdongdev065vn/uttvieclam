import { Link } from "react-router-dom";
import { ArrowRight, Clock, Briefcase, Lightbulb, Calendar, Flame, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleInterview from "@/assets/article-interview.jpg";
import articleCV from "@/assets/article-cv.jpg";
import articleNetworking from "@/assets/article-networking.jpg";

const newsCategories = [
  { name: "Tin tuyển dụng", icon: Briefcase, color: "bg-blue-500", href: "/tin-tuc?category=tuyen-dung" },
  { name: "Xu hướng nghề nghiệp", icon: Lightbulb, color: "bg-purple-500", href: "/tin-tuc?category=xu-huong" },
  { name: "Sự kiện", icon: Calendar, color: "bg-orange-500", href: "/tin-tuc?category=su-kien" },
];

const articles = [
  {
    id: 1,
    title: "FPT Software tuyển dụng 500 kỹ sư phần mềm năm 2025",
    description: "Cơ hội việc làm hấp dẫn cho sinh viên CNTT với mức lương cạnh tranh và môi trường làm việc quốc tế.",
    category: "Tin tuyển dụng",
    categoryIcon: Briefcase,
    readTime: "3 phút",
    image: articleInterview,
    isHot: true,
    href: "/tin-tuc?category=tuyen-dung"
  },
  {
    id: 2,
    title: "Xu hướng nghề nghiệp 2025: AI và Data Science dẫn đầu",
    description: "Phân tích chi tiết các ngành nghề hot nhất năm 2025 và kỹ năng cần thiết để thành công.",
    category: "Xu hướng nghề nghiệp",
    categoryIcon: Lightbulb,
    readTime: "5 phút",
    image: articleCV,
    isHot: false,
    href: "/tin-tuc?category=xu-huong"
  },
  {
    id: 3,
    title: "Ngày hội việc làm UTT 2025 - Kết nối 50+ doanh nghiệp",
    description: "Sự kiện tuyển dụng quy mô lớn nhất năm với sự tham gia của các tập đoàn hàng đầu Việt Nam.",
    category: "Sự kiện",
    categoryIcon: Calendar,
    readTime: "4 phút",
    image: articleNetworking,
    isHot: true,
    href: "/tin-tuc?category=su-kien"
  },
];

const ArticlesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="inline-block bg-primary/10 text-primary px-6 py-2.5 rounded-full text-base font-semibold mb-4">
            BẢN TIN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bản tin <span className="text-primary">mới nhất</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Cập nhật tin tức tuyển dụng, xu hướng nghề nghiệp và sự kiện
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {newsCategories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <Link
                key={cat.name}
                to={cat.href}
                className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-colors group"
              >
                <div className={`w-6 h-6 rounded-full ${cat.color} flex items-center justify-center`}>
                  <IconComponent className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
            const CategoryIcon = article.categoryIcon;
            return (
              <Link 
                key={article.id} 
                to={article.href}
                className="bg-background rounded-2xl border border-border overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1.5">
                      <CategoryIcon className="w-3 h-3" />
                      {article.category}
                    </span>
                    {article.isHot && (
                      <span className="px-2 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        HOT
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Đọc thêm <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Trending Topics */}
        <div className="mt-10 bg-background rounded-2xl border border-border p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-foreground">Xu hướng tìm kiếm</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Việc làm IT", "Thực tập 2025", "Kỹ sư cầu đường", "Logistics", "AI Engineer", "Data Analyst", "Marketing", "Fresh graduate"].map((topic) => (
              <Link
                key={topic}
                to={`/viec-lam?q=${encodeURIComponent(topic)}`}
                className="px-4 py-2 bg-muted rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link to="/tin-tuc">
            <Button className="utt-btn-primary">
              Xem tất cả bản tin
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;