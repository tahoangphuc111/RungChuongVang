// Ngân hàng câu hỏi - sửa trực tiếp nội dung tại đây
// Mỗi câu: text (nội dung câu hỏi), options {A,B,C,D}, correct (chữ cái đáp án đúng)
const QUESTIONS = [
    {
        text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh được thành lập vào ngày, tháng, năm nào?",
        options: { A: "26/3/1931", B: "3/2/1930", C: "19/5/1941", D: "2/9/1945" },
        correct: "A"
    },
    {
        text: "Bài hát chính thức của Đoàn Thanh niên Cộng sản Hồ Chí Minh có tên là gì?",
        options: { A: "Tiến quân ca", B: "Thanh niên làm theo lời Bác", C: "Nối vòng tay lớn", D: "Lên đàng" },
        correct: "B"
    },
    {
        text: "Đội Thiếu niên Tiền phong Hồ Chí Minh được thành lập vào năm nào?",
        options: { A: "1930", B: "1941", C: "1945", D: "1954" },
        correct: "B"
    },
    {
        text: "Đà Lạt được mệnh danh là thành phố gì?",
        options: { A: "Thành phố hoa", B: "Thành phố biển", C: "Thành phố cảng", D: "Thành phố sông nước" },
        correct: "A"
    },
    {
        text: "Chiến dịch Điện Biên Phủ kết thúc thắng lợi vào ngày tháng năm nào?",
        options: { A: "30/4/1975", B: "7/5/1954", C: "2/9/1945", D: "10/10/1954" },
        correct: "B"
    },
    {
        text: "Ai là người sáng lập Đảng Cộng sản Việt Nam?",
        options: { A: "Chủ tịch Hồ Chí Minh", B: "Đại tướng Võ Nguyên Giáp", C: "Tổng Bí thư Trường Chinh", D: "Chủ tịch Tôn Đức Thắng" },
        correct: "A"
    },
    {
        text: "Ngày Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là ngày nào?",
        options: { A: "30/4", B: "19/8", C: "2/9", D: "7/5" },
        correct: "C"
    },
    {
        text: "Phong trào \"Ba sẵn sàng\" ra đời gắn liền với giai đoạn lịch sử nào?",
        options: { A: "Kháng chiến chống Pháp", B: "Kháng chiến chống Mỹ", C: "Xây dựng CNXH sau 1975", D: "Đổi mới 1986" },
        correct: "B"
    },
    {
        text: "Huy hiệu Đoàn Thanh niên Cộng sản Hồ Chí Minh có hình gì ở chính giữa?",
        options: { A: "Ngôi sao vàng", B: "Bó lúa", C: "Cờ đỏ sao vàng", D: "Búa liềm" },
        correct: "A"
    },
    {
        text: "\"Đâu cần thanh niên có, đâu khó có thanh niên\" là khẩu hiệu gắn với phong trào nào?",
        options: { A: "Thanh niên xung phong", B: "Mùa hè xanh", C: "Tiếp sức mùa thi", D: "Kế hoạch nhỏ" },
        correct: "A"
    },
    {
        text: "Đà Lạt thuộc tỉnh nào của Việt Nam?",
        options: { A: "Lâm Đồng", B: "Đắk Lắk", C: "Khánh Hòa", D: "Bình Thuận" },
        correct: "A"
    },
    {
        text: "Bác Hồ ra đi tìm đường cứu nước vào năm nào, tại bến cảng nào?",
        options: { A: "1911, Bến Nhà Rồng", B: "1920, Bến Bạch Đằng", C: "1930, Bến Ninh Kiều", D: "1941, Bến Thủy" },
        correct: "A"
    },
    {
        text: "Chiến dịch Hồ Chí Minh lịch sử giải phóng miền Nam diễn ra vào năm nào?",
        options: { A: "1968", B: "1972", C: "1975", D: "1979" },
        correct: "C"
    },
    {
        text: "Phong trào \"Mùa hè xanh\" chủ yếu dành cho đối tượng nào?",
        options: { A: "Học sinh tiểu học", B: "Sinh viên, thanh niên tình nguyện", C: "Cán bộ hưu trí", D: "Công nhân nhà máy" },
        correct: "B"
    },
    {
        text: "Ngày thành lập Hội Liên hiệp Thanh niên Việt Nam là ngày nào?",
        options: { A: "15/10/1956", B: "26/3/1931", C: "9/1/1950", D: "6/1/1946" },
        correct: "A"
    },
    {
        text: "Theo Luật Nghĩa vụ quân sự 2015, độ tuổi gọi nhập ngũ trong thời bình đối với công dân đào tạo trình độ cao đẳng, đại học đã được tạm hoãn là đến hết bao nhiêu tuổi?",
        options: { A: "25 tuổi", B: "27 tuổi", C: "28 tuổi", D: "30 tuổi" },
        correct: "B"
    },
    {
        text: "Theo Luật Giao thông đường bộ, khái niệm \"Phương tiện giao thông cơ giới đường bộ\" gồm những loại nào?",
        options: { A: "Ô tô, máy kéo, xe mô tô hai bánh, ba bánh, xe gắn máy", B: "Xe đạp, xe xích lô, xe lăn", C: "Xe máy nông nghiệp, lâm nghiệp", D: "Tất cả các loại xe di chuyển trên đường" },
        correct: "A"
    },
    {
        text: "Luật Trẻ em quy định trẻ em là người dưới bao nhiêu tuổi?",
        options: { A: "Dưới 15 tuổi", B: "Dưới 16 tuổi", C: "Dưới 18 tuổi", D: "Từ 16 đến dưới 18 tuổi" },
        correct: "B"
    },
    {
        text: "Theo Luật Phòng, chống ma túy, hành vi nào sau đây bị nghiêm cấm?",
        options: { A: "Trồng cây có chứa chất ma túy", B: "Giao nhận, vận chuyển chất ma túy trái phép", C: "Sử dụng trái phép chất ma túy", D: "Tất cả các hành vi trên" },
        correct: "D"
    },
    {
        text: "Luật Thanh niên (sửa đổi) được Quốc hội thông qua vào năm nào?",
        options: { A: "2015", B: "2018", C: "2020", D: "2022" },
        correct: "C"
    },
    {
        text: "Mục tiêu cơ bản của Luật Bình đẳng giới là gì?",
        options: { A: "Ưu tiên nữ giới trong mọi lĩnh vực", B: "Xóa bỏ phân biệt đối xử về giới", C: "Nâng cao quyền lực của nam giới", D: "Hạn chế quyền lợi của phụ nữ" },
        correct: "B"
    }
];