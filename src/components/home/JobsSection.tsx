import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Building2, Clock, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  {
    id: 1,
    title: "Nhân Viên Tư Vấn Tuyển Sinh",
    company: "CÔNG TY CP CÔNG NGHỆ PREP",
    location: "Hà Nội",
    type: "Full-time",
    salary: "Thỏa thuận",
    isHot: true,
  },
  {
    id: 2,
    title: "Senior Lab Technician - Hardline",
    company: "HELMSMAN SERVICES",
    location: "Hồ Chí Minh",
    type: "Full-time",
    salary: "15-25 triệu",
    isHot: true,
  },
  {
    id: 3,
    title: "Kỹ Sư Giám Sát Xây dựng/M&E",
    company: "Công Ty Cổ Phần NICON",
    location: "Hà Nội",
    type: "Full-time",
    salary: "12-20 triệu",
    isHot: true,
  },
  {
    id: 4,
    title: "Kỹ sư Quang điện tử",
    company: "CÔNG TY TNHH TECHNOLOGY",
    location: "Hà Nội",
    type: "Full-time",
    salary: "15-25 triệu",
    isHot: true,
  },
  {
    id: 5,
    title: "Chuyên Viên Tư Vấn Du Học",
    company: "CÔNG TY EDUCATION CENTER",
    location: "Đà Nẵng",
    type: "Full-time",
    salary: "10-15 triệu",
    isHot: false,
  },
  {
    id: 6,
    title: "Chemical Engineer",
    company: "GLOBAL CHEMICAL CO.",
    location: "Hồ Chí Minh",
    type: "Full-time",
    salary: "20-30 triệu",
    isHot: false,
  },
];

const JobsSection = () => {
  return (
    <section className="utt-section bg-utt-gray">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="utt-badge mb-4">CƠ HỘI VIỆC LÀM</span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Việc làm <span className="text-primary">mới nhất</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Hàng trăm cơ hội việc làm hấp dẫn đang chờ bạn
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <Link 
              key={job.id} 
              to={`/viec-lam/${job.id}`}
              className="utt-card p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                {/* Company Logo Placeholder */}
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-muted-foreground" />
                </div>
                
                {job.isHot && (
                  <span className="utt-badge-hot">
                    <Flame className="w-3 h-3" />
                    Hot
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {job.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 shrink-0" />
                <span className="line-clamp-1">{job.company}</span>
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="utt-tag utt-tag-location">
                  <MapPin className="w-3 h-3" />
                  {job.location}
                </span>
                <span className="utt-tag utt-tag-type">
                  <Clock className="w-3 h-3" />
                  {job.type}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-primary font-semibold">{job.salary}</span>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors flex items-center gap-1">
                  Xem chi tiết <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <Link to="/viec-lam">
            <Button className="utt-btn-primary">
              Xem tất cả việc làm
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
