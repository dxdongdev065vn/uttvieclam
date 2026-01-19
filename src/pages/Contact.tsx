import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TalentNetworkSidebar from "@/components/shared/TalentNetworkSidebar";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-utt-gray">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Trang chủ", path: "/" }, { label: "Liên hệ" }]} />
          
          <div className="grid lg:grid-cols-3 gap-8 pb-16">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8">
                <h1 className="text-2xl font-bold text-primary mb-6">Thông tin liên hệ</h1>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Địa chỉ</p>
                      <p className="text-muted-foreground">Số 54 Triều Khúc, Thanh Xuân, Hà Nội</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Điện thoại</p>
                      <p className="text-muted-foreground">(024) 3858 8050</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">tienpv@utt.edu.vn</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden h-80 bg-muted">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2955435963347!2d105.79937631476292!3d20.98076798601444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc6aaaaaa47%3A0x7e3a4d2a3a0bb0c1!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgR2lhbyB0aMO0bmcgVuG6rW4gdOG6o2k!5e0!3m2!1svi!2s!4v1642069845123!5m2!1svi!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
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

export default Contact;
