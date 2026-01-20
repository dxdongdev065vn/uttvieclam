import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold uppercase mb-4">
              Trường Đại học Công nghệ Giao thông Vận tải
            </h3>
            <p className="text-sm text-secondary-foreground/70 mb-6">
              University of Transport Technology
            </p>

            {/* Campus 1 */}
            <div className="mb-4">
              <p className="text-primary font-medium mb-2">Cơ sở 1 - Hà Nội:</p>
              <div className="space-y-1.5 text-sm text-secondary-foreground/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  Số 54 Triều Khúc, Thanh Xuân, Hà Nội
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  (024) 3858 8050
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  tienpv@utt.edu.vn
                </p>
              </div>
            </div>

            {/* Campus 2 */}
            <div className="mb-4">
              <p className="text-primary font-medium mb-2">Cơ sở 2 - Phú Thọ:</p>
              <div className="space-y-1.5 text-sm text-secondary-foreground/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  TP. Việt Trì, Phú Thọ
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  (0211) 3862 505
                </p>
              </div>
            </div>

            {/* Campus 3 */}
            <div>
              <p className="text-primary font-medium mb-2">Cơ sở 3 - Thái Nguyên:</p>
              <div className="space-y-1.5 text-sm text-secondary-foreground/80">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                  Phường Tân Thịnh, TP. Thái Nguyên, Thái Nguyên
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  (0208) 3753 357
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
              </li>
              <li>
                <Link to="/gioi-thieu" className="hover:text-primary transition-colors">Giới thiệu</Link>
              </li>
              <li>
                <Link to="/viec-lam" className="hover:text-primary transition-colors">Cơ hội nghề nghiệp</Link>
              </li>
              <li>
                <Link to="/cam-nang" className="hover:text-primary transition-colors">Cẩm nang nghề nghiệp</Link>
              </li>
              <li>
                <Link to="/lien-he" className="hover:text-primary transition-colors">Liên hệ</Link>
              </li>
              <li>
                <Link to="/tao-cv" className="hover:text-primary transition-colors">Tạo CV</Link>
              </li>
            </ul>
          </div>

          {/* Talent Network */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Kết nối với chúng tôi</h3>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Talent Network Box */}
            <div className="bg-secondary-foreground/5 rounded-xl p-4">
              <h4 className="font-semibold mb-2">Join Our Talent Network</h4>
              <p className="text-xs text-secondary-foreground/70 mb-4">
                Nhận thông báo việc làm mới phù hợp với sự quan tâm của bạn
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Gia nhập ngay
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-secondary-foreground/60">
            <p>© 2026 Trường Đại học Công nghệ Giao thông vận tải. All rights reserved.</p>
            <span className="hidden md:inline">|</span>
            <p>Powered by CareerViet</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
