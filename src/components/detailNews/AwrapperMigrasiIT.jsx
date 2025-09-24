import { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram1 from '../../components/image/Migrasi IT 1.png';
import diagram2 from '../../components/image/Infrastruktur IT 2.png';
import diagram3 from '../../components/image/Infrastruktur IT 3.png';
import diagram4 from '../../components/image/Infrastruktur IT 4.png';
import { useLocation } from "react-router-dom";



const AwrapperMigrasiIT = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Mengapa Migrasi IT Bisa Jadi Jalan Pintas Transformasi Digital?' />
        <div className=" bg-white">
          <h3>Kompleksitas IT yang Semakin Sulit Dikelola</h3>
          <br />
          Banyak perusahaan saat ini menghadapi tantangan dalam mengelola infrastruktur IT yang semakin kompleks. Aplikasi semakin beragam, jumlah data terus meningkat, sementara kebutuhan pengguna berubah lebih cepat dibandingkan sebelumnya. Infrastruktur tradisional berbasis on-premise sering kali tidak lagi mampu mengimbangi kecepatan perubahan tersebut.
          <br /><br />
          Di sisi pengguna on-premise, dalam menambah kapasitas, perusahaan harus membeli server baru, menyiapkan storage tambahan, hingga menambah lisensi piranti lunak (software). Semua ini tidak hanya memakan waktu dan biaya, tetapi juga mengurangi fleksibilitas bisnis. Ketika skala bisnis tumbuh, tantangan yang dihadapi semakin besar: downtime, performa sistem yang menurun, keterbatasan kapasitas, serta tingginya risiko keamanan. Tidak jarang, pengadaan ini membutuhkan waktu berminggu-minggu bahkan berbulan-bulan.
          <br /><br />
          Kompleksitas inilah yang membuat banyak Perusahaan atau Organisasi mencari cara baru. Sebagian besar dari mereka ingin keluar dari lingkaran biaya besar, keterbatasan skala, dan lambatnya inovasi. Jawaban yang muncul adalah migrasi ke public cloud yang terpercaya. Menurut AWS, cloud migration adalah proses memindahkan aset digital seperti data, aplikasi, dan infrastruktur IT dari data center on-premises ke infrastruktur cloud. Proses ini tidak dilakukan sembarangan; harus ada perencanaan matang, strategi migrasi yang tepat, serta pengujian agar operasional bisnis tidak terganggu (source: https://aws.amazon.com/what-is/cloud-migration/). Migrasi cloud bukan lagi sekadar tren. Kini berkembang menjadi strategi transformasi digital yang membantu banyak Perusahaan atau Organisasi menyederhanakan kompleksitas IT sekaligus membuka jalan menuju inovasi.

          <br /><br />

          <h3>        Mengapa Migrasi ke Cloud Itu Penting?
          </h3>
          <br />
          Awalnya, banyak Perusahaan atau Organisasi hanya menggunakan cloud untuk aplikasi baru atau non-critical. Namun, seiring waktu, mereka menemukan manfaat besar dengan memperbaharui (jika dibutuhkan) serta memindahkan sistem lama (legacy app / system) juga ke public cloud. Ada 5 (lima) alasan utama mengapa migrasi menjadi langkah strategis.
          <br />
          <h4>1.	Efisiensi Biaya</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Biaya membangun dan merawat data center tidaklah kecil. Perusahaan atau Organisasi seperti pada bagian Pendahuluan di atas, mereka harus membeli server, storage, perangkat jaringan, membayar listrik, pendingin, hingga menggaji tim operasional. Migrasi ke cloud memotong biaya tersebut. Tidak ada lagi pengadaan perangkat keras besar-besaran.
            Dengan model Pay-As-You-Go (Ref. Artikel 1 - Infrastruktur IT Fleksibel: Dari Beban Menjadi Keunggulan - bisa dimasukkan link Artikel 1), perusahaan hanya membayar sumber daya yang dipakai. Jika server berjalan 10 jam, maka bayar 10 jam saja. Jika traffic menurun, kapasitas akan otomatis berkurang, sehingga dari segi biaya juga ikut turun.
            Selain itu, migrasi membebaskan tim operasional atau tenaga ahli dari tugas rutin seperti mengganti hard disk yang kerap rusak atau memperbarui piranti lunak (firmware server).
          </ul>
          <br />
          <h4>2.	Skalabilitas Dinamis</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Salah satu keunggulan cloud adalah skalabilitas hampir tanpa batas. Perusahaan bisa menambah kapasitas ketika traffic melonjak, dan menurunkannya kembali saat kondisi normal.
            Katakanlah sebuah Perusahaan e-commerce saat event Harbolnas. Dengan infrastruktur tradisional, server bisa down akibat traffic ribuan kali lipat. Dengan cloud, kapasitas otomatis bertambah, dan begitu traffic normal, kapasitas kembali menurun. Tidak ada lagi server idle yang membebani biaya.
          </ul>
          <br />
          <h4>3.	Keamanan yang Lebih Tinggi</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Banyak orang berpikir memindahkan data ke cloud berarti kehilangan kontrol keamanan. Faktanya adalah penyedia public cloud seperti AWS berinvestasi miliaran dolar untuk keamanan, seperti halnya ucapan dari CISO AWS, “the culture that Security is Job Zero, https://aws.amazon.com/blogs/enterprise-strategy/security-at-aws/”.
            Model pembagian tanggung jawabnya (Shared Responsibility, https://aws.amazon.com/compliance/shared-responsibility-model/) jelas. AWS mengamankan infrastruktur cloud, sementara Customer mengatur konfigurasi dan akses data. Dengan kombinasi ini, data justru lebih aman daripada dibiarkan di ruang server dengan kunci fisik.
          </ul>
          <br />
          <h4>4.	Performa dan Keandalan</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Migrasi ke cloud memberikan akses ke teknologi server dan jaringan terbaru. Aplikasi berjalan lebih cepat, latensi berkurang, dan pengguna merasakan pengalaman yang lebih baik.
            Dengan data center yang tersebar secara global, pengguna mengakses konten dari lokasi terdekat. Hal ini meningkatkan produktivitas dan daya saing bisnis.
          </ul>
          <br />
          <h4>5.  Keberlanjutan / Sustainability</h4>
          <div className="image-diagram">
            <img src={diagram1} alt="" />
          </div>
          <ul style={{ paddingLeft: '20px' }}>
            Public Cloud juga membantu Perusahaan / Organisasi lebih ramah lingkungan. Skala besar memungkinkan AWS menggunakan perangkat yang hemat energi dan teknologi pendingin canggih. Dibandingkan ribuan Perusahaan membangun data center sendiri, model ini jauh lebih efisien dan mengurangi jejak polusi (source: https://aws.amazon.com/sustainability/).
          </ul>
          <br />
          Dengan model ini membuat biaya IT menjadi sangat dinamis. Tidak ada lagi konsep “membeli server berlebihan hanya untuk jaga-jaga”.

          <br /> <br />
          <h3>Strategi Migrasi: 7R yang Harus Dipahami</h3>
          <br />
          Tidak semua aplikasi bisa dipindahkan ke cloud dengan cara yang sama. AWS memperkenalkan 7 strategi migrasi (7R) yang bisa menjadi panduan.
          <br />
          <h4>1.	Rehosting (Lift and Shift)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Memindahkan aplikasi apa adanya ke cloud tanpa perubahan besar. Cepat dan sederhana, cocok untuk migrasi tahap awal.
          </ul>
          <br />
          <h4>2.	Relocating (Lift and Optimize)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Sama seperti rehosting, tetapi setelah pindah, aplikasi dioptimalkan menggunakan layanan cloud, misalnya pindah dari VM ke database terkelola oleh AWS, seperti RDS (Relational Database Services).
          </ul>
          <br />
          <h4>3.	Refactoring</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Mendesain ulang aplikasi agar sepenuhnya memanfaatkan kemampuan cloud. Cocok untuk aplikasi yang ingin diskalakan atau ditambah fitur baru.
          </ul>
          <br />
          <h4>4.	Replatforming (Lift, Tinker, Shift)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Perpaduan rehosting dan refactoring. Ada optimasi tertentu, misalnya memindahkan database ke layanan cloud dengan otomatisasi berbasis machine learning.
          </ul>
          <br />
          <h4>5.	Repurchasing</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Mengganti aplikasi lama dengan aplikasi berbasis cloud. Misalnya, pindah dari VDI on-premises ke VDI native cloud.
          </ul>
          <br />
          <h4>6.	Retiring</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Mematikan aplikasi yang sudah tidak dibutuhkan. Dengan begitu, perusahaan bisa mengurangi biaya dan kompleksitas.
          </ul>
          <br />
          <h4>7.	Retaining (Revisiting)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Menunda migrasi untuk aplikasi tertentu. Biasanya karena aplikasi baru saja diperbarui atau masih ada alasan regulasi.
          </ul>
          <br /> <br />

          <h3>Jenis-Jenis Migrasi Cloud</h3>
          <br />
          Migrasi bisa terjadi dalam berbagai bentuk, tergantung kebutuhan:
          <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>•	Database Migration – memindahkan database ke cloud, dengan replikasi data untuk meminimalkan downtime.</li>
            <li>•	Application Migration – memindahkan aplikasi dari on-premises ke cloud, bisa rehosting, replatforming, atau refactoring.</li>
            <li>•	Hybrid Migration – sebagian sistem tetap on-premises, sebagian pindah ke cloud. Cocok untuk transisi bertahap.</li>
            <li>•	Data Center Migration – memindahkan seluruh infrastruktur data center ke cloud. Kompleks, tapi sangat mengurangi biaya operasional.</li>
            <li>•	Cloud-to-Cloud Migration – memindahkan workload antar penyedia cloud, misalnya karena biaya lebih murah atau layanan lebih sesuai.</li>
          </ul>

          <br /><br />
          <h3>Tahapan Migrasi AWS Best Practices</h3>
          <br />
          Model PAYG mendukung enam pilar AWS Well-Architected Framework:
          <br />
          <br />
          <h4>1.	Assessment (Menilai)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Perusahaan / Organisasi harus memahami kondisi IT saat ini. Identifikasi aplikasi, data, dan workload yang ada. Tentukan prioritas, biaya, dan potensi penghematan.
          </ul>
          <br />
          <h4>2.	Mobilize (Mempersiapkan)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Bentuk tim migrasi inti, buat rencana detail, siapkan lingkungan cloud, dan jalankan migrasi pilot untuk menguji strategi.
          </ul>
          <br />
          <h4>3.	Migrate and Modernize (Migrasi dan Modernisasi)</h4>
          <ul style={{ paddingLeft: '20px' }}>
            Setelah uji coba berhasil, mulai migrasi skala besar. Optimalkan arsitektur aplikasi agar sesuai dengan layanan cloud. Monitoring dilakukan untuk keamanan, performa, dan biaya.
          </ul>
          <br />
          Migrasi bukanlah langkah sekali jadi, tetapi proses berkelanjutan yang terus diperbarui sesuai perkembangan teknologi.
          <br /><br />
          <h3>Use Case: Migrasi ERP di Perusahaan Manufaktur</h3>
          <br />
          Sebuah perusahaan manufaktur besar di Indonesia menjalankan ERP (Enterprise Resource Planning) di data center internal. Sistem ERP ini kritikal karena mendukung produksi, keuangan, dan distribusi. Namun, setiap akhir bulan saat proses closing keuangan, sistem sering melambat karena kapasitas server tidak mencukupi.
          <br />
          Setelah migrasi ke AWS:
          <br /> <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>•	Database ERP dipindahkan ke Amazon RDS.</li>
            <li>•	Aplikasi ERP dijalankan di Amazon EC2 dengan mengaktifkan fitur ASG.</li>
            <li>•	Data backup langsung tersimpan di Amazon S3, yang menjamin durabilitas 11 s (99,999999999%).</li>
          </ul>
          <br />
          Hasilnya, performa ERP meningkat drastis. Proses laporan keuangan akhir bulan yang dulu butuh waktu berjam-jam kini bisa selesai lebih cepat. Downtime berkurang, kapasitas tidak lagi menjadi masalah, dan tim IT bisa fokus pada inovasi, bukan sekadar memadamkan masalah infrastruktur.
          <br /> <br />

          <h3>Use Case 2: Kelancaran Aplikasi Bisnis Perusahaan Finansial</h3>
          <br />
          Sebuah perusahaan asuransi mengalami tantangan dalam menjaga disaster recovery (DR). Mereka memiliki data center cadangan, tetapi biaya operasionalnya tinggi. 
          <br />
          Migrasi ke AWS memberi solusi:
          <br /> <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>•	Sistem utama tetap di data center lokal.</li>
            <li>•	Sistem cadangan dipindahkan ke AWS dengan AWS Elastic Disaster Recovery (DRS).</li>
            <li>•	Uji DR (Drill Test) bisa dilakukan lebih sering atau sesuai jadwal yang disepakati, dengan biaya yang jauh lebih terukur.</li>
          </ul>
          <br />
          Kini, perusahaan memiliki DR yang lebih tangguh, dengan RPO (Recovery Point Objective) dan RTO (Recovery Time Objective) lebih baik, tanpa biaya besar untuk menjaga data center cadangan.
          <br /> <br />

          <h3>Tantangan Migrasi dan Cara Mengatasinya</h3>
          <br />
          Migrasi tentu tidak lepas dari tantangan:
          <br /> <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>•	Kompleksitas teknis: Bagi aplikasi yang saling terhubung sehingga migrasi tidak bisa parsial.</li>
            <li>•	Skalabilitas: data besar membutuhkan strategi replikasi agar tidak mengganggu bisnis.</li>
            <li>•	Skill gap: tim internal perlu belajar teknologi cloud.</li>
          </ul>
          <br />
          <br />
          AWS menawarkan berbagai tools native untuk membantu:
          <br /> <br />
          <ul style={{ paddingLeft: '20px' }}>
            <li>•	Application Discovery Service – memetakan server sumber.</li>
            <li>•	Application Migration Service (MGN) – otomatisasi rehosting.</li>
            <li>•	Database Migration Service (DMS) – migrasi database cepat dan aman.</li>
            <li>•	DataSync – memindahkan file / data antar sistem.</li>
            <li>•	Migration Acceleration Program (MAP) – metodologi dalam mempercepat dan mengamankan proses migrasi yang terbukti dari pengalaman ribuan migrasi.</li>
          </ul>
          <br />
          Migrasi ke cloud adalah langkah strategis yang tidak hanya menyederhanakan kompleksitas IT, tetapi juga membuka peluang besar untuk efisiensi biaya, peningkatan keamanan, dan akselerasi inovasi. Namun, perjalanan ini tidak bisa dilakukan sendiri, yang mana dibutuhkan partner berpengalaman dan terbukti. PT Mastersystem Infotama Tbk (MSTI) hadir sebagai mitra terpercaya dengan rekam jejak panjang di Indonesia. Sebagai AWS Advanced Tier Partner, MSTI telah mendukung banyak Perusahaan di Indonesia dalam melakukan transisi dari on-premises ke cloud dengan pendekatan yang sistematis dan aman.
          <br /> 
          Lebih dari sekadar klaim, kapabilitas MSTI telah divalidasi melalui berbagai AWS Competencies di bidang migrasi, storage, serta modernisasi infrastruktur, ratusan sertifikasi resmi dari AWS, serta implementasi proyek nyata di berbagai industri (source: https://partners.amazonaws.com/partners/0010h00001d1hNzAAI/). Hal ini menjadikan MSTI bukan hanya penyedia layanan, melainkan partner strategis yang siap mendampingi pelanggan dari tahap perencanaan, migrasi, hingga pengelolaan harian di cloud. Dengan pengalaman di berbagai industri, MSTI menyediakan konsultasi, implementasi, hingga managed service yang akan membantu Perusahaan dalam monitoring operasional infrastruktur secara 24/7.

        </div>

      </section>
    </>
  )
}

export default AwrapperMigrasiIT
