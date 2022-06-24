// sebuah event untuk menangkap keadaan pada saat elemen di link yang klik
$(".page-scroll").on("click", function(e){
    // untuk mengecek jalan tidaknya
    // console.log("ok");
    // disaat klik linknya kita ingin mengambil isi dari hrefnya
    var tujuan = $(this).attr("href");
    // console.log(href);
    // mengapa kita mengambilnya supaya bisa menangkap elemennya karena kita akan mengambil sectionnya yang mempunyai id
    var elemenTujuan = $(tujuan);
    // console.log(elemenTujuan);
    // kita ambil elemennya supaya mengetahui jarak elemennya ke paling atas website kita
    // console.log(elemenTujuan.offset().top);
    // supaya kita bisa mengetahui jarak antara elemen ke posisi atas, cuman disaat kita menscroll halaman, nilai topnya berbubah
    // console.log($("html, body").scrollTop());
    // jika kita ganti scrollnya dengan parameter
    // $("html, body").scrollTop(elemenTujuan.offset().top);
    // kita ganti scroll topnya dengan link yang bersangkutan, seperti diatas
    // namun salah satu kelebihan dari jQuery ini adalah adanya animate
    $("html, body").animate({
        scrollTop: elemenTujuan.offset().top - 50 
        // cara menambahkan waktu kecepatan, 1000 artinya 1 detik
    }, 1000, "easeInOutExpo"); //Defaultnya ialah swing, linear artinya gerakannya tidak ada rem
    // supaya a nya nggak jalan maka kita harus membajak fasilitasnya
    e.preventDefault();
});