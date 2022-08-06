/**
 * This file is used to create Class SinhVien to create new instances SinhVien(object) to save in local and array DSSV
 */
// Now we create a new Class SinhVien
// we use ES5 syntax to creat a class
function SinhVien(maSV , tenSV , emailSV , passwordSV , ngaysinhSV , khoaHocSV , diemToan , diemLy , diemHoa) {
    // SinhVien object has 9 properties
    this.maSV = maSV ;  
    this.tenSV = tenSV ; 
    this.emailSV = emailSV ; 
    this.passwordSV = passwordSV ; 
    this.ngaysinhSV = ngaysinhSV ; 
    this.khoaHocSV = khoaHocSV ; 
    this.diemToan = diemToan ; 
    this.diemLy = diemLy ; 
    this.diemHoa = diemHoa ; 
    // we need to calculate the average score of object SinhVien
    // we create a new method to calculate it
    this.tinhDTB = function(){
        return (this.diemToan + this.diemLy + this.diemHoa) / 3 ;
    }
    // then we create a new property to save the result that tinhDTB() method return 
    this.diemTB = this.tinhDTB().toFixed(2) ; 

}