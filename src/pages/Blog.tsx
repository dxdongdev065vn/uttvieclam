import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MessageCircle, Heart, Eye, Clock, User, PenSquare, TrendingUp, Users, Briefcase, GraduationCap, Lightbulb } from "lucide-react";

const categories = [
  { name: "Tất cả", icon: MessageCircle, count: 156 },
  { name: "Chia sẻ kinh nghiệm", icon: Lightbulb, count: 42 },
  { name: "Hỏi đáp nghề nghiệp", icon: Users, count: 38 },
  { name: "Review công ty", icon: Briefcase, count: 28 },
  { name: "Học tập & Phát triển", icon: GraduationCap, count: 48 },
];

const trendingTopics = [
  "Kinh nghiệm thực tập",
  "Phỏng vấn IT",
  "CV sinh viên mới ra trường",
  "Công ty tốt Hà Nội",
  "Lương fresher 2024",
];

const blogPosts = [
  {
    id: 1,
    title: "Chia sẻ kinh nghiệm thực tập 3 tháng tại công ty IT lớn",
    excerpt: "Mình vừa hoàn thành 3 tháng thực tập tại một công ty công nghệ và muốn chia sẻ những bài học quý giá...",
    author: "Nguyễn Minh Anh",
    avatar: "/placeholder.svg",
    category: "Chia sẻ kinh nghiệm",
    date: "2 giờ trước",
    views: 1234,
    likes: 89,
    comments: 23,
    isHot: true,
  },
  {
    id: 2,
    title: "Hỏi: Nên chọn thực tập ở startup hay công ty lớn?",
    excerpt: "Mình đang phân vân giữa 2 offer thực tập, một bên là startup fintech và một bên là tập đoàn lớn. Mọi người cho mình xin ý kiến...",
    author: "Trần Hoàng Nam",
    avatar: "/placeholder.svg",
    category: "Hỏi đáp nghề nghiệp",
    date: "5 giờ trước",
    views: 876,
    likes: 45,
    comments: 67,
    isHot: false,
  },
  {
    id: 3,
    title: "Review thực tế: Làm việc tại FPT Software như thế nào?",
    excerpt: "Sau 6 tháng làm việc tại FPT Software, mình muốn chia sẻ những góc nhìn chân thực nhất về môi trường làm việc...",
    author: "Lê Thị Hương",
    avatar: "/placeholder.svg",
    category: "Review công ty",
    date: "1 ngày trước",
    views: 2341,
    likes: 156,
    comments: 89,
    isHot: true,
  },
  {
    id: 4,
    title: "Cách tự học lập trình hiệu quả cho sinh viên năm nhất",
    excerpt: "Mình là sinh viên CNTT năm 3, muốn chia sẻ lộ trình tự học lập trình mà mình đã áp dụng từ năm nhất...",
    author: "Phạm Đức Huy",
    avatar: "/placeholder.svg",
    category: "Học tập & Phát triển",
    date: "2 ngày trước",
    views: 1567,
    likes: 112,
    comments: 34,
    isHot: false,
  },
  {
    id: 5,
    title: "Kinh nghiệm chuẩn bị hồ sơ xin việc cho sinh viên mới ra trường",
    excerpt: "Nhiều bạn sinh viên thường bối rối khi chuẩn bị hồ sơ xin việc. Bài viết này sẽ hướng dẫn chi tiết từng bước...",
    author: "Vũ Thị Mai",
    avatar: "/placeholder.svg",
    category: "Chia sẻ kinh nghiệm",
    date: "3 ngày trước",
    views: 987,
    likes: 78,
    comments: 21,
    isHot: false,
  },
  {
    id: 6,
    title: "Hỏi: Mức lương fresher IT hiện tại như thế nào?",
    excerpt: "Mình sắp ra trường và đang tìm hiểu về mức lương của fresher IT. Các anh chị có thể chia sẻ thực tế không ạ?",
    author: "Đỗ Văn Tùng",
    avatar: "/placeholder.svg",
    category: "Hỏi đáp nghề nghiệp",
    date: "3 ngày trước",
    views: 2156,
    likes: 134,
    comments: 156,
    isHot: true,
  },
];

const topContributors = [
  { name: "Nguyễn Minh Anh", posts: 45, avatar: "/placeholder.svg" },
  { name: "Trần Văn Hùng", posts: 38, avatar: "/placeholder.svg" },
  { name: "Lê Thị Mai", posts: 32, avatar: "/placeholder.svg" },
  { name: "Phạm Đức Thắng", posts: 28, avatar: "/placeholder.svg" },
  { name: "Hoàng Thị Lan", posts: 25, avatar: "/placeholder.svg" },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <Breadcrumb 
              items={[
                { label: "Trang chủ", path: "/" },
                { label: "Blog" }
              ]} 
            />
            <div className="text-center mt-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Blog Cộng Đồng Ứng Viên
              </h1>
              <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-8">
                Nơi chia sẻ kinh nghiệm, đặt câu hỏi và kết nối với cộng đồng sinh viên và ứng viên
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Tìm kiếm bài viết, chủ đề..." 
                    className="pl-12 h-12 bg-background text-foreground rounded-lg border-0"
                  />
                </div>
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Sidebar - Categories */}
              <aside className="lg:w-64 shrink-0">
                <div className="bg-background rounded-xl shadow-sm border border-border p-5 sticky top-24">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Danh mục</h3>
                  </div>
                  <div className="space-y-1">
                    {categories.map((category, index) => (
                      <button
                        key={index}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                          index === 0 
                            ? "bg-primary text-primary-foreground" 
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <category.icon className="w-4 h-4" />
                          <span>{category.name}</span>
                        </div>
                        <span className={`text-xs ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      <PenSquare className="w-4 h-4 mr-2" />
                      Viết bài mới
                    </Button>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <div className="flex-1">
                {/* Posts Grid */}
                <div className="space-y-4">
                  {blogPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-background rounded-xl shadow-sm border border-border p-5 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                            <User className="w-5 h-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground text-sm">{post.author}</p>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {post.isHot && (
                            <Badge className="bg-destructive text-destructive-foreground text-xs">
                              HOT
                            </Badge>
                          )}
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                      </div>

                      <h2 className="text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Eye className="w-4 h-4" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments} bình luận</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    Xem thêm bài viết
                  </Button>
                </div>
              </div>

              {/* Right Sidebar */}
              <aside className="lg:w-72 shrink-0 space-y-6">
                {/* Trending Topics */}
                <div className="bg-background rounded-xl shadow-sm border border-border p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Chủ đề hot</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {trendingTopics.map((topic, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        #{topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Top Contributors */}
                <div className="bg-background rounded-xl shadow-sm border border-border p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-foreground">Top đóng góp</h3>
                  </div>
                  <div className="space-y-3">
                    {topContributors.map((contributor, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-muted-foreground">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{contributor.name}</p>
                          <p className="text-xs text-muted-foreground">{contributor.posts} bài viết</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Community Stats */}
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-5 text-primary-foreground">
                  <h3 className="font-bold mb-4">Thống kê cộng đồng</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">5.2K</p>
                      <p className="text-xs text-primary-foreground/80">Thành viên</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">1.8K</p>
                      <p className="text-xs text-primary-foreground/80">Bài viết</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">12K</p>
                      <p className="text-xs text-primary-foreground/80">Bình luận</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold">89</p>
                      <p className="text-xs text-primary-foreground/80">Đang online</p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
