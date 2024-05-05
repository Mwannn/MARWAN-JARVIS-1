const form = document.getElementById('form');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama').value;
    const peran = document.getElementById('peran').value;

    if (nama === '' || peran === '') {
        output.innerHTML = 'Nama dan Peran harus diisi!';
    } else {
        output.innerHTML = `Halo ${nama}, selamat datang di game! Kamu akan memainkan peran ${peran}.`;
    }
});