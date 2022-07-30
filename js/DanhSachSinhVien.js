/**
 * Class danh sach sinh vien dung de luu danh sach cac sinh vien
 */
 function DanhSachSinhVien() {
    // this property is used to add a new student and save in an array
    this.listSV = [] ; 
    // add new student method
    this.addSV = function(objectSV){
        this.listSV.push(objectSV) ; 
    }


}