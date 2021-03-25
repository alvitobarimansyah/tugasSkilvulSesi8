function validasi() {
    let nama = document.querySelector('#nama').value;
    let email = document.querySelector('#email').value;
    let pesan = document.querySelector('#pesan').value;

    if (nama == '' || email == '' || pesan == '') {
        alert('silahkan isi data terlebih dahulu');
    } else {
        alert('data sudah terkirim');
    }
}