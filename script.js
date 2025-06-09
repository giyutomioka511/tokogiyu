
function hitungHarga() {
  const hargaPerItem = {
    instagram_followers: 55,
    instagram_like: 14,
    instagram_view: 9,
    tiktok_followers: 69,
    tiktok_like: 14,
    tiktok_view: 10,
    facebook_followers: 70,
    facebook_like: 100,
    telegram_members: 75,
    telegram_view: 15,
    whatsapp_members: 85,
    shoppe_followers: 80,
    shoppe_like: 900,
    twitter_followers: 300,
    twitter_like: 500
  };

  const platform = document.getElementById("platform").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);
  const harga = hargaPerItem[platform] * jumlah;

  document.getElementById("hasil").innerText = "Total Harga: Rp " + harga.toLocaleString("id-ID");
}
