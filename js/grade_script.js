function cekNilai() {
    const inputEl = document.getElementById('nilaiSiswa');
    const outEl = document.getElementById('hasilGrade');
    if (!inputEl || !outEl) return;

    const raw = inputEl.value;
    if (typeof raw !== 'string' || raw.trim() === '') {
        outEl.textContent = 'Nilai tidak valid.';
        return;
    }

    const nilai = Number(raw);
    let grade;

    if (!Number.isFinite(nilai)) {
        grade = 'Nilai tidak valid.';
    } else if (nilai >= 90 && nilai <= 100) {
        grade = 'A (Sangat Baik)';
    } else if (nilai >= 80 && nilai < 90) {
        grade = 'B (Baik)';
    } else if (nilai >= 70 && nilai < 80) {
        grade = 'C (Cukup)';
    } else if (nilai >= 60 && nilai < 70) {
        grade = 'D (Kurang)';
    } else if (nilai >= 0 && nilai < 60) {
        grade = 'E (Gagal)';
    } else {
        grade = 'Nilai tidak valid.';
    }

    outEl.textContent = 'Grade Anda: ' + grade;
}