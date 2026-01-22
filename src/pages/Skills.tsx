import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  MessageSquare, 
  Brain, 
  Calendar, 
  Clock, 
  Users, 
  Star, 
  Play, 
  BookOpen, 
  Award,
  Sparkles,
  Lightbulb,
  Target,
  TrendingUp,
  Video,
  FileText,
  ChevronRight
} from "lucide-react";

// Soft skills courses
const softSkillsCourses = [
  {
    id: 1,
    title: "Kỹ năng giao tiếp chuyên nghiệp",
    description: "Phát triển khả năng giao tiếp hiệu quả trong môi trường làm việc",
    instructor: "TS. Nguyễn Văn Minh",
    duration: "8 giờ",
    students: 1250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=250&fit=crop",
    level: "Cơ bản",
    category: "Giao tiếp"
  },
  {
    id: 2,
    title: "Quản lý thời gian & Năng suất làm việc",
    description: "Tối ưu hóa hiệu suất công việc với các kỹ thuật quản lý thời gian",
    instructor: "ThS. Trần Thị Hoa",
    duration: "6 giờ",
    students: 980,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
    level: "Trung cấp",
    category: "Năng suất"
  },
  {
    id: 3,
    title: "Làm việc nhóm hiệu quả",
    description: "Xây dựng và dẫn dắt team làm việc đạt hiệu suất cao",
    instructor: "TS. Lê Hoàng Nam",
    duration: "10 giờ",
    students: 756,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop",
    level: "Nâng cao",
    category: "Teamwork"
  },
  {
    id: 4,
    title: "Kỹ năng thuyết trình & Trình bày",
    description: "Tự tin thuyết trình trước đám đông với các kỹ thuật chuyên nghiệp",
    instructor: "ThS. Phạm Thị Lan",
    duration: "5 giờ",
    students: 1100,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=250&fit=crop",
    level: "Cơ bản",
    category: "Thuyết trình"
  },
  {
    id: 5,
    title: "Tư duy phản biện & Giải quyết vấn đề",
    description: "Phát triển tư duy logic và khả năng giải quyết vấn đề phức tạp",
    instructor: "PGS.TS. Hoàng Văn Đức",
    duration: "12 giờ",
    students: 620,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?w=400&h=250&fit=crop",
    level: "Nâng cao",
    category: "Tư duy"
  },
  {
    id: 6,
    title: "Kỹ năng đàm phán & Thương lượng",
    description: "Chiến lược đàm phán hiệu quả trong kinh doanh và công việc",
    instructor: "TS. Nguyễn Thị Mai",
    duration: "7 giờ",
    students: 450,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
    level: "Trung cấp",
    category: "Đàm phán"
  }
];

// AI courses
const aiCourses = [
  {
    id: 1,
    title: "ChatGPT & AI trong học tập",
    description: "Sử dụng AI để nâng cao hiệu quả học tập và nghiên cứu",
    instructor: "TS. Nguyễn Hoàng AI",
    duration: "6 giờ",
    students: 2500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
    level: "Cơ bản",
    isHot: true
  },
  {
    id: 2,
    title: "Prompt Engineering chuyên sâu",
    description: "Kỹ thuật viết prompt hiệu quả cho các mô hình AI",
    instructor: "ThS. Trần Văn Tech",
    duration: "8 giờ",
    students: 1800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=250&fit=crop",
    level: "Trung cấp",
    isHot: true
  },
  {
    id: 3,
    title: "AI Tools cho dân văn phòng",
    description: "Ứng dụng AI trong công việc văn phòng hàng ngày",
    instructor: "ThS. Lê Thị Office",
    duration: "5 giờ",
    students: 1200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    level: "Cơ bản",
    isNew: true
  },
  {
    id: 4,
    title: "Tạo nội dung với AI (Midjourney, DALL-E)",
    description: "Sáng tạo hình ảnh và nội dung với công cụ AI",
    instructor: "Designer Phạm Văn Art",
    duration: "10 giờ",
    students: 890,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1686191128892-3b37add0332d?w=400&h=250&fit=crop",
    level: "Trung cấp",
    isNew: true
  }
];

