function _getInputs() {
    const elA = document.getElementById('angka1');
    const elB = document.getElementById('angka2');
    const rawA = elA ? String(elA.value) : '';
    const rawB = elB ? String(elB.value) : '';
    return { elA, elB, rawA, rawB, a: Number(rawA), b: Number(rawB) };
}

function _out(text) {
    const out = document.getElementById('hasilKalkulasi');
    if (out) out.textContent = text;
}

function _validate(rawA, rawB, a, b) {
    if (rawA.trim() === '' || rawB.trim() === '') {
        _out('Masukkan kedua angka terlebih dahulu.');
        return false;
    }
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        _out('Masukkan angka yang valid.');
        return false;
    }
    return true;
}

function tambah() {
    const { rawA, rawB, a, b } = _getInputs();
    if (!_validate(rawA, rawB, a, b)) return;
    _out('Hasil: ' + (a + b));
}

function kurang() {
    const { rawA, rawB, a, b } = _getInputs();
    if (!_validate(rawA, rawB, a, b)) return;
    _out('Hasil: ' + (a - b));
}

function kali() {
    const { rawA, rawB, a, b } = _getInputs();
    if (!_validate(rawA, rawB, a, b)) return;
    _out('Hasil: ' + (a * b));
}

function bagi() {
    const { rawA, rawB, a, b } = _getInputs();
    if (!_validate(rawA, rawB, a, b)) return;
    if (b === 0) {
        _out('Error: Pembagian dengan nol.');
        return;
    }
    _out('Hasil: ' + (a / b));
}
