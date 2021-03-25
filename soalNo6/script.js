function validasi() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;

    if (username == 'alvito' && password == '12345678') {
        alert('data sudah terkirim');
    } else if (username == '' || password == '') {
        alert('silahkan isi data terlebih dahulu');
    } else {
        alert('Username atau Password salah');
    }
}