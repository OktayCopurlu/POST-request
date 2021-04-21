/*
1-bu haftaki görevimiz bir kullanıcı kayıt formu hazırlamansı. 
2-Kullanıcı formu içerisinde (Ad, Soyad, Cinsiyet, Dogum Tarihi, E-mail, Şifre, Hakkımda) kişi bilgilerinin bulunması gerekiyor. 
3-Verilen url üzerinden bu formu veritabanımıza kayıt etmenizi istiyoruz.
4-Sayfayi ikiye bölüp, sol tarafta kisi bilgi formu sag tarafta ise girilen kisilerin listesi olacak.
5-Kisi listesi her zaman BACKEND-URL'den alinacak.
6-Databaseden bilgi alamak için GET ve bilgi göndermek için POST request ini kullanmamız gerekiyor.
*/

import "./App.css";
import Tables from "./components/table";
import Forms from "./api/form";

function App() {
  return (
    <div className="App">
      {/* POST request */}
      <Forms/>

      {/* GET request */}
      <Tables/>
    </div>
  );
}

export default App;
