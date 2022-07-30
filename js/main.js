/**
 * main file use to interact with users
 */
// khai bao 1 instance cua Danh Sach Sinh Vien
var dssv = new DanhSachSinhVien() ; 
// function used to get id from elements
function getELE(idEle) {
    return document.getElementById(idEle) ; 
}
function addSinhVien() {
    // lay cac gia tri nguoi dung nhap vao
    var maSV = getELE("txtMaSV").value ;
    var tenSV = getELE("txtTenSV").value ;
    var emailSV = getELE("txtEmail").value ;
    var passwordSV = getELE("txtPass").value ;
    var ngaysinhSV = getELE("txtNgaySinh").value ;
    var khoahocSV = getELE("khSV").value ;
    var diemToan = getELE("txtDiemToan").value ;
    var diemLy = getELE("txtDiemLy").value ;
    var diemHoa = getELE("txtDiemHoa").value ;
    // tao new instance cho Class Sinh Vien
    var sv = new SinhVien(maSV,tenSV,emailSV,passwordSV,ngaysinhSV,khoahocSV,Number(diemToan),Number(diemLy),Number(diemHoa)) ; 
    console.log(sv) ;// kiem tra tao instance thanh cong
    

}
getELE("btnAddSV").onclick = addSinhVien ; 