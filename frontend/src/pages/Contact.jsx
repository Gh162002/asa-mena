import { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', organisation: '', sujet: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await axios.post('/api/contact', form);
      setStatus({ type: 'success', msg: res.data.message });
      setForm({ nom: '', email: '', organisation: '', sujet: '', message: '' });
    } catch {
      setStatus({ type: 'error', msg: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setSending(false);
    }
  };

  const inputStyle = { width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: '1.5px solid #d1d5db', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' };

  return (
    <div style={{ paddingTop: '80px' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--vert), #1e3d2a)', padding: '4rem 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', marginBottom: '1rem' }}>Nous joindre</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>Contact</h1>
        </div>
      </section>

      <section style={{ padding: '5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Info */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.8rem', color: 'var(--brun)', marginBottom: '1rem' }}>Entrons en contact</h2>
            <div style={{ width: 50, height: 3, background: 'var(--ocre)', marginBottom: '1.5rem' }} />
            <p style={{ color: 'var(--gris)', lineHeight: 1.9, marginBottom: '2rem' }}>
              L'Alliance est un espace ouvert et inclusif. Que vous soyez une organisation de la société civile, un mouvement paysan, un·e chercheur·e ou un individu engagé, n'hésitez pas à nous contacter.
            </p>
            {[
              ['📧', 'Email', 'contact@asa-mena.org'],
              ['🌍', 'Région', 'MENA – 13 pays membres'],
              ['🗣️', 'Langues', 'Arabe · Français · Anglais'],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', padding: '1rem', background: 'var(--vert-pale)', borderRadius: '8px' }}>
                <span style={{ fontSize: '1.5rem' }}>{icon}</span>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--brun)', fontSize: '0.9rem' }}>{label}</div>
                  <div style={{ color: 'var(--gris)', fontSize: '0.9rem' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ background: 'white', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.5rem', color: 'var(--brun)', marginBottom: '1.5rem' }}>Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '0.4rem' }}>Nom complet *</label>
                  <input name="nom" value={form.nom} onChange={handleChange} required style={inputStyle} placeholder="Votre nom" onFocus={e => e.target.style.borderColor = 'var(--vert)'} onBlur={e => e.target.style.borderColor = '#d1d5db'} />
                </div>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '0.4rem' }}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="votre@email.com" onFocus={e => e.target.style.borderColor = 'var(--vert)'} onBlur={e => e.target.style.borderColor = '#d1d5db'} />
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '0.4rem' }}>Organisation / Structure</label>
                <input name="organisation" value={form.organisation} onChange={handleChange} style={inputStyle} placeholder="Votre organisation (optionnel)" onFocus={e => e.target.style.borderColor = 'var(--vert)'} onBlur={e => e.target.style.borderColor = '#d1d5db'} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '0.4rem' }}>Sujet *</label>
                <select name="sujet" value={form.sujet} onChange={handleChange} required style={{ ...inputStyle, background: 'white' }} onFocus={e => e.target.style.borderColor = 'var(--vert)'} onBlur={e => e.target.style.borderColor = '#d1d5db'}>
                  <option value="">Choisir un sujet</option>
                  <option>Adhésion / Rejoindre l'Alliance</option>
                  <option>Partenariat</option>
                  <option>Information générale</option>
                  <option>Presse / Médias</option>
                  <option>Autre</option>
                </select>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: 500, color: '#374151', display: 'block', marginBottom: '0.4rem' }}>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Votre message..." onFocus={e => e.target.style.borderColor = 'var(--vert)'} onBlur={e => e.target.style.borderColor = '#d1d5db'} />
              </div>
              {status && (
                <div style={{ padding: '0.85rem 1rem', borderRadius: '6px', marginBottom: '1rem', background: status.type === 'success' ? '#d1fae5' : '#fee2e2', color: status.type === 'success' ? '#065f46' : '#991b1b', fontSize: '0.9rem' }}>
                  {status.type === 'success' ? '✅' : '❌'} {status.msg}
                </div>
              )}
              <button type="submit" disabled={sending} className="btn-primary" style={{ width: '100%', fontSize: '1rem', padding: '0.9rem', opacity: sending ? 0.7 : 1 }}>
                {sending ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
