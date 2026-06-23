# TikTok Comment Searcher 🔍

TikTok videolarındaki yorumlar arasında hızlıca arama yapmanızı, gelişmiş filtreleme yapmanızı ve yorum analizleri çıkarmanızı sağlayan modern ve güçlü bir tarayıcı uzantısı.

---

## ✨ Özellikler / Features

*   🔍 **Gelişmiş Arama (Search):** Yorumlar içinde kelimeye veya kullanıcı adına göre anlık arama yapın.
*   ⚡ **Otomatik Yükleme (Auto Load):** Sayfayı manuel kaydırmak zorunda kalmadan tüm yorumları otomatik olarak aşağı kaydırıp hafızaya alır. Hız ayarı (Hızlı, Dengeli, Güvenli) değiştirilebilir.
*   📊 **Kelime Analizi (Word Cloud Analysis):** Yorumlarda en çok geçen kelimeleri analiz edip en popüler 10 kelimeyi gösterir. Kelimelere tıklayarak doğrudan arama yapabilirsiniz.
*   ❓ **Soru Filtresi (Questions Filter):** Sadece soru içeren yorumları (örn: *fiyat, nasıl, ne kadar, ?*) filtreleyin.
*   ✔ **Onaylı Hesap Filtresi (Verified Filter):** Sadece mavi rozetli onaylı hesapların yorumlarını gösterin.
*   🎯 **Yoruma Gitme (Jump to Comment):** Arama sonucunda bir yoruma tıkladığınızda, TikTok panelinde o yoruma otomatik kaydırır ve mavi bir parlamayla dikkat çeker.
*   ⌨️ **Klavye Çakışması Engeli:** Arama kutusuna yazı yazarken TikTok'un video kısayollarının (sessize alma, tam ekran vb.) tetiklenmesini engeller.
*   🌐 **12 Dil Desteği:** English, Türkçe, Español, Deutsch, Français, Português, Italiano, العربية, 日本語, 한국어, Русский, 中文.

---

## 🛠️ Kurulum Adımları / How to Install

Uzantıyı tarayıcınıza yüklemek son derece basittir:

1.  Bu depodaki tüm kodları **ZIP** dosyası olarak indirin ve bir klasöre çıkartın (veya dosyaları bilgisayarınıza kaydedin).
2.  **Google Chrome** tarayıcınızı açın ve şu adrese gidin:
    ```text
    chrome://extensions/
    ```
3.  Sayfanın sağ üst köşesindeki **Geliştirici modu (Developer mode)** seçeneğini aktif hale getirin.
4.  Sol üstte çıkan **Paketlenmemiş öğe yükle (Load unpacked)** butonuna tıklayın.
5.  Dosyaları çıkarttığınız klasörü (içinde `manifest.json` olan klasör) seçin.
6.  Artık uzantınız kuruldu! TikTok'a gidip bir videonun yorumlarını açtığınızda sağ tarafta arama butonu belirecektir.

---

## 📂 Dosya Yapısı / File Structure

*   `manifest.json`: Uzantı yapılandırma dosyası.
*   `inject.js`: TikTok'un API isteklerini yakalayan arka plan scripti.
*   `content.js`: Arama arayüzünü (Shadow DOM), dilleri, filtrelemeyi ve kaydırmayı yöneten script.
*   `icon.png`: Uzantının simgesi.
