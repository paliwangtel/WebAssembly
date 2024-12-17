// Memuat WebAssembly
async function loadWasm() {
    // Load file wasm
    const response = await fetch('wasm-build/add.wasm');
    const buffer = await response.arrayBuffer();
    const wasmModule = await WebAssembly.instantiate(buffer);

    // Mendapatkan fungsi 'add' dari WebAssembly
    const add = wasmModule.instance.exports.add;

    // Menggunakan fungsi add dari WebAssembly
    const result = add(10, 20);
    console.log(`Hasil penjumlahan: ${result}`);
}

// Memanggil fungsi loadWasm saat halaman dimuat
loadWasm();
