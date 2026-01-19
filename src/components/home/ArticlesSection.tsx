import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import articleInterview from "@/assets/article-interview.jpg";
import articleCV from "@/assets/article-cv.jpg";
import articleNetworking from "@/assets/article-networking.jpg";

const articles = [
  {
    id: 1,
    title: "5 điều nhà tuyển dụng muốn bạn biết",
    description: "Những bí quyết giúp bạn gây ấn tượng với nhà tuyển dụng ngay từ lần gặp đầu tiên.",
    category: "Phỏng vấn",
    readTime: "5 phút",
    image: articleInterview,
  },
  {
    id: 2,
    title: "Cách viết CV chuyên viên chuẩn nhất",
    description: "Hướng dẫn chi tiết cách trình bày CV chuyên nghiệp cho mọi ngành nghề.",
    category: "CV & Hồ sơ",
    readTime: "8 phút",
    image: articleCV,
  },
  {
    id: 3,
    title: "Bước gần hơn về phía nhà tuyển dụng",
    description: "Chiến lược networking hiệu quả giúp bạn tiếp cận cơ hội việc làm tốt hơn.",
    category: "Kỹ năng",
    readTime: "6 phút",
    image: articleNetworking,
  },
];

const ArticlesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            BÀI VIẾT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Bài viết <span className="text-primary">hữu ích</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Kiến thức và kỹ năng cần thiết cho sự nghiệp của bạn
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link 
              key={article.id} 
              to={`/cam-nang/${article.id}`}
              className="utt-card overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
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
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link to="/cam-nang">
            <Button className="utt-btn-primary">
              Xem tất cả bài viết
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
