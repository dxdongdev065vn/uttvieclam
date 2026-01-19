import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Search, MapPin, Building2, Flame } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const jobs = [
  { id: 1, title: "Nhân Viên Tư Vấn Tuyển Sinh / Educational Consultant", company: "CÔNG TY CỔ PHẦN CÔNG NGHỆ PREP", location: "Hà Nội", salary: "Thỏa thuận", time: "Hôm nay", isHot: true },
  { id: 2, title: "Senior lab technician - Hardline lab/Toy", company: "CÔNG TY TNHH DỊCH VỤ VÀ CÔNG NGHỆ HELMSMAN", location: "Hồ Chí Minh", salary: "15 - 25 triệu", time: "1 ngày trước", isHot: true },
  { id: 3, title: "Hành Chính Lễ Tân - Receptionist (Ưu Tiên Ca Tối)", company: "Stay Studio Apartment - Hoàng Long Sơn 2 Hotel", location: "Hà Nội", salary: "8 - 12 triệu", time: "1 ngày trước", isHot: false },
];

const industries = ["Kỹ thuật", "Xây dựng", "Công nghệ thông tin", "Giáo dục / Đào tạo", "Hành chính"];
const locations = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng"];

const Jobs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Search Bar */}
        <div className="bg-primary py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              <Input placeholder="Từ khóa (vị trí, công ty...)" className="bg-background flex-1" />
              <Select><SelectTrigger className="bg-background w-full md:w-48"><SelectValue placeholder="Chọn ngành nghề" /></SelectTrigger><SelectContent>{industries.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent></Select>
              <Select><SelectTrigger className="bg-background w-full md:w-48"><SelectValue placeholder="Chọn nơi làm việc" /></SelectTrigger><SelectContent>{locations.map(l => <SelectItem key={l} value={l}>{l}</SelectItem>)}</SelectContent></Select>
              <Button className="bg-secondary hover:bg-secondary/90"><Search className="w-4 h-4 mr-2" />Tìm kiếm</Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Cơ hội nghề nghiệp" }]} />
          <p className="text-muted-foreground mb-6">Tìm thấy <span className="text-primary font-semibold">8</span> việc làm</p>
          
          <div className="space-y-4">
            {jobs.map(job => (
              <div key={job.id} className="utt-card p-6 flex items-start gap-4">
                <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center shrink-0">
                  <Building2 className="w-10 h-10 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg flex items-center gap-2">
                        {job.isHot && <Flame className="w-4 h-4 text-primary" />}
                        {job.title}
                      </h3>
                      <p className="text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{job.location}</span>
                    <span className="text-primary font-semibold">{job.salary}</span>
                    <span className="text-muted-foreground">{job.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;
