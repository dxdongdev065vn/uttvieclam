import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface TalentNetworkSidebarProps {
  className?: string;
}

const TalentNetworkSidebar = ({ className }: TalentNetworkSidebarProps) => {
  return (
    <div className={`bg-card rounded-xl border border-border p-6 ${className}`}>
      <h3 className="text-lg font-bold text-primary mb-3">Join Our Talent Network</h3>
      
      <p className="text-sm font-medium text-foreground mb-2">Talent Network là gì?</p>
      <p className="text-sm text-muted-foreground mb-4">
        Gia nhập Talent Network của chúng tôi sẽ giúp bạn nâng cao khả năng tìm kiếm việc làm. 
        Cho dù bạn ứng tuyển một công việc nào đó hoặc đơn giản là cập nhật thông tin của mình, 
        chúng tôi cũng luôn mong muốn được kết nối cùng bạn.
      </p>

      <p className="text-sm font-medium text-foreground mb-2">Vì sao bạn nên gia nhập?</p>
      <ul className="text-sm text-muted-foreground space-y-2 mb-6">
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Nhận thông báo việc làm mới phù hợp với sự quan tâm của bạn
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Cập nhật các thông tin mới nhất về công ty
        </li>
        <li className="flex items-start gap-2">
          <span className="text-primary">•</span>
          Chia sẻ cơ hội việc làm với gia đình, bạn bè thông qua mạng xã hội hoặc email
        </li>
      </ul>

      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Gia nhập ngay!
      </Button>
    </div>
  );
};

export default TalentNetworkSidebar;
