import { useEffect } from "react"
import Heading from "../common/heading/Heading"
import diagram1 from '../../components/image/Infrastruktur IT 1.png';
import diagram2 from '../../components/image/Infrastruktur IT 2.png';
import diagram3 from '../../components/image/Infrastruktur IT 3.png';
import diagram4 from '../../components/image/Infrastruktur IT 4.png';
import { useLocation } from "react-router-dom";



const AwrapperInfrastrukturIT = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section className='homeAbout' id="sukses_aws">
        <Heading title='Infrastruktur IT Fleksibel: Dari Beban Menjadi Keunggulan' />
        <div className=" bg-white">
          <h3>Paradigma Lama VS Paradigma Baru</h3>
          <div className="image-diagram">
            <img src={diagram1} alt="" />
          </div>
          <br />
          Selama bertahun-tahun, banyak perusahaan di Indonesia maupun perusahaan global masih percaya bahwa investasi infrastruktur IT identik dengan biaya besar di awal (Capital Expenditure/CAPEX). Mereka harus membeli server fisik, storage, perangkat jaringan, lisensi perangkat lunak, hingga menyewa ruangan khusus dengan pendingin dan listrik cadangan agar sistem tetap berjalan. Belum lagi, perusahaan juga harus memperhitungkan biaya tim operasional atau Sumber Daya Manusia (SDM) untuk menjaga infrastruktur ini tetap berjalan lancar. Meskipun infrastruktur tersebut diharapkan bisa digunakan selama 3–5 tahun, pendekatan ini mulai dirasa tidak lagi selaras dengan kebutuhan bisnis yang dinamis. Tantangannya adalah biaya investasi yang tinggi mengurangi fleksibilitas keuangan seperti kapasitas infrastruktur yang tidak akurat sering berakhir dengan under-provisioning atau over-provisioning
          <br /><br />
          Perubahan ini semakin nyata di Indonesia. Menurut survei PwC (2022), adopsi cloud di segmen usaha kecil dan menengah (SMB) telah mencapai 89%, sedangkan di kalangan perusahaan besar, 80% telah menggunakan teknologi cloud, dan sisanya berencana mengadopsinya dalam 3 tahun ke depan. Data ini menunjukkan bahwa banyak organisasi di Indonesia mulai beralih ke infrastruktur cloud, meninggalkan model on-premise tradisional. Lebih jauh, dampak ekonomi dari adopsi cloud juga signifikan. Survei PwC memperkirakan adopsi cloud dapat menambah kontribusi sekitar USD 10,7 miliar bagi perekonomian Indonesia dalam periode 2021–2025. Fakta bahwa cloud mampu mendorong produktivitas dan transformasi digital semakin menegaskan pilihan organisasi terhadap fleksibilitas dan efisiensi operasional
          <br /><br />
          Melengkapi data tersebut, proyeksi pasar cloud Indonesia makin optimistis. Nilainya diperkirakan mencapai USD 2,09 miliar pada 2024 dan meningkat hingga USD 4,80 miliar pada 2032, dengan pertumbuhan tahunan rata-rata sekitar 14,5%. Fenomena ini menunjukkan bahwa banyak organisasi di Indonesia mulai meninggalkan pendekatan infrastruktur tradisional (murni on-premise) dan beralih ke model yang lebih fleksibel, baik public maupun hybrid cloud. Sejalan dengan tren ini, AWS (Amazon Web Services) menawarkan paradigma baru melalui model Operational Expenditure (OPEX) berbasis Pay As You Go (PAYG). Dengan model ini, perusahaan tidak perlu membeli perangkat fisik, melainkan cukup membayar sumber daya sesuai penggunaan. Hasilnya, investasi IT menjadi jauh lebih efisien, adaptif, dan menguntungkan, selaras dengan transformasi digital yang tengah berlangsung di Indonesia maupun dunia.

          <br /><br />

          <h3>        Konsep Pay As You Go (PAYG) di AWS
          </h3>
          <div className="image-diagram">
            <img src={diagram2} alt="" />
          </div>
          <br />
          Prinsip PAYG sangatlah sederhana: hanya bayar apa yang Anda gunakan, tidak lebih. Misalnya, jika sebuah server berjalan 10 jam, perusahaan hanya membayar 10 jam, bukan 24 jam penuh atau satu bulan penuh. Saat server dimatikan, biaya juga berhenti berjalan (kecuali untuk komponen penyimpanan seperti Elastic Block Storage/EBS yang tetap digunakan). 
          <br />
          Di AWS, PAYG hadir dalam beberapa opsi:
          <ul style={{ paddingLeft: '20px' }}>
          <li>•	On-Demand Instances – bayar per jam atau per detik untuk komputasi.</li>
          <li>•	Reserved Instances & Savings Plans – hemat biaya hingga 70% untuk komitmen jangka panjang (1 tahun atau 3 tahun).</li>
          <li>•	Spot Instances – memanfaatkan kapasitas EC2 yang tidak terpakai di AWS dengan potongan harga hingga 90% dibandingkan harga On-Demand Instances, cocok untuk workload fleksibel (seperti stateless, fault-tolerant, atau fleksibel seperti big data, containerized workloads, CI/CD, web server, high-performance computing (HPC), serta test & development).</li>
          </ul>
          Dengan model ini membuat biaya IT menjadi sangat dinamis. Tidak ada lagi konsep “membeli server berlebihan hanya untuk jaga-jaga”.

          <br /> <br />
          <h3>Fleksibilitas Infrastruktur AWS</h3>
          <div className="image-diagram">
            <img src={diagram3} alt="" />
          </div>
          <br />
          Selain hemat biaya, PAYG juga membuat infrastruktur jauh lebih fleksibel. Fleksibilitas ini hadir dalam tiga bentuk Utama
          <br />
          <h4>1.	Start/Stop Instances</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Server virtual (Amazon EC2) bisa dinyalakan hanya saat dibutuhkan. Contohnya, untuk environment development yang dipakai hanya di jam kerja, server bisa otomatis mati setelah pukul 6 sore dan hidup kembali pukul 8 pagi—tanpa campur tangan manual.
          </ul>
          <br />
          <h4>2.	Resize Instance</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Kapasitas server dapat dengan mudah disesuaikan. Saat workload meningkat, perusahaan cukup melakukan scale up ke instance yang lebih besar hanya dengan beberapa klik atau satu perintah API. Begitu beban kerja menurun, server bisa kembali di-scale down.
          </ul>
          <br />
          <h4>3.	Auto Scaling Group (ASG)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          ASG secara otomatis menambah server baru saat traffic melonjak, lalu menurunkannya lagi ketika traffic reda. Hasilnya, biaya selalu sejalan dengan kebutuhan nyata—tidak ada lagi pemborosan.
          </ul>
          <br />
          Bayangkan sebuah startup e-commerce baru di Jakarta. Saat aplikasi pertama kali diluncurkan, traffic pengunjung masih kecil, cukup dilayani server sederhana dengan biaya hanya ratusan ribu rupiah per bulan. Namun, ketika mereka menggelar kampanye diskon besar-besaran seperti Harbolnas, jumlah pengunjung melonjak ribuan kali lipat. Jika masih mengandalkan server on-premise, mereka akan kewalahan. Bisa saja server error, mati, atau bahkan down karena overload. Sementara itu, menambah server baru membutuhkan waktu berminggu-minggu—terlambat untuk mengimbangi lonjakan traffic.
          Dengan AWS, mereka cukup menyiapkan ASG. Ketika traffic melonjak, server baru otomatis ditambahkan. Begitu traffic normal, server akan otomatis berkurang. Biaya pun hanya meningkat saat benar-benar dibutuhkan.
          Contoh studi kasus lainnya, sebuah perusahaan manufaktur yang sudah berdiri puluhan tahun awalnya menggunakan data center sendiri. Mereka membeli server besar setiap 5 tahun sekali. Masalah muncul ketika pandemi COVID-19: kebutuhan remote access melonjak, tetapi kapasitas server tidak cukup.
          Mereka akhirnya pindah ke AWS dengan model PAYG. Kini, mereka tidak perlu lagi membeli server setiap 5 tahun. Infrastruktur bisa bertambah atau berkurang sesuai kebutuhan bisnis. Selain itu, keamanan data juga meningkat dengan layanan AWS Security.
          <br /> <br />

          <h3>Manfaat Bisnis & Teknis</h3>
          Menggunakan PAYG di AWS memberikan banyak manfaat:
          <ul style={{ paddingLeft: '20px' }}>
          <li>•	Efisiensi biaya – tidak ada investasi awal besar.</li>
          <li>•	Agility & inovasi – infrastruktur bisa berubah dalam hitungan menit.</li>
          <li>•	Reliability – layanan AWS tersebar di banyak Availability Zone.</li>
          <li>•	Sustainability – lebih ramah lingkungan karena menggunakan infrastruktur shared yang efisien energi.</li>
          </ul>

          <br /><br />
          <h3>6 Pilar AWS Well-Architected</h3>
          <div className="image-diagram">
            <img src={diagram4} alt="" />
          </div>
          <br />
          Model PAYG mendukung enam pilar AWS Well-Architected Framework:
          <br />
          <h4>1.	Operational Excellence (Kemudahan Operasi)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Dengan model bayar sesuai pemakaian, perusahaan bisa lebih mudah mengatur server. Menyalakan, mematikan, atau menambah kapasitas bisa dilakukan otomatis—seperti menyalakan lampu dengan saklar. Hasilnya, tim IT tidak lagi terjebak mengurus hal-hal kecil, tapi bisa fokus pada peningkatan layanan.
          </ul>
          <br />
          <h4>2.	Security (Keamanan Data)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Walau biaya fleksibel, keamanan tidak dikompromikan. Data tetap terlindungi dengan sistem enkripsi, kontrol akses yang ketat, dan standar keamanan internasional. Jadi, walau tidak membeli server sendiri, data perusahaan tetap aman seolah disimpan di “brankas digital”.
          </ul>
          <br />
          <h4>3.	Reliability (Keandalan Sistem)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Server tradisional sering bermasalah jika tiba-tiba ada lonjakan beban. Dengan PAYG, sistem bisa otomatis menambah kapasitas jika dibutuhkan. Bahkan jika ada gangguan di satu lokasi, layanan bisa dialihkan ke lokasi lain agar tetap berjalan. Seperti punya genset otomatis saat listrik padam—layanan tetap nyala tanpa henti.
          </ul>
          <br />
          <h4>4.	Performance Efficiency (Kinerja Optimal)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          PAYG memungkinkan perusahaan menaruh aplikasi di lokasi (region) yang paling dekat dengan pengguna. Artinya, akses lebih cepat, respons aplikasi lebih baik, dan pengalaman pengguna meningkat. Sama seperti memilih jalan tol terdekat untuk sampai ke tujuan lebih cepat.
          </ul>
          <br />
          <h4>5.	Cost Optimization (Biaya Efisien)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Inilah inti dari PAYG: hanya bayar apa yang benar-benar dipakai. Tidak ada lagi biaya server yang menganggur. Ibaratnya, seperti bayar listrik atau air—tagihan muncul hanya sesuai penggunaan, bukan biaya tetap bulanan.
          </ul>
          <br />
          <h4>6.	Sustainability (Keberlanjutan & Ramah Lingkungan)</h4>
          <ul style={{ paddingLeft: '20px' }}>
          Dengan menggunakan infrastruktur bersama yang lebih efisien, konsumsi energi berkurang dibandingkan jika tiap perusahaan membangun data center sendiri. Ini membantu mengurangi jejak karbon dan membuat perusahaan lebih ramah lingkungan.
          </ul>
          <br /><br />
          <h3>Tantangan & Cara Mengatasinya</h3>
          Tentu ada tantangan karena biaya bisa melonjak tiba-tiba jika tidak dikelola dengan baik. Banyak perusahaan kaget karena lupa mematikan server atau tidak mengatur alarm biaya. Untungnya, AWS menyediakan solusi seperti Cost Explorer, Budgets, dan tagging untuk menjaga pengeluaran tetap terkendali. Dengan manajemen yang tepat, konsep PAYG di AWS membuat infrastruktur menjadi lebih murah, fleksibel, dan menguntungkan. Perusahaan tidak lagi harus terikat investasi besar di awal, melainkan cukup menyesuaikan biaya sesuai kebutuhan nyata.
          <br />
          Di sinilah PT Mastersystem Infotama Tbk (MSTI) hadir untuk membantu customer dalam mengelola AWS, memberikan 24/7 real-time monitoring, serta konsultasi untuk memastikan penggunaan AWS selalu optimal.



        </div>

      </section>
    </>
  )
}

export default AwrapperInfrastrukturIT
