import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TalentNetworkSidebar from "@/components/shared/TalentNetworkSidebar";

const aboutContent = `Trường Đại học Công nghệ GTVT là trường Đại học công lập, trực thuộc Bộ Giao thông vận tải. Lịch sử nhà trường phát triển qua các thời kỳ:

Ngày 27/4/2011, Thủ tướng Chính phủ ký Quyết định số 630/QĐ-TTg về việc thành lập trường Đại học Công nghệ GTVT (University Of Transport Technology) trên cơ sở nâng cấp trường Cao đẳng GTVT.

Hiện nay, trường có 3 cơ sở đào tạo:
• Cơ sở 1 tại số 54 Phố Triều Khúc - Phường Thanh Xuân Nam, Quận Thanh Xuân, TP. Hà Nội
• Cơ sở 2 tại TP. Việt Trì, Tỉnh Phú Thọ  
• Cơ sở 3 tại Phường Tân Thịnh, TP. Thái Nguyên, Tỉnh Thái Nguyên

Trường đào tạo theo hướng ứng dụng công nghệ phục vụ chiến lược phát triển ngành GTVT và đất nước. Hiện nay Nhà trường đào tạo gần 13.000 học viên, sinh viên các hệ Tiến sĩ (02 chuyên ngành); Thạc sĩ (12 chuyên ngành); Đại học (30 chuyên ngành).`;

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-utt-gray">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Giới thiệu" }]} />
          
          <div className="grid lg:grid-cols-3 gap-8 pb-16">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8">
                <h1 className="text-3xl font-bold text-primary mb-6">Giới thiệu</h1>
                <div className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{aboutContent}</p>
                  
                  <h2 className="text-xl font-bold text-primary mt-8 mb-4">SƠ LƯỢC VỀ LỊCH SỬ TRƯỜNG CAO ĐẲNG GTVT TRƯỚC NĂM 1945</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Thời kỳ thuộc Pháp từ năm 1945 về trước ở Việt Nam đã có Trường Cao đẳng Công chính từ năm 1902. 
                    06/6/1902 mở Trường Thư ký và cán sự chuyên môn công chính đặt tại Hà Nội.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <TalentNetworkSidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
