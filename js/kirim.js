function sendMessage(isi) {
    const bayar = document.getElementById('formbayar');
    const mask = document.getElementById('maskk');
    bayar.style.transform = "translateY(-650px)";
    mask.style.display = "none";
    const namkan = document.getElementById('namkan').value;
    const nampez = document.getElementById('namapemesan').value;
    const nohap = document.getElementById('nohp').value;
    const juml = document.getElementById('jumlahan').value;
    const harga = document.getElementById('hgr').value;
    var token = '6840383948:AAEodXZh8lL9HPKbf6YhLjtO4PthDIr21tM';
    var chatId = '1285492346';
  
    // Memformat teks pesan dengan menggunakan HTML
    var message = `<b>ADA PESANAN BARU</b>\n\n<b>Makanan:</b> ${namkan}\n\n<b>Nama Pemesan:</b> ${nampez}\n\n<b>No hp:</b> ${nohap}\n\n<b>Jumlah:</b> ${juml}\n\n<b>Total Harga:</b> ${harga}`;
  
    // Kirim pesan menggunakan metode fetch
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(message)}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  }
  