// Workshops/Events
const workshops = [
  {
    id: 1,
    title: "Hội thảo: Xu hướng nghề nghiệp 2025",
    date: "15/02/2025",
    time: "14:00 - 17:00",
    location: "Hội trường A1, Đại học UTT",
    speaker: "Các chuyên gia hàng đầu",
    slots: 200,
    registered: 156,
    type: "Hội thảo",
    isUpcoming: true
  },
  {
    id: 2,
    title: "Workshop: Phỏng vấn thành công",
    date: "20/02/2025",
    time: "09:00 - 12:00",
    location: "Phòng Lab 305",
    speaker: "HR Manager - FPT Software",
    slots: 50,
    registered: 48,
    type: "Workshop",
    isUpcoming: true
  },
  {
    id: 3,
    title: "Chia sẻ: Hành trình khởi nghiệp",
    date: "25/02/2025",
    time: "18:00 - 20:00",
    location: "Online - Zoom",
    speaker: "CEO Startup ABC",
    slots: 500,
    registered: 320,
    type: "Chia sẻ",
    isUpcoming: true
  },
  {
    id: 4,
    title: "Tập huấn: Kỹ năng lãnh đạo Gen Z",
    date: "01/03/2025",
    time: "08:30 - 16:30",
    location: "Trung tâm Đào tạo UTT",
    speaker: "Chuyên gia Leadership",
    slots: 30,
    registered: 28,
    type: "Tập huấn",
    isUpcoming: true
  }
];

