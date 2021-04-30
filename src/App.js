/*
1-bu haftaki görevimiz bir kullanıcı kayıt formu hazırlamansı. 
2-Kullanıcı formu içerisinde (Ad, Soyad, Cinsiyet, Dogum Tarihi, E-mail, Şifre, Hakkımda) kişi bilgilerinin bulunması gerekiyor. 
3-Verilen url üzerinden bu formu veritabanımıza kayıt etmenizi istiyoruz.
4-Sayfayi ikiye bölüp, sol tarafta kisi bilgi formu sag tarafta ise girilen kisilerin listesi olacak.
5-Kisi listesi her zaman BACKEND-URL'den alinacak.
6-Databaseden bilgi alamak için GET ve bilgi göndermek için POST request ini kullanmamız gerekiyor.
*/

import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Tables from "./components/List";
import Forms from "./components/Form";
function App() {
  return (
    
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Tables />
        </Route>
        <Route path="/Register">
          <Forms />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
