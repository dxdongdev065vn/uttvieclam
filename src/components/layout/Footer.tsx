import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* School Info - Column 1 */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-3 text-primary">
              Trường ĐH Công nghệ GTVT
            </h3>
            <p className="text-xs text-secondary-foreground/60 mb-4">
              University of Transport Technology
            </p>

            {/* Campus 1 */}
            <div className="mb-3">
              <p className="text-primary font-medium text-xs mb-1.5">Cơ sở 1 - Hà Nội:</p>
              <div className="space-y-1 text-xs text-secondary-foreground/80">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                  <span>Số 54 Triều Khúc, Thanh Xuân, HN</span>
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-primary shrink-0" />
                  (024) 3858 8050
                </p>
                <p className="flex items-center gap-1.5">
                  <Mail className="w-3 h-3 text-primary shrink-0" />
                  tienpv@utt.edu.vn
                </p>
              </div>
            </div>

            {/* Campus 2 */}
            <div className="mb-3">
              <p className="text-primary font-medium text-xs mb-1.5">Cơ sở 2 - Phú Thọ:</p>
              <div className="space-y-1 text-xs text-secondary-foreground/80">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                  TP. Việt Trì, Phú Thọ
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-primary shrink-0" />
                  (0211) 3862 505
                </p>
              </div>
            </div>

            {/* Campus 3 */}
            <div>
              <p className="text-primary font-medium text-xs mb-1.5">Cơ sở 3 - Thái Nguyên:</p>
              <div className="space-y-1 text-xs text-secondary-foreground/80">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                  TP. Thái Nguyên, Thái Nguyên
                </p>
                <p className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-primary shrink-0" />
                  (0208) 3753 357
                </p>
              </div>
            </div>
          </div>

          {/* Center for Business Cooperation - Column 2 */}
          <div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20 h-full">
              <div className="flex items-start gap-2 mb-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xs font-bold leading-tight">
                  Trung tâm hợp tác Doanh nghiệp & Khởi nghiệp sáng tạo
                </h3>
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex items-start gap-1.5 text-secondary-foreground/80">
                  <MapPin className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                  <div className="leading-relaxed">
                    <p>Tầng 4, Tòa nhà Thư viện UTT</p>
                    <p>Trường ĐH CN GTVT</p>
                    <p>Số 54 Triều Khúc, Thanh Xuân, HN</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3 h-3 text-primary shrink-0" />
                  <span className="font-semibold text-primary text-sm">024.3552 8976</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Column 3 */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-3 text-primary">Liên kết nhanh</h3>
            <ul className="space-y-2 text-xs text-secondary-foreground/80">
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

          {/* Talent Network - Column 4 */}
          <div>
            <h3 className="text-sm font-bold uppercase mb-3 text-primary">Kết nối với chúng tôi</h3>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 mb-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Talent Network Box */}
            <div className="bg-secondary-foreground/5 rounded-xl p-3">
              <h4 className="font-semibold text-xs mb-1.5">Join Our Talent Network</h4>
              <p className="text-[10px] text-secondary-foreground/70 mb-3 leading-relaxed">
                Nhận thông báo việc làm mới phù hợp với sự quan tâm của bạn
              </p>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8">
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
