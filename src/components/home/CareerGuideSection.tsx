import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Brain, 
  Users, 
  ArrowRight, 
  BookOpen, 
  Video, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  HelpCircle, 
  UserCheck,
  Clock,
  Eye,
  Play,
  Star,
  Calendar,
  User,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Cột 1: Cẩm nang & Bài viết - Kỹ năng mềm
const skillArticles = [
  {
    id: 1,
    title: "Cách viết Email chuyên nghiệp trong công việc",
    type: "Cẩm nang",
    icon: Mail,
    views: 2450,
    duration: "5 phút đọc",
    isNew: true,
  },
  {
    id: 2,
    title: "Kỹ năng thuyết trình hiệu quả trước đám đông",
    type: "Video",
    icon: Video,
    views: 1820,
    duration: "12 phút",
    isNew: false,
  },
  {
    id: 3,
    title: "Tư duy phản biện trong giải quyết vấn đề",
    type: "Bài viết",
    icon: BookOpen,
    views: 980,
    duration: "8 phút đọc",
    isNew: true,
  },
];

// Cột 2: Khóa học AI
const aiCourses = [
  {
    id: 1,
    title: "ChatGPT cho sinh viên - Từ cơ bản đến nâng cao",
    instructor: "TS. Nguyễn Văn Minh",
    price: "Miễn phí",
    isPaid: false,
    rating: 4.8,
    students: 520,
    level: "Cơ bản",
  },
  {
    id: 2,
    title: "Ứng dụng AI trong nghiên cứu khoa học",
    instructor: "PGS. Trần Hương Lan",
    price: "500.000đ",
    isPaid: true,
    rating: 4.9,
    students: 180,
    level: "Nâng cao",
  },
  {
    id: 3,
    title: "Tạo CV và Portfolio với AI",
    instructor: "ThS. Lê Hoàng Nam",
    price: "Miễn phí",
    isPaid: false,
    rating: 4.7,
    students: 890,
    level: "Cơ bản",
  },
];

// Cột 3: Hội thảo & Forum
const forumEvents = [
  {
    id: 1,
    title: "Hỏi đáp: Phỏng vấn tại Samsung Vietnam",
    speaker: "Nguyễn Minh Tuấn - Samsung",
    speakerType: "Chuyên gia",
    date: "25/01/2026",
    time: "14:00",
    registered: 45,
    isLive: false,
  },
  {
    id: 2,
    title: "Chia sẻ: Hành trình từ SV đến Team Lead",
    speaker: "Trần Thu Hà - K62",
    speakerType: "Cựu SV",
    date: "28/01/2026",
    time: "19:00",
    registered: 78,
    isLive: false,
  },
  {
    id: 3,
    title: "Tips: Viết CV ấn tượng cho Fresh Graduate",
    speaker: "Lê Văn Đức - HR Manager",
    speakerType: "Chuyên gia",
    date: "Đang diễn ra",
    time: "",
    registered: 120,
    isLive: true,
  },
];

const CareerGuideSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-background to-accent/20 relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">
            KỸ NĂNG & AI
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            KỸ NĂNG & <span className="text-primary">AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Phát triển kỹ năng mềm và ứng dụng AI trong học tập, công việc
          </p>
        </div>

        {/* Three Columns Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Column 1: Kỹ năng làm việc & Kỹ năng mềm */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">KỸ NĂNG LÀM VIỆC</h3>
                  <p className="text-white/80 text-sm">Cẩm nang, Video, Bài viết</p>
                </div>
              </div>
            </div>
            
            {/* Content - Articles List */}
            <div className="p-4 flex-1 space-y-3">
              {skillArticles.map((article) => {
                const ArticleIcon = article.icon;
                return (
                  <Link
                    key={article.id}
                    to={`/ky-nang/bai-viet/${article.id}`}
                    className="block bg-muted/50 hover:bg-muted rounded-xl p-3 transition-all hover:shadow-md group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                        {article.type === "Video" ? (
                          <Play className="w-5 h-5 text-blue-600" />
                        ) : (
                          <ArticleIcon className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                            {article.type}
                          </Badge>
                          {article.isNew && (
                            <Badge className="text-xs bg-green-500">Mới</Badge>
                          )}
                        </div>
                        <h4 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {article.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 pt-0 space-y-2">
              <Link to="/ky-nang" className="block">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  Xem tất cả bài viết
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/ky-nang?action=consult" className="block">
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                  Tư vấn lộ trình
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2: Ứng dụng AI trong công việc & học tập */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">ỨNG DỤNG AI</h3>
                  <p className="text-white/80 text-sm">Khóa học Miễn phí & Trả phí</p>
                </div>
              </div>
            </div>
            
            {/* Content - Courses List */}
            <div className="p-4 flex-1 space-y-3">
              {aiCourses.map((course) => (
                <Link
                  key={course.id}
                  to={`/ky-nang/khoa-hoc/${course.id}`}
                  className="block bg-muted/50 hover:bg-muted rounded-xl p-3 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={course.isPaid ? "bg-amber-500" : "bg-green-500"}>
                      {course.price}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-purple-600 transition-colors mb-2">
                    {course.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <GraduationCap className="w-3 h-3" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-amber-500">
                      <Star className="w-3 h-3 fill-current" />
                      {course.rating}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {course.students} học viên
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 pt-0 space-y-2">
              <Link to="/ky-nang?tab=ai" className="block">
                <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                  Khám phá khóa học AI
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/ky-nang?tab=ai&action=register" className="block">
                <Button variant="outline" className="w-full border-purple-200 text-purple-600 hover:bg-purple-50">
                  Đăng ký khóa học
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 3: Hội thảo & Chia sẻ kinh nghiệm */}
          <div className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">HỘI THẢO & FORUM</h3>
                  <p className="text-white/80 text-sm">Chuyên gia & Cựu SV chia sẻ</p>
                </div>
              </div>
            </div>
            
            {/* Content - Events List */}
            <div className="p-4 flex-1 space-y-3">
              {forumEvents.map((event) => (
                <Link
                  key={event.id}
                  to={`/ky-nang/hoi-thao/${event.id}`}
                  className="block bg-muted/50 hover:bg-muted rounded-xl p-3 transition-all hover:shadow-md group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {event.isLive ? (
                      <Badge className="bg-red-500 animate-pulse">
                        🔴 LIVE
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="text-xs bg-orange-50 text-orange-600 border-orange-200">
                        <Calendar className="w-3 h-3 mr-1" />
                        {event.date}
                      </Badge>
                    )}
                    <Badge className={event.speakerType === "Chuyên gia" ? "bg-blue-500" : "bg-green-500"}>
                      {event.speakerType}
                    </Badge>
                  </div>
                  <h4 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-orange-600 transition-colors mb-2">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <UserCheck className="w-3 h-3" />
                    <span>{event.speaker}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    {!event.isLive && event.time && (
                      <span className="text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                    )}
                    <span className="text-orange-600 flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      {event.registered} đăng ký
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 pt-0 space-y-2">
              <Link to="/ky-nang?tab=hoi-thao" className="block">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  Xem lịch sự kiện
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/ky-nang?tab=hoi-thao&action=suggest" className="block">
                <Button variant="outline" className="w-full border-orange-200 text-orange-600 hover:bg-orange-50">
                  Đề xuất chủ đề
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link to="/ky-nang">
            <Button variant="outline" size="lg" className="px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Khám phá tất cả kỹ năng & AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CareerGuideSection;
