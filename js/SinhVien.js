/**
 * tao Class sinh vien
 */
 function SinhVien(maSV,tenSV,emailSV,passwordSV,ngaysinhSV,khoahocSV,diemToan,diemLy,diemHoa) {
    // cac thuoc tinh cua sinh vien(property)
    this.maSV = maSV ; 
    this.tenSV = tenSV ; 
    this.emailSV = emailSV ; 
    this.passwordSV = passwordSV ; 
    this.ngaysinhSV = ngaysinhSV ; 
    this.khoahocSV = khoahocSV ; 
    this.diemToan = diemToan ; 
    this.diemLy = diemLy ; 
    this.diemHoa = diemHoa ; 
    // method tinh diem trung binh
    this.tinhDTB = function(){
        return (this.diemToan + this.diemLy + this.diemHoa)/3 ; 
    }
    this.dtbSV = this.tinhDTB().toFixed(2) ; 
}