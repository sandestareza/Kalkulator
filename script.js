function tambah(){
    var cek1 = document.getElementById('cek1')
    var cek2 = document.getElementById('cek2')
    var cek3 = document.getElementById('cek3')
    
    if( !cek1.checked && !cek2.checked && !cek3.checked ){
        alert("Harus diconteng minimal 2")
    } else
    if(!cek1.checked && !cek2.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek2.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek1.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if( !cek1.checked  ){
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil2+bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }else
    if( !cek2.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil1+bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else
    if( !cek3.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var hasil = bil1+bil2
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else{
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
    
        var hasil = bil1+bil2+bil3
        
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }

    alert("Wajib masukkan Inputan!\nFormat wajib angka!");

}

function kurang(){
    var cek1 = document.getElementById('cek1')
    var cek2 = document.getElementById('cek2')
    var cek3 = document.getElementById('cek3')

    if( !cek1.checked && !cek2.checked && !cek3.checked ){
        alert("Harus diconteng minimal 2")
    } else
    if(!cek1.checked && !cek2.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek2.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek1.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if( !cek1.checked  ){
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil2-bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }else
    if( !cek2.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil1-bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else
    if( !cek3.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var hasil = bil1-bil2
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else{
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
    
        var hasil = bil1-bil2-bil3
        
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }
     alert("Wajib masukkan Inputan!\nFormat wajib angka!");
}

function kali(){
    var cek1 = document.getElementById('cek1')
    var cek2 = document.getElementById('cek2')
    var cek3 = document.getElementById('cek3')

    if( !cek1.checked && !cek2.checked && !cek3.checked ){
        alert("Harus diconteng minimal 2")
    } else
    if(!cek1.checked && !cek2.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek2.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek1.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if( !cek1.checked  ){
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil2*bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }else
    if( !cek2.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil1*bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else
    if( !cek3.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var hasil = bil1*bil2
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else{
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
    
        var hasil = bil1*bil2*bil3
        
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }
     alert("Wajib masukkan Inputan!\nFormat wajib angka!");
}
function bagi(){
    var cek1 = document.getElementById('cek1')
    var cek2 = document.getElementById('cek2')
    var cek3 = document.getElementById('cek3')

    if( !cek1.checked && !cek2.checked && !cek3.checked ){
        alert("Harus diconteng minimal 2")
    } else
    if(!cek1.checked && !cek2.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek2.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if(!cek1.checked && !cek3.checked){
        alert("Harus diconteng minimal 2")
    }else
    if( !cek1.checked  ){
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil2/bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }else
    if( !cek2.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil3= parseFloat(document.getElementById('input3').value)
        var hasil = bil1/bil3
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else
    if( !cek3.checked  ){
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var hasil = bil1/bil2
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    } else{
        var bil1= parseFloat(document.getElementById('input1').value)
        var bil2= parseFloat(document.getElementById('input2').value)
        var bil3= parseFloat(document.getElementById('input3').value)
    
        var hasil = bil1/bil2/bil3
        
        document.getElementById('hasil').innerHTML = "<h1>"+ hasil +"</h1>"
    }
     alert("Wajib masukkan Inputan!\nFormat wajib angka!");
}
    
