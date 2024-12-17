# WebAssembly C 

Ini adalah aplikasi web yang menggunakan WebAssembly untuk menjalankan fungsi yang ditulis dalam C.

## Struktur Proyek
- `index.html`: Halaman HTML utama.
- `js/main.js`: File JavaScript yang memuat WebAssembly dan menjalankan fungsi.
- `wasm/add.c`: Kode sumber C untuk dikompilasi menjadi WebAssembly.
- `wasm-build/add.wasm`: File WebAssembly yang dihasilkan.

## Cara Menjalankan
1. Pastikan Anda memiliki Emscripten terinstal di sistem Anda.
2. Jalankan perintah `emcc wasm/add.c -s WASM=1 -o wasm-build/add.wasm` untuk mengompilasi file C ke WebAssembly.
3. Jalankan server lokal menggunakan `npx http-server` atau `python3 -m http.server`.
4. Akses aplikasi di browser melalui `http://localhost:8080`.

## Hasil
Setelah menjalankan aplikasi, Anda akan melihat hasil penjumlahan di console browser.


Mengompilasi Kode C Menjadi WebAssembly Untuk mengompilasi kode C ke WebAssembly, kita membutuhkan Emscripten, sebuah toolchain untuk mengompilasi C/C++ ke dalam WebAssembly.
```
emcc wasm/add.c -s WASM=1 -o wasm-build/add.wasm
```
