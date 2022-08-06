/**
 * This file is used to code main functions that users can interact on UI
 */
// global var
var dssv = new DanhSachSinhVien() ; 
// function to return element by id
function getELE(id) {
    return document.getElementById(id) ; 
}
// creat a function to creat a new object SinhVien and save it in array
function addSV() {
    // now we need to get the values that users type in on form on UI
    var maSV = getELE("txtMaSV").value ;
    var tenSV = getELE("txtTenSV").value ;
    var emailSV = getELE("txtEmail").value ;
    var passwordSV = getELE("txtPass").value ;
    var ngaysinhSV = getELE("txtNgaySinh").value ;
    var khoaHocSV = getELE("khSV").value ;
    var diemToan = getELE("txtDiemToan").value ;
    var diemLy = getELE("txtDiemLy").value ;
    var diemHoa = getELE("txtDiemHoa").value;
    // now we creat a new object SinhVien then push in listSV 
    var svObject = new SinhVien(maSV , tenSV , emailSV , passwordSV , ngaysinhSV , khoaHocSV , Number(diemToan) , Number(diemLy)  , Number(diemHoa) ) ; 
    // console.log(svObject) ; 
    // now we push it in array listSV
    dssv.addSV(svObject) ; 
    // console.log(dssv.listSV) ; 
    // after we push it in array , we need to show it on UI so users can see it
    showUI(dssv.listSV) ; 
    // when we reload the page , all datas will disapear
    // in this pratice , we dont know API yet , so we will store it in local storage
    setLocalStorage(dssv.listSV) ; 




}
getELE("btnAddSV").addEventListener("click" , addSV ) ; 
// function to show on UI
function showUI(arr) {
    var content = "" ; 
    arr.map(function(objectSV){
        content += ` 
            <tr>
                <td>${objectSV.maSV}</td>
                <td>${objectSV.tenSV}</td>
                <td>${objectSV.emailSV}</td>
                <td>${objectSV.ngaysinhSV}</td>
                <td>${objectSV.khoaHocSV}</td>
                <td>${objectSV.diemTB}</td>
                <td>
                    <button class = "btn btn-primary" onclick = "seeDetail('${objectSV.maSV}')">Details</button>
                    <button class = "btn btn-danger" onclick = "deleteSinhVien('${objectSV.maSV}')">Delete</button>
                </td>

            </tr>
        `;
    })
    getELE("tbodySinhVien").innerHTML = content ; 
}
// function to save all data in local
function setLocalStorage(arr) {
    localStorage.setItem("List of students", JSON.stringify(arr)) ; 
}
// function to get data from local storage and show it on UI
function getLocalStorage() {
    // if(localStorage.getItem("List of students") != null){
    //     dssv.listSV = JSON.parse(localStorage.getItem("List of students")) ; 
    // }else{
    //     dssv.listSV = [] ;
    // }
    // we have another to wrire this if else using ternary operator
    localStorage.getItem("List of students") != null ? dssv.listSV = JSON.parse(localStorage.getItem("List of students")) : dssv.listSV = [] ;
    showUI(dssv.listSV) ; 
}
getLocalStorage() ; 
// delete any object 
function deleteSinhVien(maSV) {
    // maSV is unique
    var index = dssv.findSV(maSV) ; 
    // console.log(index) ; 
    if(index > -1){
        dssv.deleteSV(index) ; 
        showUI(dssv.listSV) ; 
        setLocalStorage(dssv.listSV) ; 
    }else {
        alert("Student not found") ; 
    }
   
}
// now after create the delete function we will creat function so we can see detail of sinhvien
function seeDetail(maSV) {
    var index = dssv.findSV(maSV) ; 
    if(index > -1){
        var svFound = dssv.listSV[index] ; 
        // console.log(svFound) ; 
    getELE("txtMaSV").value = svFound.maSV ;
    getELE("txtMaSV").disabled = true ; 
    getELE("txtTenSV").value = svFound.tenSV ;
    getELE("txtEmail").value = svFound.emailSV ;
    getELE("txtPass").value = svFound.passwordSV ;
    getELE("txtNgaySinh").value = svFound.ngaysinhSV ;
    getELE("khSV").value = svFound.khoaHocSV ;
    getELE("txtDiemToan").value = svFound.diemToan ;
    getELE("txtDiemLy").value = svFound.diemLy ;
    getELE("txtDiemHoa").value = svFound.diemHoa ;
    }
}
// update student
function updateSV() {
    var maSV = getELE("txtMaSV").value ;
    var tenSV = getELE("txtTenSV").value ;
    var emailSV = getELE("txtEmail").value ;
    var passwordSV = getELE("txtPass").value ;
    var ngaysinhSV = getELE("txtNgaySinh").value ;
    var khoaHocSV = getELE("khSV").value ;
    var diemToan = getELE("txtDiemToan").value ;
    var diemLy = getELE("txtDiemLy").value ;
    var diemHoa = getELE("txtDiemHoa").value;
    var objectSV=  new SinhVien(maSV , tenSV , emailSV , passwordSV , ngaysinhSV , khoaHocSV , Number(diemToan) , Number(diemLy) , Number(diemHoa)) ; 
    var index = dssv.findSV(maSV) ; 
    if(index > - 1){
        console.log(index) ; 
        console.log(objectSV) ; 
        dssv.updateSV(index , objectSV) ; 
    }else{
        alert("Student not found !") ; 
    }
    // after update then show UI and set local
    showUI(dssv.listSV) ; 
    setLocalStorage(dssv.listSV) ;
    formReset() ;  
    
}
getELE("btnUpdate").onclick = updateSV ; 
// reset form
function formReset() {
    getELE("formQLSV").reset() ;
    getELE("txtMaSV").disabled = false ; 
}