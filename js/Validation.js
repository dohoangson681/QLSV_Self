/**
 * This file used to create a new Class Validation that contains all methods for handling validation
 */
// After finish all this function in main.js , now we move on to validation
// this array contains all messages to check if user input is empty or not
var arrayTBEmpty = [
    "*Mã sinh viên không được để trống", // 0
    "*Tên sinh viên không được để trống", // 1
    "*Email sinh viên không được để trống", // 2
    "*Vui lòng nhập mật khẩu", // 3
    "*Chọn ngày sinh của bạn", // 4
    "*Chọn khóa học của bạn", // 5
    "*Điểm môn học không được để trống" // 6
];
// this array contains all messages to check if input field is valid or not
var arrayValid = [
    "*Mã sinh viên đã tồn tại" ,
    "*Tên sinh viên chỉ chứa kí tự chữ cái" , 
    "*Email chưa đúng định dạng" , 
    "*Mật khẩu chứa ít nhất 1 số , 1 chữ in hoa , 1 chữ in thường và 1 số , có độ dài từ 6 đến 8 kí tự" , 
    "*Ngày sinh không hợp lệ" , 
    "*Điểm không hợp lệ"
];
var regexPattern = [
    /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/ , // regex for name
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , //regex for email
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/ , // regex password
    /^(\d{1,2}(\.\d{1,2})?)$/ , // regex check score


]
function Validation() {
    // this method used to check empty
    this.checkEmpty = function(inputValue , idSpanTB , message){
        if(inputValue.trim() != ""){
            getELE(idSpanTB).style.display = "none" ; 
            getELE(idSpanTB).innerHTML = "" ; 
            return true ; 
        }else{
            getELE(idSpanTB).style.display = "block" ; 
            getELE(idSpanTB).innerHTML = message ;
            return false ; 
        }
    }
    // this method used to check khoahocSV empty or not
    this.checkKhoaHoc = function(idSelectKH , idSpanTB , message){
        var selectValue = getELE(idSelectKH) ; 
        if(selectValue.selectedIndex != 0){
            getELE(idSpanTB).style.display = "none" ; 
            getELE(idSpanTB).innerHTML = "" ; 
            return true ; 
        }else{
            getELE(idSpanTB).style.display = "block" ; 
            getELE(idSpanTB).innerHTML = message ;
            return false ; 
        }
    }
    // this method used to check if maSV is existed or not
    this.checkMaSVExist = function(maSV , idSpanTB , message){
        var checkExist = dssv.listSV.some(function(objectSV){
            if(objectSV.maSV === maSV.replaceAll(" ","")) return true ; 
        })
        if(checkExist){
            getELE(idSpanTB).style.display = "block" ; 
            getELE(idSpanTB).innerHTML = message ;
            return false ; 
        }else{
            getELE(idSpanTB).style.display = "none" ; 
            getELE(idSpanTB).innerHTML = "" ; 
            return true ; 

        }
    }
    // this method used to check tenSV using regex
    this.checkRegex = function(inputValue , patternRegex , idSpanTB , message){
        var pattern = patternRegex ; 
        if(inputValue.match(pattern)){
            getELE(idSpanTB).style.display = "none" ; 
            getELE(idSpanTB).innerHTML = "" ; 
            return true ;
        }else{
            getELE(idSpanTB).style.display = "block" ; 
            getELE(idSpanTB).innerHTML = message ;
            return false ;
        }
    }
    // check score
    this.checkScore = function(inputValue , idSpanTB , message){
        var pattern = regexPattern[3] ;
        if(inputValue.match(pattern) && Number(inputValue) <= 10){
            getELE(idSpanTB).style.display = "none" ; 
            getELE(idSpanTB).innerHTML = "" ; 
            return true ;
        }else{
            getELE(idSpanTB).style.display = "block" ; 
            getELE(idSpanTB).innerHTML = message ;
            return false ;
        }  
    }
 
}