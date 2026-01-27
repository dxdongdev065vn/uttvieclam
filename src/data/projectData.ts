// Dữ liệu tập trung của dự án - có thể dễ dàng thay thế bằng API sau này
import company1 from "@/assets/company-1.jpg";
import company2 from "@/assets/company-2.jpg";
import candidate1 from "@/assets/candidate-1.jpg";
import candidate2 from "@/assets/candidate-2.jpg";
import candidate3 from "@/assets/candidate-3.jpg";

// ============= TYPES =============
export interface Company {
  id: number;
  name: string;
  address: string;
  website: string;
  logo?: string;
  position: string;
  salary: string;
  benefits: string[];
  description: string;
  city: string;
}

export interface Candidate {
  id: number;
  name: string;
  birthYear: number;
  major: string;
  graduationType: string;
  avatar: string;
  desires: {
    position: string;
    location: string;
    salary: string;
    workType: string;
  };
}

export interface Job {
  id: number;
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  time: string;
  isHot: boolean;
  isNew: boolean;
  isUrgent: boolean;
  experience: string;
  type: string;
  benefits: string[];
}

// ============= COMPANIES DATA =============
export const companies: Company[] = [
  {
    id: 1,
    name: "Công ty Cổ phần Xây dựng Hạ tầng ABC",
    address: "Cầu Giấy, Hà Nội",
    website: "www.abcconstruction.com.vn",
    position: "Kỹ sư Cầu đường / IT / Logistics",
    salary: "15.000.000 - 20.000.000 VNĐ",
    benefits: ["Bảo hiểm đầy đủ", "Du lịch hàng năm", "Thưởng Tết"],
    description: "Yêu cầu kinh nghiệm 1 năm trong lĩnh vực xây dựng cầu đường.",
    logo: company1,
    city: "Hà Nội"
  },
  {
    id: 2,
    name: "Tập đoàn Logistics Việt Nam",
    address: "Long Biên, Hà Nội",
    website: "www.vnlogistics.com",
    position: "Chuyên viên Vận tải / Điều phối",
    salary: "12.000.000 - 18.000.000 VNĐ",
    benefits: ["Bảo hiểm", "Xe đưa đón", "Thưởng KPI"],
    description: "Tìm kiếm ứng viên năng động, có khả năng làm việc dưới áp lực cao.",
    logo: company2,
    city: "Hà Nội"
  },
  {
    id: 3,
    name: "Công ty CP Công nghệ VinFast",
    address: "Gia Lâm, Hà Nội",
    website: "www.vinfast.vn",
    position: "Kỹ sư Ô tô / Cơ khí",
    salary: "18.000.000 - 30.000.000 VNĐ",
    benefits: ["Lương tháng 13", "Bảo hiểm cao cấp", "Nhà ở"],
    description: "Tuyển kỹ sư ô tô có kiến thức về hệ thống điện và cơ khí.",
    logo: company1,
    city: "Hà Nội"
  },
  {
    id: 4,
    name: "Công ty TNHH Giao thông Đô thị HN",
    address: "Hoàng Mai, Hà Nội",
    website: "www.hntransit.vn",
    position: "Chuyên viên kỹ thuật",
    salary: "10.000.000 - 15.000.000 VNĐ",
    benefits: ["Bảo hiểm", "Đào tạo", "Thưởng cuối năm"],
    description: "Tuyển chuyên viên kỹ thuật có kinh nghiệm trong lĩnh vực giao thông.",
    logo: company2,
    city: "Hà Nội"
  },
  {
    id: 5,
    name: "Công ty CP Đầu tư Hạ tầng Giao thông",
    address: "Thanh Xuân, Hà Nội",
    website: "www.infrainvest.vn",
    position: "Kỹ sư Xây dựng",
    salary: "15.000.000 - 22.000.000 VNĐ",
    benefits: ["Bảo hiểm cao cấp", "Du lịch", "Thưởng dự án"],
    description: "Cần kỹ sư có kinh nghiệm quản lý dự án hạ tầng.",
    logo: company1,
    city: "Hà Nội"
  },
  {
    id: 6,
    name: "Công ty TNHH Vận tải Đường sắt",
    address: "Ba Đình, Hà Nội",
    website: "www.vnrailway.vn",
    position: "Nhân viên điều độ",
    salary: "8.000.000 - 12.000.000 VNĐ",
    benefits: ["Bảo hiểm", "Xe đưa đón", "Ổn định"],
    description: "Tuyển nhân viên điều độ, làm việc theo ca.",
    logo: company2,
    city: "Hà Nội"
  },
  {
    id: 7,
    name: "Công ty TNHH Sản xuất XYZ",
    address: "KCN Thụy Vân, Phú Thọ",
    website: "www.xyzmanufacturing.com",
    position: "Kỹ sư Cơ khí / Điện tử",
    salary: "18.000.000 - 25.000.000 VNĐ",
    benefits: ["Nhà ở miễn phí", "Bảo hiểm", "Thưởng năng suất"],
    description: "Cần tuyển kỹ sư có kinh nghiệm vận hành máy CNC.",
    logo: company2,
    city: "Phú Thọ"
  },
  {
    id: 8,
    name: "Công ty CP Hóa chất Việt Trì",
    address: "TP. Việt Trì, Phú Thọ",
    website: "www.vicaco.vn",
    position: "Kỹ sư Hóa học / Môi trường",
    salary: "12.000.000 - 18.000.000 VNĐ",
    benefits: ["Phụ cấp độc hại", "Bảo hiểm", "Xe đưa đón"],
    description: "Tuyển kỹ sư hóa học, môi trường làm việc tại nhà máy.",
    logo: company1,
    city: "Phú Thọ"
  },
  {
    id: 9,
    name: "Công ty CP Giấy Bãi Bằng",
    address: "Huyện Phù Ninh, Phú Thọ",
    website: "www.baibanpaper.vn",
    position: "Kỹ sư Sản xuất",
    salary: "14.000.000 - 20.000.000 VNĐ",
    benefits: ["Nhà ở", "Bảo hiểm", "Thưởng KPI"],
    description: "Tuyển kỹ sư sản xuất, quản lý dây chuyền.",
    logo: company2,
    city: "Phú Thọ"
  },
  {
    id: 10,
    name: "Công ty CP Khai thác Khoáng sản TN",
    address: "TP. Thái Nguyên",
    website: "www.tnmining.com.vn",
    position: "Kỹ sư Mỏ / Địa chất",
    salary: "20.000.000 - 30.000.000 VNĐ",
    benefits: ["Phụ cấp độc hại", "Bảo hiểm cao cấp", "Thưởng dự án"],
    description: "Tuyển kỹ sư địa chất, mỏ có kinh nghiệm làm việc tại mỏ lộ thiên.",
    logo: company1,
    city: "Thái Nguyên"
  },
  {
    id: 11,
    name: "Công ty TNHH Samsung Electronics TN",
    address: "KCN Yên Bình, Thái Nguyên",
    website: "www.samsung.com/vn",
    position: "Kỹ sư Điện tử / QC",
    salary: "12.000.000 - 20.000.000 VNĐ",
    benefits: ["Shuttle bus", "Canteen", "Ký túc xá"],
    description: "Tuyển kỹ sư điện tử, kiểm soát chất lượng sản phẩm.",
    logo: company2,
    city: "Thái Nguyên"
  },
  {
    id: 12,
    name: "Công ty TNHH Gang thép Thái Nguyên",
    address: "TP. Thái Nguyên",
    website: "www.tisco.com.vn",
    position: "Kỹ sư Luyện kim",
    salary: "15.000.000 - 22.000.000 VNĐ",
    benefits: ["Phụ cấp độc hại", "Bảo hiểm", "Nhà ở"],
    description: "Tuyển kỹ sư luyện kim có kinh nghiệm.",
    logo: company1,
    city: "Thái Nguyên"
  },
  // Thêm các công ty khác để đạt 200+
  ...Array.from({ length: 188 }, (_, i) => ({
    id: 13 + i,
    name: `Công ty đối tác ${13 + i}`,
    address: `Địa chỉ ${13 + i}`,
    website: `www.company${13 + i}.vn`,
    position: "Các vị trí khác nhau",
    salary: "Thỏa thuận",
    benefits: ["Bảo hiểm", "Thưởng"],
    description: "Công ty đối tác trong mạng lưới.",
    logo: i % 2 === 0 ? company1 : company2,
    city: ["Hà Nội", "Phú Thọ", "Thái Nguyên", "Hồ Chí Minh", "Hải Phòng"][i % 5]
  }))
];

