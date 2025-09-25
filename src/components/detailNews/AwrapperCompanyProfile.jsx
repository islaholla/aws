import { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram1 from '../../components/image/Company Profile.png';
import diagram2 from '../../components/image/Infrastruktur IT 2.png';
import diagram3 from '../../components/image/Infrastruktur IT 3.png';
import diagram4 from '../../components/image/Infrastruktur IT 4.png';
import { useLocation } from "react-router-dom";



const AwrapperCompanyProfile = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Evolusi Company Profile: Dari Dokumen Statis ke Akses Digital Instan' />
        <div className=" bg-white">
          <h3>Dari File Statis ke Profil Dinamis</h3>
          <br />
          Company profile adalah wajah pertama perusahaan. Sayangnya, format tradisional seperti PDF atau PowerPoint sering merepotkan: file terlalu besar, tampilan tidak responsif di mobile, dan cepat kadaluarsa saat ada update.
          <br /><br />
          Hasilnya, compro yang seharusnya menjadi alat branding dinamis justru sering berakhir sebagai dokumen statis yang cepat kadaluarsa. Di sinilah cloud computing menawarkan solusi. Dengan memanfaatkan Amazon S3, compro yang tadinya berbentuk file statis bisa diubah menjadi situs web sederhana, modern, interaktif, dan selalu up-to-date. Tidak perlu infrastruktur rumit, tidak perlu biaya besar. Cukup unggah file ke cloud, lakukan beberapa pengaturan, dan compro digital siap digunakan.
          <br /><br />

          <h3>        Mengapa Memilih Amazon S3 untuk Compro Digital?
          </h3>
          <div className="image-diagram">
            <img src={diagram1} alt="" />
          </div>
          <br />
          Amazon Simple Storage Service (S3) adalah layanan penyimpanan data di cloud yang digunakan oleh jutaan perusahaan di seluruh dunia. Banyak yang mengenalnya hanya sebagai “tempat simpan file”, padahal S3 memiliki fitur yang jauh lebih luas.
          <br /> <br />
          Salah satu fitur paling relevan untuk company profile digital adalah Static Website Hosting. Dengan fitur ini, bucket (wadah penyimpanan di S3) bisa berfungsi layaknya web server. File HTML, CSS, gambar, hingga video yang diunggah ke bucket dapat langsung ditampilkan sebagai website yang bisa diakses siapa saja.
          <br /> <br />
          Kenapa S3 cocok untuk compro digital?
          <br /> <br />
          <h4>1.	Hemat biaya </h4>
          <ul style={{ paddingLeft: '20px' }}>
            hanya bayar penyimpanan dan Data Transfer Out (DTO). Untuk satu compro digital, biayanya sering kali cuma puluhan ribu rupiah per bulan.
          </ul>
          <br />
          <h4>2.	Mudah digunakan </h4>
          <ul style={{ paddingLeft: '20px' }}>
            tanpa server, tanpa instalasi rumit. Cukup unggah file, aktifkan hosting, compro langsung online.
          </ul>
          <br />
          <h4>3.	Aman</h4>
          <ul style={{ paddingLeft: '20px' }}>
            dilengkapi enkripsi, kontrol akses (IAM), dan kepatuhan standar keamanan global.
          </ul>
          <br />
          <h4>4.	Andal</h4>
          <ul style={{ paddingLeft: '20px' }}>
            AWS menjamin daya tahan data hingga 11 nines durability (99,999999999%), membuat data hampir mustahil hilang.
          </ul>
          <br />
          <h4>5.  Profesional</h4>
          <ul style={{ paddingLeft: '20px' }}>
            dengan domain perusahaan dan SSL, compro tampil lebih modern dan terpercaya.
          </ul>
          <br />
          Dengan Static Website Hosting di S3, company profile tidak lagi sekadar file statis, tapi hadir sebagai website interaktif, mudah diakses, dan selalu up-to-date.

          <br /> <br />
          <h3>Tahapan Implementasi Compro Digital di Amazon S3</h3>
          <br />
          Berikut adalah langkah-langkah praktis, berdasarkan panduan resmi AWS dan best practice yang umum dipakai perusahaan:
          <br /> <br />
          <h4>1.	Persiapan Konten</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Sebelum menyentuh sisi teknis, siapkan konten compro kita. Susun materi seperti:
            <li>•	Profil perusahaan (visi, misi, sejarah singkat).</li>
            <li>•	Daftar layanan atau produk unggulan.</li>
            <li>•	Portofolio proyek beserta gambar pendukung.</li>
            <li>•	Profil tim inti dengan foto profesional.</li>
            <li>•	Kontak & alamat perusahaan.</li>
            <li>•	Dan atau konten lainnya yang disesuaikan dengan kebutuhan masing-masing.</li>
            Semua materi ini sebaiknya dibuat dalam format web-friendly: teks dalam HTML, gambar dalam JPG/PNG, dan video dalam MP4. Jika belum terbiasa membuat HTML, cukup gunakan template website statis gratis atau ringan.
          </ul>
          <br />
          <h4>2.	Buat Bucket S3</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Dari AWS Console, buat bucket baru dengan nama unik (contoh: compro-perusahaan-kita). Pilih region terdekat agar akses lebih cepat dan menjangkau audiens Indonesia dengan baik dengan tahapan, sebagai berikut:
            <li>•	Login ke AWS Management Console.</li>
            <li>•	Cari dan pilih layanan S3.</li>
            <li>•	Klik Create Bucket dan beri nama unik, misalnya “compro-namaperusahaan-kita”.</li>
            <li>•	Pilih region terdekat dengan target audiens, misalnya Asia Pacific (Jakarta / ap-southeast-3) agar akses lebih cepat untuk user / audiens dari wilayah Indonesia.</li>
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html).
          </ul>
          <br />
          <h4>3.	Aktifkan Static Website Hosting</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Di pengaturan bucket, aktifkan Static Website Hosting, dan tetapkan index.html sebagai halaman default, dengan tahapan sebagai berikut:
            <li>•	Masuk ke tab Properties bucket.</li>
            <li>•	Aktifkan opsi Static Website Hosting.</li>
            <li>•	Masukkan index.html sebagai default document.</li>
            Langkah ini membuat bucket Anda bisa berfungsi sebagai web server.
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
          </ul>
          <br />
          <h4>4.	Mengizinkan Akses Publik</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Secara default, bucket S3 bersifat private / tidak bisa diakses oleh semua orang. Nah, agar website dapat diakses orang lain, maka diperlukan:
            <li>•	Me-nonaktifkan Block All Public Access.</li>
            <li>•	Tambahkan Bucket Policy yang memberikan akses GetObject untuk semua orang (read-only).</li>
            Catatan: Kebijakan ini tidak berbahaya karena hanya memberikan akses baca, sementara hak edit tetap terbatas untuk pemilik akun AWS.
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)

          </ul>
          <br />
          <h4>5.	Upload Konten</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Unggah semua file ke bucket dan pastikan juga struktur file disusun secara rapi, seperti Upload semua file yang dibutuhkan: index.html, folder /images untuk gambar, /videos untuk video.
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/HostingWebsiteOnS3Setup.html)
          </ul>
          <br />
          <h4>6.	Hubungkan dengan Domain (Opsional tapi akan terlihat lebih profesional)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Untuk mendapatkan hasil yang lebih terlihat profesional, kita dapat menggunakan domain perusahaan (misalnya profile.namaperusahaan-kita.co.id), dengan:
            <li>•	Perlu membeli domain (jika belum punya) atau bisa menggunakan domain yang sudah ada.</li>
            <li>•	Arahkan domain atau subdomain ke bucket S3 menggunakan Amazon Route 53.</li>
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html).
          </ul>
          <br />
          <h4>7.	Percepat & Amankan Akses dengan CloudFront</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Amazon CloudFront berfungsi sebagai Content Delivery Network (CDN) yang mana:
            <li>•	Dengan CloudFront, website compro bisa diakses lebih cepat dari seluruh dunia.</li>
            <li>•	CloudFront juga memungkinkan penggunaan SSL/TLS, sehingga compro bisa diakses dengan alamat “https://”.</li>
            <li>•	Hal ini penting agar klien merasa aman saat membuka link kita.</li>
            (https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html).
          </ul>
          <br />
          <h4>8.	Optimasi Konten & Responsif</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Kompres gambar, pastikan desain responsif agar tampil optimal di desktop maupun mobile. Jika ingin lebih interaktif, tambahkan form kontak menggunakan AWS Lambda + API Gateway—opsional tapi bisa meningkatkan engagement.
          </ul>
          <br />
          <h4>9.	Bagikan dengan QR Code</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Setelah compro digital kita memiliki domain khusus, langkah berikutnya adalah membuatnya lebih mudah dibagikan. Caranya sederhana: ubah link https://profile.namaperusahaan-kita.co.id menjadi QR Code. QR Code ini bisa dicetak di kartu nama, brosur, bahkan dipasang di booth pameran. Dengan begitu, calon klien tinggal memindai barcode untuk langsung membuka compro digital kita, tanpa harus mengetik alamat website.
          </ul>
          <br /> <br />
          Company profile kini bukan lagi file PDF yang cepat kadaluarsa. Dengan Amazon S3, compro menjadi wajah digital perusahaan yang dinamis, hemat, dan selalu terlihat profesional.
          <br /> <br />
          PT Mastersystem Infotama Tbk (MSTI) siap membantu mewujudkannya. Lewat layanan Managed Service 24/7, kami mendampingi mulai dari desain hingga implementasi, memastikan solusi cloud—including compro digital—berjalan lancar dan memberi nilai nyata bagi bisnis Anda.

        </div>

      </section>
    </>
  )
}

export default AwrapperCompanyProfile
