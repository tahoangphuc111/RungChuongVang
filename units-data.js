// Rung Chuông Vàng — Danh sách Đơn vị / Chi đoàn (22 cụm — Tổ dân phố)
// Sửa/thêm/xóa trực tiếp tại đây nếu cần cập nhật danh sách.
const UNITS_DATA = [
    { cluster: 1, items: ["Tổ dân phố Đồi Dinh", "Tổ dân phố Nguyễn Văn Trỗi", "Tổ dân phố Phan Bội Châu", "Tổ dân phố Đoàn Kết", "Tổ dân phố Hòa Bình", "Tổ dân phố Nam Kỳ Khởi Nghĩa", "Tổ dân phố Ánh Sáng"] },
    { cluster: 2, items: ["Tổ dân phố Đa Hòa", "Tổ dân phố Mimosa", "Tổ dân phố Hàm Nghi", "Tổ dân phố Trưng Vương", "Tổ dân phố Tô Ngọc Vân"] },
    { cluster: 3, items: ["Tổ dân phố Bùi Thị Xuân 1", "Tổ dân phố Võ Thị Sáu", "Tổ dân phố Lý Tự Trọng"] },
    { cluster: 4, items: ["Tổ dân phố Nguyễn Thị Nghĩa", "Tổ dân phố Bùi Thị Xuân 2"] },
    { cluster: 5, items: ["Tổ dân phố Nguyễn Lương Bằng", "Tổ dân phố Nguyễn Du", "Tổ dân phố Mỹ Lộc", "Tổ dân phố Cổ Loa"] },
    { cluster: 6, items: ["Tổ dân phố An Dương Vương", "Tổ dân phố Phan Đình Phùng 1", "Tổ dân phố Phan Đình Phùng 2", "Tổ dân phố Nguyễn Công Trứ"] },
    { cluster: 7, items: ["Tổ dân phố Phạm Ngũ Lão", "Tổ dân phố Lê Đại Hành"] },
    { cluster: 8, items: ["Tổ dân phố Lê Hồng Phong", "Tổ dân phố An Lạc 1", "Tổ dân phố An Lạc 2", "Tổ dân phố Trần Phú"] },
    { cluster: 9, items: ["Tổ dân phố Xuân An", "Tổ dân phố Suối Cát"] },
    { cluster: 10, items: ["Tổ dân phố Nhà Chung", "Tổ dân phố Hà Huy Tập 1", "Tổ dân phố Hà Huy Tập 2", "Tổ dân phố Tân Bình", "Tổ dân phố Lương Thế Vinh"] },
    { cluster: 11, items: ["Tổ dân phố Ba Tháng Tư", "Tổ dân phố Đặng Thái Thân", "Tổ dân phố Nguyễn Tri Phương"] },
    { cluster: 12, items: ["Tổ dân phố An Bình 1", "Tổ dân phố An Bình 2", "Tổ dân phố Nguyễn Trung Trực 2"] },
    { cluster: 13, items: ["Tổ dân phố Tô Hiến Thành", "Tổ dân phố Tân Lạc"] },
    { cluster: 14, items: ["Tổ dân phố Prenn", "Tổ dân phố Sở Lăng"] },
    { cluster: 15, items: ["Tổ dân phố Trường Chinh", "Tổ dân phố Thiên Thành", "Tổ dân phố Mạc Đĩnh Chi 1", "Tổ dân phố Mạc Đĩnh Chi 2", "Tổ dân phố Huỳnh Thúc Kháng", "Tổ dân phố Trần Lê"] },
    { cluster: 16, items: ["Tổ dân phố Thiện Mỹ", "Tổ dân phố Đồng Thiện", "Tổ dân phố Ngô Thì Nhậm", "Tổ dân phố Nam Thiên", "Tổ dân phố Huyền Trân Công Chúa", "Tổ dân phố Ngô Thì Sỹ"] },
    { cluster: 17, items: ["Tổ dân phố Đa Lợi", "Tổ dân phố Hoàng Hoa Thám"] },
    { cluster: 18, items: ["Tổ dân phố Yên Thế", "Tổ dân phố Trần Quang Diệu", "Tổ dân phố Trần Thái Tông"] },
    { cluster: 19, items: ["Tổ dân phố Trần Hưng Đạo", "Tổ dân phố Khởi Nghĩa Bắc Sơn", "Tổ dân phố Trần Quý Cáp", "Tổ dân phố Hồng Lạc"] },
    { cluster: 20, items: ["Tổ dân phố Lê Văn Tám", "Tổ dân phố Khe Sanh"] },
    { cluster: 21, items: ["Tổ dân phố Nhất Thống", "Tổ dân phố Phạm Hồng Thái", "Tổ dân phố Yersin"] },
    { cluster: 22, items: ["Tổ dân phố Nguyễn Trung Trực 1", "Tổ dân phố An Sơn 1", "Tổ dân phố An Sơn 2"] },
];

// Làm phẳng thành danh sách { label, cluster } để tìm kiếm nhanh
const UNITS_FLAT = UNITS_DATA.flatMap(g => g.items.map(name => ({
    label: name,
    cluster: g.cluster,
    clusterLabel: 'Cụm ' + g.cluster,
})));

window.UNITS_DATA = UNITS_DATA;
window.UNITS_FLAT = UNITS_FLAT;
