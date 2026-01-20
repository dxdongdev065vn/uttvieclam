import { Link } from "react-router-dom";
import { Search, Clock, Eye, ChevronRight, TrendingUp, BookOpen, FileText, Users, MessageSquare, Bot, GraduationCap } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import articleCV from "@/assets/article-cv.jpg";
import articleInterview from "@/assets/article-interview.jpg";
import articleNetworking from "@/assets/article-networking.jpg";

const categories = [
  { name: "Tất cả bài viết", count: 156, icon: BookOpen, active: true },
  { name: "CV & Hồ sơ", count: 42, icon: FileText },
  { name: "Phỏng vấn", count: 38, icon: MessageSquare },
  { name: "Kỹ năng mềm", count: 35, icon: Users },
  { name: "Công nghệ & AI", count: 25, icon: Bot },
  { name: "Phát triển sự nghiệp", count: 16, icon: GraduationCap },
];

const featuredArticle = {
  id: 1,
  title: "Hướng dẫn viết CV xin việc chuẩn nhất 2024",
  description: "Tổng hợp các mẹo và kỹ thuật giúp bạn tạo CV ấn tượng, thu hút nhà tuyển dụng ngay từ cái nhìn đầu tiên. Bao gồm các mẫu CV đẹp và chuyên nghiệp.",
  category: "CV & Hồ sơ",
  readTime: "10 phút",
  views: 15420,
  image: articleCV,
  date: "15/01/2024",
};

const articles = [
  {
    id: 2,
    title: "5 điều nhà tuyển dụng muốn bạn biết",
    description: "Những bí quyết giúp bạn gây ấn tượng với nhà tuyển dụng ngay từ lần gặp đầu tiên.",
    category: "Phỏng vấn",
    readTime: "5 phút",
    views: 8234,
    image: articleInterview,
    date: "12/01/2024",
  },
  {
    id: 3,
    title: "Bước gần hơn về phía nhà tuyển dụng",
    description: "Chiến lược networking hiệu quả giúp bạn tiếp cận cơ hội việc làm tốt hơn.",
    category: "Kỹ năng",
    readTime: "6 phút",
    views: 6521,
    image: articleNetworking,
    date: "10/01/2024",
  },
  {
    id: 4,
    title: "Ứng dụng AI trong tìm việc làm",
    description: "Cách sử dụng các công cụ AI để tối ưu hóa quá trình tìm việc và nâng cao năng lực.",
    category: "Công nghệ & AI",
    readTime: "8 phút",
    views: 5432,
    image: articleCV,
    date: "08/01/2024",
  },
  {
    id: 5,
    title: "Kỹ năng làm việc nhóm hiệu quả",
    description: "Phát triển kỹ năng teamwork để trở thành ứng viên được săn đón.",
    category: "Kỹ năng mềm",
    readTime: "7 phút",
    views: 4321,
    image: articleInterview,
    date: "05/01/2024",
  },
  {
    id: 6,
    title: "Chuẩn bị phỏng vấn online thành công",
    description: "Tips và tricks giúp bạn tự tin trong các buổi phỏng vấn trực tuyến.",
    category: "Phỏng vấn",
    readTime: "5 phút",
    views: 3876,
    image: articleNetworking,
    date: "03/01/2024",
  },
  {
    id: 7,
    title: "Email xin việc chuyên nghiệp",
    description: "Hướng dẫn viết email xin việc thu hút, tăng cơ hội được phản hồi.",
    category: "CV & Hồ sơ",
    readTime: "4 phút",
    views: 2987,
    image: articleCV,
    date: "01/01/2024",
  },
];

const popularArticles = [
  { id: 1, title: "Mẫu CV xin việc đẹp nhất 2024", views: 25000 },
  { id: 2, title: "Câu hỏi phỏng vấn thường gặp", views: 18500 },
  { id: 3, title: "Cách tự giới thiệu bản thân", views: 15200 },
  { id: 4, title: "Kỹ năng thuyết trình hiệu quả", views: 12800 },
  { id: 5, title: "Bí quyết đàm phán lương", views: 10500 },
];

const Handbook = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Cẩm nang nghề nghiệp" }]} />

          {/* Search Bar */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Tìm kiếm bài viết, chủ đề..." 
                  className="pl-12 h-12 bg-background"
                />
              </div>
              <Button className="h-12 px-8 bg-primary hover:bg-primary/90">
                <Search className="w-5 h-5 mr-2" />
                Tìm kiếm
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 pb-16">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Categories */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Danh mục
                </h3>
                <ul className="space-y-1">
                  {categories.map((cat, index) => (
                    <li key={index}>
                      <Link 
                        to="#" 
                        className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-colors ${
                          cat.active 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted text-foreground'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <cat.icon className="w-4 h-4" />
                          {cat.name}
                        </span>
                        <span className={`text-sm ${cat.active ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                          {cat.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Articles */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Bài viết phổ biến
                </h3>
                <ul className="space-y-3">
                  {popularArticles.map((article, index) => (
                    <li key={article.id}>
                      <Link to="#" className="flex items-start gap-3 group">
                        <span className="flex-shrink-0 w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                            {article.title}
                          </p>
                          <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <Eye className="w-3 h-3" />
                            {article.views.toLocaleString()} lượt xem
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-5 text-primary-foreground">
                <h3 className="font-bold text-lg mb-2">Đăng ký nhận tin</h3>
                <p className="text-sm opacity-90 mb-4">Nhận bài viết mới nhất qua email</p>
                <Input 
                  placeholder="Email của bạn" 
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 mb-3"
                />
                <Button className="w-full bg-white text-primary hover:bg-white/90">
                  Đăng ký ngay
                </Button>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured Article */}
              <Link 
                to={`/cam-nang/${featuredArticle.id}`}
                className="block bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Nổi bật
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-primary font-medium text-sm mb-2">{featuredArticle.category}</span>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {featuredArticle.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredArticle.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredArticle.views.toLocaleString()}
                      </span>
                      <span>{featuredArticle.date}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Articles Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Bài viết mới nhất</h2>
                  <Link to="#" className="text-primary hover:underline text-sm flex items-center gap-1">
                    Xem tất cả <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {articles.map((article) => (
                    <Link 
                      key={article.id}
                      to={`/cam-nang/${article.id}`}
                      className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className="absolute top-3 left-3 px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                          {article.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {article.views.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline" className="px-8">
                  Xem thêm bài viết
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Handbook;