// ============= CANDIDATES DATA =============
export const candidates: Candidate[] = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    birthYear: 2004,
    major: "Công nghệ thông tin",
    graduationType: "Giỏi",
    avatar: candidate1,
    desires: {
      position: "Lập trình viên Backend",
      location: "Hà Nội",
      salary: "> 10 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 2,
    name: "Trần Thị B",
    birthYear: 2003,
    major: "Kỹ thuật Cầu đường",
    graduationType: "Xuất sắc",
    avatar: candidate2,
    desires: {
      position: "Kỹ sư thiết kế cầu",
      location: "Phú Thọ",
      salary: "12-15 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    birthYear: 2003,
    major: "Kỹ thuật Ô tô",
    graduationType: "Giỏi",
    avatar: candidate3,
    desires: {
      position: "Kỹ sư chẩn đoán ô tô",
      location: "Hà Nội",
      salary: "10-12 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 4,
    name: "Phạm Minh D",
    birthYear: 2004,
    major: "Logistics và Quản lý chuỗi cung ứng",
    graduationType: "Khá",
    avatar: candidate1,
    desires: {
      position: "Chuyên viên Logistics",
      location: "Hà Nội",
      salary: "8-10 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 5,
    name: "Vũ Thị E",
    birthYear: 2003,
    major: "Kinh tế vận tải",
    graduationType: "Xuất sắc",
    avatar: candidate2,
    desires: {
      position: "Chuyên viên kế hoạch vận tải",
      location: "Phú Thọ",
      salary: "10-15 triệu",
      workType: "Full-time"
    }
  },
  {
    id: 6,
    name: "Đỗ Quang F",
    birthYear: 2004,
    major: "Kỹ thuật Điện - Điện tử",
    graduationType: "Giỏi",
    avatar: candidate3,
    desires: {
      position: "Kỹ sư điện tử",
      location: "Hà Nội",
      salary: "12-18 triệu",
      workType: "Full-time"
    }
  },
  // Thêm sinh viên để đạt 10,000+
  ...Array.from({ length: 9994 }, (_, i) => ({
    id: 7 + i,
    name: `Sinh viên ${7 + i}`,
    birthYear: 2000 + (i % 5),
    major: ["Công nghệ thông tin", "Kỹ thuật Cầu đường", "Kỹ thuật Ô tô", "Logistics", "Kinh tế vận tải", "Điện - Điện tử"][i % 6],
    graduationType: ["Xuất sắc", "Giỏi", "Khá"][i % 3],
    avatar: [candidate1, candidate2, candidate3][i % 3],
    desires: {
      position: "Các vị trí khác nhau",
      location: ["Hà Nội", "Phú Thọ", "Thái Nguyên", "Hồ Chí Minh"][i % 4],
      salary: "Thỏa thuận",
      workType: "Full-time"
    }
  }))
];

// ============= JOBS DATA =============
export const jobs: Job[] = [
  { 
    id: 1, 
    title: "Kỹ Sư Cầu Đường - Civil Engineer", 
    company: "CÔNG TY CỔ PHẦN XÂY DỰNG HẠ TẦNG ABC", 
    logo: company1,
    location: "Hà Nội", 
    salary: "15 - 25 triệu", 
    time: "Hôm nay", 
    isHot: true,
    isNew: true,
    isUrgent: false,
    experience: "1-3 năm",
    type: "Full-time",
    benefits: ["Bảo hiểm", "Du lịch", "Thưởng KPI"]
  },
  { 
    id: 2, 
    title: "Lập Trình Viên Backend NodeJS", 
    company: "CÔNG TY TNHH CÔNG NGHỆ VẬN TẢI THÔNG MINH", 
    logo: company2,
    location: "Hồ Chí Minh", 
    salary: "20 - 35 triệu", 
    time: "1 ngày trước", 
    isHot: true,
    isNew: false,
    isUrgent: true,
    experience: "2-5 năm",
    type: "Full-time",
    benefits: ["Remote", "Laptop", "13 tháng lương"]
  },
  { 
    id: 3, 
    title: "Chuyên Viên Logistics & Chuỗi Cung Ứng", 
    company: "TẬP ĐOÀN LOGISTICS VIỆT NAM", 
    logo: company1,
    location: "Hà Nội", 
    salary: "12 - 18 triệu", 
    time: "2 ngày trước", 
    isHot: false,
    isNew: true,
    isUrgent: false,
    experience: "Không yêu cầu",
    type: "Full-time",
    benefits: ["Xe đưa đón", "Bảo hiểm", "Đào tạo"]
  },
  { 
    id: 4, 
    title: "Kỹ Sư Ô Tô - Automotive Engineer", 
    company: "CÔNG TY CP SẢN XUẤT Ô TÔ VINFAST", 
    logo: company2,
    location: "Hải Phòng", 
    salary: "18 - 30 triệu", 
    time: "3 ngày trước", 
    isHot: true,
    isNew: false,
    isUrgent: false,
    experience: "1-3 năm",
    type: "Full-time",
    benefits: ["Nhà ở", "Bảo hiểm cao cấp", "Cổ phiếu"]
  },
  { 
    id: 5, 
    title: "Kỹ Sư Điện - Điện Tử", 
    company: "CÔNG TY TNHH SAMSUNG ELECTRONICS VIỆT NAM", 
    logo: company1,
    location: "Thái Nguyên", 
    salary: "15 - 22 triệu", 
    time: "4 ngày trước", 
    isHot: false,
    isNew: false,
    isUrgent: true,
    experience: "Không yêu cầu",
    type: "Full-time",
    benefits: ["Thưởng sản xuất", "Canteen", "Shuttle bus"]
  },
  { 
    id: 6, 
    title: "Nhân Viên Kinh Doanh Vận Tải", 
    company: "CÔNG TY VẬN TẢI ĐƯỜNG SẮT VIỆT NAM", 
    logo: company2,
    location: "Hà Nội", 
    salary: "10 - 15 triệu + Hoa hồng", 
    time: "5 ngày trước", 
    isHot: false,
    isNew: false,
    isUrgent: false,
    experience: "Không yêu cầu",
    type: "Full-time",
    benefits: ["Lương cứng", "Hoa hồng cao", "Đào tạo"]
  },
  // Thêm các việc làm khác để đạt 500+
  ...Array.from({ length: 494 }, (_, i) => ({
    id: 7 + i,
    title: `Vị trí tuyển dụng ${7 + i}`,
    company: `Công ty ${7 + i}`,
    logo: i % 2 === 0 ? company1 : company2,
    location: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Thái Nguyên", "Phú Thọ"][i % 6],
    salary: "Thỏa thuận",
    time: `${(i % 30) + 1} ngày trước`,
    isHot: i % 10 === 0,
    isNew: i % 7 === 0,
    isUrgent: i % 15 === 0,
    experience: ["Không yêu cầu", "1-3 năm", "3-5 năm"][i % 3],
    type: "Full-time",
    benefits: ["Bảo hiểm", "Thưởng"]
  }))
];

// ============= STATS CALCULATIONS =============
export const getProjectStats = () => {
  const totalCompanies = companies.length;
  const totalCandidates = candidates.length;
  const totalJobs = jobs.length;
  
  // Tính tỷ lệ hài lòng dựa trên số sinh viên có việc làm (giả định 95%)
  const satisfactionRate = 95;
  
  return {
    companies: {
      value: totalCompanies,
      displayValue: `${totalCompanies}+`,
      trend: "+15%"
    },
    candidates: {
      value: totalCandidates,
      displayValue: totalCandidates >= 10000 ? `${Math.floor(totalCandidates / 1000).toLocaleString()}k+` : `${totalCandidates.toLocaleString()}+`,
      trend: "+23%"
    },
    jobs: {
      value: totalJobs,
      displayValue: `${totalJobs}+`,
      trend: "+18%"
    },
    satisfaction: {
      value: satisfactionRate,
      displayValue: `${satisfactionRate}%`,
      trend: "+5%"
    }
  };
};

// Dữ liệu đã format sẵn cho các component
export const projectStats = getProjectStats();
