import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import GroupesTravail, { GroupeDetail } from './pages/GroupesTravail';
import Thematiques from './pages/Thematiques';
import Activites from './pages/Activites';
import PaysMembres from './pages/PaysMembres';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/groupes" element={<GroupesTravail />} />
          <Route path="/groupes/:slug" element={<GroupeDetail />} />
          <Route path="/thematiques" element={<Thematiques />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/pays-membres" element={<PaysMembres />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