const Skills = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "ky-nang";

  const handleTabChange = (value: string) => {
    if (value === "ky-nang") {
      setSearchParams({});
    } else {
      setSearchParams({ tab: value });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Kỹ Năng & AI
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Phát triển kỹ năng mềm và ứng dụng AI trong học tập, công việc
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Kỹ Năng & AI" }]} />

        <Tabs value={currentTab} onValueChange={handleTabChange} className="mt-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:inline-grid mb-8">
            <TabsTrigger value="ky-nang" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Kỹ năng mềm</span>
              <span className="sm:hidden">Kỹ năng</span>
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span className="hidden sm:inline">AI ứng dụng</span>
              <span className="sm:hidden">AI</span>
            </TabsTrigger>
            <TabsTrigger value="hoi-thao" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Hội thảo</span>
              <span className="sm:hidden">Sự kiện</span>
            </TabsTrigger>
          </TabsList>

          {/* Soft Skills Tab */}
          <TabsContent value="ky-nang">
            <div className="space-y-8">
              {/* Search & Filter */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Tìm kiếm khóa học kỹ năng..." 
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button variant="outline" size="sm">Tất cả</Button>
                  <Button variant="outline" size="sm">Giao tiếp</Button>
                  <Button variant="outline" size="sm">Năng suất</Button>
                  <Button variant="outline" size="sm">Teamwork</Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Khóa học</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">5,000+</p>
                  <p className="text-sm text-muted-foreground">Học viên</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">20+</p>
                  <p className="text-sm text-muted-foreground">Giảng viên</p>
                </div>
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">4.8</p>
                  <p className="text-sm text-muted-foreground">Đánh giá</p>
                </div>
              </div>

              {/* Courses Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {softSkillsCourses.map((course) => (
                  <div key={course.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium ${
                        course.level === "Cơ bản" ? "bg-green-500 text-white" :
                        course.level === "Trung cấp" ? "bg-yellow-500 text-white" :
                        "bg-red-500 text-white"
                      }`}>
                        {course.level}
                      </span>
                      <Button size="icon" variant="secondary" className="absolute bottom-3 right-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-primary font-medium">{course.category}</span>
                      <h3 className="font-semibold text-foreground mt-1 line-clamp-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{course.description}</p>
                      <div className="flex items-center gap-2 mt-3 text-sm text-muted-foreground">
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {course.students}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" size="lg">
                  Xem thêm khóa học
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>

          {/* AI Tab */}
          <TabsContent value="ai">
            <div className="space-y-8">
              {/* AI Hero */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-8 h-8" />
                  <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">HOT 2025</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                  Làm chủ AI trong học tập & công việc
                </h2>
                <p className="text-white/80 max-w-2xl mb-6">
                  Khám phá cách sử dụng ChatGPT, Midjourney, và các công cụ AI khác để tăng năng suất 10x
                </p>
                <Button className="bg-white text-purple-600 hover:bg-white/90">
                  Bắt đầu học ngay
                </Button>
              </div>

              {/* AI Courses */}
              <div className="grid md:grid-cols-2 gap-6">
                {aiCourses.map((course) => (
                  <div key={course.id} className="bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex">
                    <div className="relative w-1/3">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      {course.isHot && (
                        <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                          HOT
                        </span>
                      )}
                      {course.isNew && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-0.5 rounded text-xs font-medium">
                          MỚI
                        </span>
                      )}
                    </div>
                    <div className="flex-1 p-4 flex flex-col">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded self-start ${
                        course.level === "Cơ bản" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {course.level}
                      </span>
                      <h3 className="font-semibold text-foreground mt-2">{course.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 flex-1">{course.description}</p>
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            {course.rating}
                          </span>
                        </div>
                        <Button size="sm" variant="outline">
                          Xem chi tiết
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Resources */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-xl p-6 text-center hover:bg-muted/80 transition-colors cursor-pointer">
                  <Video className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">Video Tutorials</h3>
                  <p className="text-sm text-muted-foreground mt-1">100+ video hướng dẫn AI</p>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center hover:bg-muted/80 transition-colors cursor-pointer">
                  <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">Prompt Library</h3>
                  <p className="text-sm text-muted-foreground mt-1">500+ prompts mẫu</p>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center hover:bg-muted/80 transition-colors cursor-pointer">
                  <Lightbulb className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">Use Cases</h3>
                  <p className="text-sm text-muted-foreground mt-1">50+ tình huống thực tế</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Workshops Tab */}
          <TabsContent value="hoi-thao">
            <div className="space-y-8">
              {/* Filter */}
              <div className="flex flex-wrap gap-2">
                <Button variant="default" size="sm">Tất cả</Button>
                <Button variant="outline" size="sm">Hội thảo</Button>
                <Button variant="outline" size="sm">Workshop</Button>
                <Button variant="outline" size="sm">Chia sẻ</Button>
                <Button variant="outline" size="sm">Tập huấn</Button>
              </div>

              {/* Events List */}
              <div className="space-y-4">
                {workshops.map((event) => (
                  <div key={event.id} className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-4">
                      {/* Date Box */}
                      <div className="flex-shrink-0 w-20 h-20 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground">
                        <span className="text-2xl font-bold">{event.date.split("/")[0]}</span>
                        <span className="text-sm">Tháng {event.date.split("/")[1]}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                                event.type === "Hội thảo" ? "bg-blue-100 text-blue-700" :
                                event.type === "Workshop" ? "bg-purple-100 text-purple-700" :
                                event.type === "Chia sẻ" ? "bg-green-100 text-green-700" :
                                "bg-orange-100 text-orange-700"
                              }`}>
                                {event.type}
                              </span>
                              {event.isUpcoming && (
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700">
                                  Sắp diễn ra
                                </span>
                              )}
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                          </div>
                          <Button>Đăng ký</Button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>{event.speaker}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            <span>{event.registered}/{event.slots} đã đăng ký</span>
                          </div>
                        </div>

                        {/* Progress bar */}
                        <div className="mt-3">
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-primary rounded-full transition-all"
                              style={{ width: `${(event.registered / event.slots) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-muted rounded-2xl p-8 text-center">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Đề xuất sự kiện</h3>
                <p className="text-muted-foreground mb-4">
                  Bạn có ý tưởng cho một hội thảo hoặc workshop? Hãy chia sẻ với chúng tôi!
                </p>
                <Button variant="outline">Gửi đề xuất</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
