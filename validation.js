
function klik(){
    document.getElementById("info").innerHTML = "Isikan semua field, format email xx@gmail.com, nomor.HP minimal 10 digit";
}

function validate(){
    event.preventDefault(); //mencegah halaman html memuat ulang
    var huruf = /^[A-Za-z]+$/;
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.w{2,3})+$/;
    var inputNama = document.forms["form_daftar"]["nama"].value;
    var inputEmail = document.forms["form_daftar"]["email"].value;
    var inputAlamat = document.forms["form_daftar"]["alamat"].value;
    var inputNomor = document.forms["form_daftar"]["no.HP"].value;

    if ( inputNama.match(huruf))
    {
        var namaValid = inputNama;
    }else{
        alert("Input nama tidak sesuai");
    }

    if (inputEmail.match(mailFormat))
    {
        var emailValid = inputEmail;
    }else{
        alert("Input email tidak sesuai");
    }

    if (inputAlamat == ""){
        alert("Alamat tidak boleh kosong");
    }else{
        var alamatValid = inputAlamat;
    }

    if (isNaN(inputNomor) || inputNomor.toString().length <10){
        alert("Input nomor HP tidak sesuai");
    }else{
        var nomorValid = inputNomor;
    }

    document.getElementById("hasil").innerHTML = namaValid + "<br>" + emailValid + "<br>" + alamatValid + "<br>" + nomorValid;
    document.getElementById("tombol2").textContent = "Registered!";
}