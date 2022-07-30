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
    // find student
    this.findSV = function(maSV){
        var index = -1 ;
        // for(var i = 0 ; i < this.listSV.length ; i++){
        //     if(this.listSV[i].maSV === maSV) index = i ; 
        // }
        this.listSV.map(function(objectSV , idx){
            if(objectSV.maSV === maSV) index = idx ; 
        })
        return index ; 
    }
    // delete student method
    this.deleteSV = function(maSV){
        var index = this.findSV(maSV) ; 
        this.listSV.splice(index , 1) ; 
    }
    // update sinh vien
    this.updateSV = function(objectSV , maSV){
        var index = this.findSV(maSV) ; 
        this.listSV[index] = objectSV ; 
    }
}