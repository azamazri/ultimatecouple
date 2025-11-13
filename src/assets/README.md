# Assets Folder

Folder ini berisi semua gambar/poster yang digunakan dalam website Ultimate Couple Experience.

## 🖼️ File Assets yang Dibutuhkan

### 1. `hero-poster.png`
**Digunakan di:** Hero Section (halaman utama)
**Deskripsi:** Poster utama Ultimate Couple Experience
**Import di:** `src/components/Hero.tsx`

### 2. `schedule-rundown.png`
**Digunakan di:** Experience Section
**Deskripsi:** Gambar rundown acara lengkap 2 hari 1 malam
**Import di:** `src/components/Experience.tsx`

### 3. `facilitator-photo.png`
**Digunakan di:** Facilitator Section
**Deskripsi:** Foto Satia Pradana (fasilitator)
**Import di:** `src/components/Facilitator.tsx`

## 📝 Cara Update Assets

Untuk mengganti gambar/poster:

1. **Siapkan gambar baru** dengan format `.png`, `.jpg`, atau `.webp`
2. **Ganti nama file** sesuai dengan nama di atas (atau sesuaikan import di komponen)
3. **Upload ke folder ini** (`src/assets/`)
4. **Tidak perlu ubah kode** - import akan otomatis menggunakan gambar terbaru

### Contoh: Mengganti Hero Poster

```bash
# Cara 1: Ganti file langsung dengan nama yang sama
# Upload file baru sebagai: hero-poster.png

# Cara 2: Gunakan nama berbeda dan update import
# 1. Upload: hero-poster-2025.png
# 2. Edit src/components/Hero.tsx:
#    import heroImage from "@/assets/hero-poster-2025.png";
```

## ✅ Best Practices

- **Format:** Gunakan WebP untuk ukuran file lebih kecil (opsional)
- **Ukuran:** Optimasi gambar sebelum upload (compress jika perlu)
- **Naming:** Gunakan nama yang descriptive dan konsisten
- **Version Control:** Jika ingin simpan history, tambahkan tanggal/versi di nama file

## 🚀 Tips

Untuk performa terbaik:
- Hero poster: maksimal 2MB, lebar 1920px
- Schedule rundown: maksimal 1MB, optimize untuk readability
- Facilitator photo: maksimal 500KB, min 800x800px
