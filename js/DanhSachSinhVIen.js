/**
 * This file is used to create a new array of SinhVien to save as many SinhVien objects as possible
 */
// now we creat a new class with ES5 syntax to create a new array to save all objects SinhVien for hanlding function on UI in the future
function DanhSachSinhVien() {
    // we create only one property and this is an array with empty value because we still have no student yet
    this.listSV = [] ;
    // add method to add a new SinhVien
    this.addSV = function(objectSV){
        // we push object SinhVien we will create in the no far future then push in array to save it
        this.listSV.push(objectSV) ; 
    } 
    // find method to find if the student that we want to check is exist or not
    this.findSV = function(maSV){
        var index = -1 ; 
        this.listSV.map(function(objectSV , i){
            if(objectSV.maSV === maSV) index = i ;
        })
        return index ; 
    }
    this.deleteSV = function(index){
        this.listSV.splice(index , 1) ; 
    }
    this.updateSV = function(index , objectSV){
        
        this.listSV[index] = objectSV ; 
        
    }

}