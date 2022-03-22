# Fullstack Project Group

Grupta yapılan çalışmalar, paylaşımlar ve haftalık projelerin yer almaktadır.

Nasıl göründüğüne bakın ...

![Weather Gif](assets/img/fulstack.gif)


## Yapılan Değişiklikler
- css klasörü içinde index.css, page.css ve cards.css dosyaları oluşturuldu.
- pages klasörü içindeki html dosyaları ve index.html dosyalarındaki style etiketleri kaldırıldı ve css klasörü içindeki css dosyaları kullanılarak `<link>` etiketiyle external css yöntemi uygulandı.
- english.html dosyası responsive olarak dönüştürüldü ve açılır kapanır sidebar oluşturuldu.
- js klasörü oluşturuldu ve index.js ve works.js dosyaları oluşturuldu.
- Haftalık projeleri gösteren sayfalar tek bir sayfada weeks.html içinde responsive ve dinamik bir yapıda oluşturuldu ve week-2.html ile week-3.html dosyalarındaki verileri daha dinamik bir yöntemle javascript nesnesi içerisinden okuyarak html elementleri oluşturup ekrana basan javascript metotları yazıldı ve weeks.html sayfası içerisinde bütün haftalar dinamik olarak seçilerek gösterilebilir hale getirildi.
- Bazı yerlerde pure css bazı yerlerde bootstrap framework kullanıldı.

## Veri Ekleme

- js klasörü içerisindeki works.js dosyasını açın ve içerisinde weeks dizisini bulun.
  
  `const weeks = [...]`

 - Hangi hafta içerisine verinizi ekleyecekseniz yorum satırını takip ederek ilgili haftayı bulun.
 - Buradaki nesnelerden bir tanesini kopyalayın ve en sona virgül ekleyerek yapıştırın.
  
    Example

   `const weeks = [... ,
   {
       
            "id":1,
            "name":"Orhan Nurullah",
            "username":"@orhanurullah",
            "projectName":"Weather APP",
            "repository":"https://github.com/orhanurullah/weather-app",
            "deployment":"aa",
            "description":"A weather app with react"
    }]`

- Nesne içerisindeki bilgileri kendi bilgilerinizle doğru ve eksiksiz bir şekilde değiştirin ve kaydedin. Daha sonra kendi verinizi weeks.html dosyasını tarayıcıda açtığınızda ilgili hafta içerisinde bulabileceksiniz.
  