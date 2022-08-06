// creat Class SinhVien
function SinhVien(maSV , tenSV , loaiSV , diemToan , diemVan) {
    // 5 properties
    this.maSV = maSV ; 
    this.tenSV = tenSV ; 
    this.loaiSV = loaiSV ; 
    this.diemToan = diemToan ; 
    this.diemVan = diemVan ; 
    // method for diemTB and xepLoai
    this.tinhDTB = function(){
        return (this.diemToan + this.diemVan) / 2 ;
    }
    this.diemTB  = this.tinhDTB().toFixed(2) ; 
    this.xepLoaiSV = function(){
        if(this.diemTB >=9 ) return "Gioi" ; 
        else if(this.diemTB >=7 && this.diemTB <9) return "Kha" ; 
        else return "Trung Binh" ; 
    }
    this.xepLoai = this.xepLoaiSV() ; 
}
// getELE
function getELE(id){
    return document.getElementById(id) ; 
}
// after create Class SinhVien , now create a function to add SV and show UI
function addSinhVien() {
    var maSV = getELE("txtMaSV").value ;
    var tenSV = getELE("txtTenSV").value ;
    var loaiSV = getELE("loaiSV").value ;
    var diemToan = getELE("txtDiemToan").value ;
    var diemVan = getELE("txtDiemVan").value;
    // create a new instance for Class SinhVien
    var sv = new SinhVien(maSV , tenSV , loaiSV , Number(diemToan) , Number(diemVan)) ; 
    console.log(sv) ; 
    showUI(sv.tenSV , sv.maSV , sv.loaiSV, sv.diemTB , sv.xepLoai) ; 


}
getELE("btnHienThiTT").onclick = addSinhVien ; 
function showUI(tenSV , maSV , loaiSV , diemTB , xepLoai) {
    getELE("spanTenSV").innerHTML = tenSV ; 
    getELE("spanMaSV").innerHTML = maSV ;
    getELE("spanLoaiSV").innerHTML = loaiSV ;
    getELE("spanDTB").innerHTML = diemTB ;
    getELE("spanXepLoai").innerHTML = xepLoai ;
}