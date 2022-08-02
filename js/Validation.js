/**
 * Validation
 * tenSV , maSV , emailSV , passwordSV , ngaysinhSV , khSV , diemToanLyHoa ko dc de trong
 * tenSV chi chua ki tu chu , ko dc chua so hay ki tu dac biet
 * email phai dung dinh dang 
 * mat khau co it nhat 1 chu in thuong 1 chu in hoa 1 chu so 1 ki tu dac biet va do dai theo yeu cau
 * diemToanLyHoa khong dc de trong ,  co the nhap dc so thap phan va [0,10] ; 
 */
function Validation() {
    // validation for checkEmpty
    this.checkEmpty = function(inputValue , spanMessageID , message ){
        if(inputValue.trim() != ""){
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ; 
        }else{
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false ; 
        }
    }
    // validation for maSV
    this.checkMaSV = function(inputValue , spanMessageID , message){
        // dung ham some
        // ham some se tra ve gia tri boolean true hoặc false
        var checkExist = dssv.listSV.some(function(objectSV){
            if(objectSV.maSV === inputValue.replaceAll(" ","")) return true ;
        })
        if(checkExist){
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false ;
        }else{
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ;
        }
    }
    // validation for checkName
    this.checkName = function(inputValue , spanMessageID , message){
        // regex for name
        var pattern = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/ ; 
        if(inputValue.match(pattern)){
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ; 
        }else{
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false  ; 
        }
            
        
    }
    // validation for checkEmail
    this.checkEmail = function(inputValue , spanMessageID , message){
        // regex for email
        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(inputValue.match(pattern)){
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ;
        }else{
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false  ;
        }
    }
    // validation for checkPassword
    this.checkPassword = function(inputValue , spanMessageID , message){
        var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/
        if(inputValue.match(pattern)){
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ;
        }else{
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false  ;
        }
    }
    // validation for checkKH
    this.checkKH = function(idValue , spanMessageID , message){
        var kh = getELE(idValue)  ; 
        if(kh.selectedIndex != 0 ){
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ;
        }else{
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false  ;
        }
    }
    // validation for checkScore
    this.checkScore = function(inputValue , spanMessageID , message){
        // regex for score
        var pattern = /^(\d{1,2}(\.\d{1,2})?)$/ ; 
        if(inputValue.match(pattern) && inputValue <=10){
            getELE(spanMessageID).innerHTML = "" ; 
            getELE(spanMessageID).style.display = "none" ; 
            return true ;
        }else{
            getELE(spanMessageID).innerHTML = message ; 
            getELE(spanMessageID).style.display = "block" ; 
            return false  ;
        }
    }
}
