function hitungKemenangan() {
    // Mendapatkan nilai dari input
    const jumlahPertandingan = parseInt(document.getElementById('jumlahPertandingan').value);
    const wrSaatIni = parseFloat(document.getElementById('wrSaatIni').value);
    const wrTarget = parseFloat(document.getElementById('wrTarget').value);

    // Menghitung jumlah kemenangan
    const kemenanganSaatIni = Math.round((wrSaatIni / 100) * jumlahPertandingan);
    const kemenanganTarget = Math.round((wrTarget / 100) * jumlahPertandingan);
    const kemenanganDibutuhkan = kemenanganTarget - kemenanganSaatIni;

    // Menampilkan hasil
    const hasilElemen = document.getElementById('hasil');
    hasilElemen.innerHTML = `
        <p>Jumlah kemenangan saat ini: ${kemenanganSaatIni}</p>
        <p>Jumlah kemenangan yang dibutuhkan untuk WR ${wrTarget}%: ${kemenanganDibutuhkan}</p>
    `;
}
