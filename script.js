
function formatRupiah(x) { return 'Rp' + x.toLocaleString('id-ID'); }
function calcInstagram() {
  const f = +document.getElementById('ig_followers').value * 55;
  const l = +document.getElementById('ig_likes').value * 14;
  const v = +document.getElementById('ig_views').value * 9;
  document.getElementById('ig_total').textContent = formatRupiah(f + l + v);
}
function calcTikTok() {
  const f = +document.getElementById('tt_followers').value * 69;
  const l = +document.getElementById('tt_likes').value * 14;
  const v = +document.getElementById('tt_views').value * 10;
  document.getElementById('tt_total').textContent = formatRupiah(f + l + v);
}
function calcTelegram() {
  const m = +document.getElementById('tg_members').value * 75;
  const v = +document.getElementById('tg_views').value * 15;
  document.getElementById('tg_total').textContent = formatRupiah(m + v);
}
function calcFacebook() {
  const f = +document.getElementById('fb_followers').value * 70;
  const l = +document.getElementById('fb_likes').value * 100;
  document.getElementById('fb_total').textContent = formatRupiah(f + l);
}
function calcWA() {
  const m = +document.getElementById('wa_members').value * 85;
  document.getElementById('wa_total').textContent = formatRupiah(m);
}
function calcShopee() {
  const f = +document.getElementById('sh_followers').value * 80;
  const l = +document.getElementById('sh_likes').value * 900;
  document.getElementById('sh_total').textContent = formatRupiah(f + l);
}
function calcTwitter() {
  const f = +document.getElementById('tw_followers').value * 300;
  const e = +document.getElementById('tw_engage').value * 500;
  document.getElementById('tw_total').textContent = formatRupiah(f + e);
}
