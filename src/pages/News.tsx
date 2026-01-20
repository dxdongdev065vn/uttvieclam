import { Link } from "react-router-dom";
import { Search, Clock, Eye, ChevronRight, TrendingUp, Newspaper, Briefcase, Calendar, Star, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import slideCampus from "@/assets/slide-campus.jpg";
import slideStudents from "@/assets/slide-students.jpg";
import slideTalkshow from "@/assets/slide-talkshow.jpg";
import company1 from "@/assets/company-1.jpg";
import company2 from "@/assets/company-2.jpg";

const categories = [
  { name: "Tất cả tin tức", count: 89, icon: Newspaper, active: true },
  { name: "Tin tuyển dụng", count: 45, icon: Briefcase },
  { name: "Xu hướng nghề nghiệp", count: 28, icon: TrendingUp },
  { name: "Sự kiện", count: 16, icon: Calendar },
];

const featuredNews = {
  id: 1,
  title: "Ngày hội việc làm UTT 2024: Kết nối sinh viên với hơn 50 doanh nghiệp hàng đầu",
  description: "Sự kiện thường niên lớn nhất năm của Trường Đại học Công nghệ GTVT với sự tham gia của các tập đoàn lớn như FPT, Viettel, VNPT và nhiều doanh nghiệp trong ngành Giao thông vận tải.",
  category: "Sự kiện",
  readTime: "5 phút",
  views: 12500,
  image: slideTalkshow,
  date: "18/01/2024",
  isHot: true,
};

const newsArticles = [
  {
    id: 2,
    title: "FPT Software tuyển dụng 200 kỹ sư CNTT tại Hà Nội",
    description: "Cơ hội việc làm hấp dẫn cho sinh viên ngành Công nghệ thông tin với mức lương cạnh tranh.",
    category: "Tin tuyển dụng",
    readTime: "3 phút",
    views: 8234,
    image: company1,
    date: "17/01/2024",
    company: "FPT Software",
    location: "Hà Nội",
  },
  {
    id: 3,
    title: "Xu hướng việc làm ngành Logistics 2024: Cơ hội và thách thức",
    description: "Phân tích chi tiết về thị trường lao động ngành Logistics trong năm 2024.",
    category: "Xu hướng nghề nghiệp",
    readTime: "7 phút",
    views: 6521,
    image: slideStudents,
    date: "16/01/2024",
  },
  {
    id: 4,
    title: "Viettel tổ chức Workshop về 5G và IoT cho sinh viên UTT",
    description: "Chương trình đào tạo thực tế về công nghệ 5G và Internet of Things.",
    category: "Sự kiện",
    readTime: "4 phút",
    views: 5432,
    image: slideCampus,
    date: "15/01/2024",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "Tập đoàn Vingroup mở rộng tuyển dụng kỹ sư ô tô",
    description: "VinFast cần tuyển gấp 500 kỹ sư cho nhà máy sản xuất ô tô điện.",
    category: "Tin tuyển dụng",
    readTime: "4 phút",
    views: 4321,
    image: company2,
    date: "14/01/2024",
    company: "Vingroup",
    location: "Hải Phòng",
  },
  {
    id: 6,
    title: "AI và tự động hóa: Kỹ năng cần thiết cho kỹ sư tương lai",
    description: "Những kỹ năng công nghệ mà sinh viên kỹ thuật cần trang bị ngay từ bây giờ.",
    category: "Xu hướng nghề nghiệp",
    readTime: "6 phút",
    views: 3876,
    image: slideStudents,
    date: "13/01/2024",
  },
  {
    id: 7,
    title: "Samsung Việt Nam tuyển dụng thực tập sinh năm 2024",
    description: "Chương trình thực tập có lương dành cho sinh viên năm cuối các ngành kỹ thuật.",
    category: "Tin tuyển dụng",
    readTime: "3 phút",
    views: 2987,
    image: company1,
    date: "12/01/2024",
    company: "Samsung",
    location: "Bắc Ninh",
  },
];

const upcomingEvents = [
  { id: 1, title: "Career Day 2024", date: "25/01/2024", location: "Cơ sở 1 - Hà Nội" },
  { id: 2, title: "Workshop CV & Phỏng vấn", date: "28/01/2024", location: "Online" },
  { id: 3, title: "Hội thảo Logistics 4.0", date: "01/02/2024", location: "Cơ sở 2 - Phú Thọ" },
  { id: 4, title: "Tech Talk: AI trong GTVT", date: "05/02/2024", location: "Cơ sở 1 - Hà Nội" },
];

const hotCompanies = [
  { id: 1, name: "FPT Software", jobs: 25, image: company1 },
  { id: 2, name: "Viettel", jobs: 18, image: company2 },
  { id: 3, name: "VinFast", jobs: 32, image: company1 },
  { id: 4, name: "Samsung", jobs: 15, image: company2 },
];

const News = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Tin tức" }]} />

          {/* Search Bar */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input 
                  placeholder="Tìm kiếm tin tức, sự kiện..." 
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
                  <Newspaper className="w-5 h-5 text-primary" />
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

              {/* Upcoming Events */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Sự kiện sắp tới
                </h3>
                <ul className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <li key={event.id}>
                      <Link to="#" className="block group">
                        <p className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-1">
                          {event.title}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.location}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hot Companies */}
              <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Doanh nghiệp nổi bật
                </h3>
                <ul className="space-y-3">
                  {hotCompanies.map((company) => (
                    <li key={company.id}>
                      <Link to="#" className="flex items-center gap-3 group">
                        <img 
                          src={company.image} 
                          alt={company.name}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">
                            {company.name}
                          </p>
                          <span className="text-xs text-muted-foreground">
                            {company.jobs} vị trí đang tuyển
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Featured News */}
              <Link 
                to={`/tin-tuc/${featuredNews.id}`}
                className="block bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-red-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> HOT
                    </span>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <span className="text-primary font-medium text-sm mb-2">{featuredNews.category}</span>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {featuredNews.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {featuredNews.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredNews.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {featuredNews.views.toLocaleString()}
                      </span>
                      <span>{featuredNews.date}</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* News Grid */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Tin tức mới nhất</h2>
                  <Link to="#" className="text-primary hover:underline text-sm flex items-center gap-1">
                    Xem tất cả <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsArticles.map((article) => (
                    <Link 
                      key={article.id}
                      to={`/tin-tuc/${article.id}`}
                      className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded ${
                          article.category === "Tin tuyển dụng" 
                            ? "bg-blue-500 text-white" 
                            : article.category === "Xu hướng nghề nghiệp"
                            ? "bg-green-500 text-white"
                            : "bg-purple-500 text-white"
                        }`}>
                          {article.category}
                        </span>
                        {article.isUpcoming && (
                          <span className="absolute top-3 right-3 px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded">
                            Sắp diễn ra
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {article.description}
                        </p>
                        {article.company && (
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                            <Briefcase className="w-3 h-3" />
                            <span>{article.company}</span>
                            <span>•</span>
                            <MapPin className="w-3 h-3" />
                            <span>{article.location}</span>
                          </div>
                        )}
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
                  Xem thêm tin tức
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

export default News;
