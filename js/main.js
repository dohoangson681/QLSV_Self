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
    // before we create a new object SV , we need to check user input is valid or not
    var validation = new Validation() ; // we create this instance to use method that we wrote in Validation file
    var isValid = true; // we create a variabe 'isValid' and assgin it value of true
    // check maSV
    isValid &= validation.checkEmpty(maSV , "spanMaSV" , arrayTBEmpty[0]) && validation.checkMaSVExist(maSV , "spanMaSV" , arrayValid[0]) ; 
    // check tenSV
    isValid &= validation.checkEmpty(tenSV , "spanTenSV" , arrayTBEmpty[1]) && validation.checkRegex(tenSV , regexPattern[0] , "spanTenSV" , arrayValid[1]) ; 
    // check emailSV
    isValid &= validation.checkEmpty(emailSV , "spanEmailSV" , arrayTBEmpty[2]) && validation.checkRegex(emailSV ,  regexPattern[1] , "spanEmailSV" , arrayValid[2]) ; 
    // check passwordSV
    isValid &= validation.checkEmpty(passwordSV , "spanMatKhau" , arrayTBEmpty[3]) && validation.checkRegex(passwordSV ,  regexPattern[2] , "spanMatKhau" , arrayValid[3])  ; 
    // check ngaysinhSV
    isValid &= validation.checkEmpty(ngaysinhSV , "spanNgaySinh" , arrayTBEmpty[4]) ;
    // check khoahocSV
    isValid &= validation.checkKhoaHoc("khSV" , "spanKhoaHoc" , arrayTBEmpty[5]) ;
    // check diemToan
    isValid &= validation.checkEmpty(diemToan , "spanToan" , arrayTBEmpty[6] ) && validation.checkScore(diemToan , "spanToan" , arrayValid[5]) ;
    isValid &= validation.checkEmpty(diemLy , "spanLy" , arrayTBEmpty[6] ) && validation.checkScore(diemLy , "spanLy" , arrayValid[5]) ;
    isValid &= validation.checkEmpty(diemHoa , "spanHoa" , arrayTBEmpty[6] ) && validation.checkScore(diemHoa , "spanHoa" , arrayValid[5]) ;
    console.log(isValid) ; 
    
    

    if(isValid){
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
    // we need to check validation first then update data

    var validation = new Validation() ; 
    var isValid = true ; 
     
    // check tenSV
    isValid &= validation.checkEmpty(tenSV , "spanTenSV" , arrayTBEmpty[1]) && validation.checkRegex(tenSV , regexPattern[0] , "spanTenSV" , arrayValid[1]) ; 
    // check emailSV
    isValid &= validation.checkEmpty(emailSV , "spanEmailSV" , arrayTBEmpty[2]) && validation.checkRegex(emailSV ,  regexPattern[1] , "spanEmailSV" , arrayValid[2]) ; 
    // check passwordSV
    isValid &= validation.checkEmpty(passwordSV , "spanMatKhau" , arrayTBEmpty[3]) && validation.checkRegex(passwordSV ,  regexPattern[2] , "spanMatKhau" , arrayValid[3])  ; 
    // check ngaysinhSV
    isValid &= validation.checkEmpty(ngaysinhSV , "spanNgaySinh" , arrayTBEmpty[4]) ;
    // check khoahocSV
    isValid &= validation.checkKhoaHoc("khSV" , "spanKhoaHoc" , arrayTBEmpty[5]) ;
    // check diemToan
    isValid &= validation.checkEmpty(diemToan , "spanToan" , arrayTBEmpty[6] ) && validation.checkScore(diemToan , "spanToan" , arrayValid[5]) ;
    isValid &= validation.checkEmpty(diemLy , "spanLy" , arrayTBEmpty[6] ) && validation.checkScore(diemLy , "spanLy" , arrayValid[5]) ;
    isValid &= validation.checkEmpty(diemHoa , "spanHoa" , arrayTBEmpty[6] ) && validation.checkScore(diemHoa , "spanHoa" , arrayValid[5]) ;
    console.log(isValid) ;
    if(isValid){
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
    
}
getELE("btnUpdate").onclick = updateSV ; 
// reset form
function formReset() {
    getELE("formQLSV").reset() ;
    getELE("txtMaSV").disabled = false ; 
    showUI(dssv.listSV) ; 
}
getELE("btnReset").addEventListener("click" , formReset) ; 
// search method
function searchSV() {
    // create an array to save all student we want to look for
    var searchArray = [] ; // we will assign the value of empty for array at first
    // now we need to get the value that users will type in form input
    var searchKey = getELE("txtSearch").value ; 
    // after we get the keyword , we need to convert it to lowerCase and noneAccentVietnamese
    searchKey = toNonAccentVietnamese(searchKey).toLowerCase() ; 
    dssv.listSV.map(function(objectSV){
        var tenSV = toNonAccentVietnamese(objectSV.tenSV).toLowerCase() ; 
        if(tenSV.indexOf(searchKey) > -1) searchArray.push(objectSV) ; 
    })
    console.log(searchArray) ;
    // oke cool now we get all elements we search for
    // next thing i wanna do is i will show it on UI
    if(searchArray.length != 0) showUI(searchArray) ;
    else getELE("tbodySinhVien").innerHTML = `<h2 class = "text-primary my-4">No Student Found !</h2>` ; 
     

}
// getELE("btnSearch").addEventListener("click" , searchSV) ; 
getELE("txtSearch").onkeyup = searchSV ; 
// hàm này sẽ loại bỏ dấu của tiếng việt
function toNonAccentVietnamese(str) {
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}

