/**
 * main file use to interact with users
 */
// khai bao 1 instance cua Danh Sach Sinh Vien
var dssv = new DanhSachSinhVien() ; 
// function used to get id from elements
function getELE(idEle) {
    return document.getElementById(idEle) ; 
}
// ham them sinh vien
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
    // console.log(sv) ; kiem tra tao instance thanh cong
    dssv.addSV(sv) ;
    // sau khi them dc sinh vien thi hien thi len giao dien
    showUI(dssv.listSV) ; 
    // sau do se luu vao local
    setLocalStorage(dssv.listSV) ; 
    // reset form sau khi them sv
    resetFormInput() ; 

}
// ham xoa sinh vien
function deleteSinhVien(maSV) {
    // goi method xoa sinh vien
    dssv.deleteSV(maSV) ; 
    // show len UI
    showUI(dssv.listSV) ; 
    // cap nhat local storage
    setLocalStorage(dssv.listSV) ; 
    ; 
}
getELE("btnAddSV").onclick = addSinhVien ;


// show du lieu danh sach sinh vien len UI
function showUI(arr) {
    var content = "" ; 
    arr.map(function(objectSV){
        content += `
        <tr>
            <td>${objectSV.maSV}</td>
            <td>${objectSV.tenSV}</td>
            <td>${objectSV.emailSV}</td>
            <td>${objectSV.ngaysinhSV}</td>
            <td>${objectSV.khoahocSV}</td>
            <td>${objectSV.dtbSV}</td>
            <td>
            <button onclick = "xemSinhVien('${objectSV.maSV}')" class = "btn btn-success">Xem</button>
            <button onclick = "deleteSinhVien('${objectSV.maSV}')" class = "btn btn-primary">Xóa</button>
            </td>
        </tr>
        `;
    })
    getELE("tbodySinhVien").innerHTML = content ; 
}
 
// ham luu vao local
function setLocalStorage(arr) {
    localStorage.setItem("DSSV" , JSON.stringify(arr)) ; 
}
// ham lay du lieu tu local len khi load trang
function getLocalStorage() {
    if(localStorage.getItem("DSSV") != null){
        dssv.listSV = JSON.parse(localStorage.getItem("DSSV")) ; 
    }else{
        dssv.listSV = [] ; 
    }
    showUI(dssv.listSV) ; 
}
// lay du lieu tu local va load len trang
getLocalStorage() ; 
// xem sinh vien
function xemSinhVien(maSV) {
    // tim xem sinh vien co maSV o vi tri nao
    var index = dssv.findSV(maSV) ;
    // neu tim thay sinh vien
    if(index > -1){
        var svFound = dssv.listSV[index] ; 
        // lay ra cac gia tri do va gan cho value cua the input tren form
        getELE("txtMaSV").value = svFound.maSV ;
        getELE("txtMaSV").disabled = true ; 
        getELE("txtTenSV").value = svFound.tenSV ;
        getELE("txtEmail").value = svFound.emailSV ;
        getELE("txtPass").value = svFound.passwordSV ;
        getELE("txtNgaySinh").value = svFound.ngaysinhSV ;
        getELE("khSV").value = svFound.khoahocSV ;
        getELE("txtDiemToan").value = svFound.diemToan ;
        getELE("txtDiemLy").value = svFound.diemLy ;
        getELE("txtDiemHoa").value = svFound.diemHoa ;
    }
   
}
// cap nhat sinh vien
function updateSinhVien() {
    // lay cac gia tri dang xem tren form
    var maSV = getELE("txtMaSV").value ;
    var tenSV = getELE("txtTenSV").value ;
    var emailSV = getELE("txtEmail").value ;
    var passwordSV = getELE("txtPass").value ;
    var ngaysinhSV = getELE("txtNgaySinh").value ;
    var khoahocSV = getELE("khSV").value ;
    var diemToan = getELE("txtDiemToan").value ;
    var diemLy = getELE("txtDiemLy").value ;
    var diemHoa = getELE("txtDiemHoa").value ;
    // tao 1 instance moi
    var sv = new SinhVien(maSV,tenSV,emailSV,passwordSV,ngaysinhSV,khoahocSV,Number(diemToan),Number(diemLy),Number(diemHoa)) ; 
    dssv.updateSV(sv , maSV ) ; 
    // show len UI
    showUI(dssv.listSV) ; 
    // cap nhat local storage
    setLocalStorage(dssv.listSV) ; 
}
getELE("btnUpdate").onclick = updateSinhVien ; 
// reset form
// ham reset chi dung dc vs tag form
function resetFormInput() {
    getELE("formQLSV").reset() ; 
    getELE("txtMaSV").disabled = false  ; 
}
getELE("btnReset").onclick = resetFormInput ; 