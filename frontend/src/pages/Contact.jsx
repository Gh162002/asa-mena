import { useState } from 'react';
import emailjs from '@emailjs/browser';

// ─── EmailJS config ────────────────────────────────────────────────────────
// Ces valeurs sont publiques (côté client) — elles ne donnent accès qu'à
// l'envoi d'email, pas à votre compte complet.
// À récupérer sur https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_xxxxxxx';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'xxxxxxxxxxxxxxxxxxxx';

const inputBase = { width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1.5px solid #dde2e8', fontSize: '0.95rem', fontFamily: 'Inter, sans-serif', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', boxSizing: 'border-box', background: '#fafafa', color: 'var(--texte)' };
const labelStyle = { fontSize: '0.85rem', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '0.45rem' };

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <label style={labelStyle}>{label}{required && <span style={{ color: 'var(--ocre)', marginLeft: 2 }}>*</span>}</label>
      {children}
    </div>
  );
}

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
      // Envoi via EmailJS (directement depuis le navigateur → Gmail)
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    form.nom,
          from_email:   form.email,
          organisation: form.organisation || 'Non renseignée',
          subject:      form.sujet,
          message:      form.message,
          reply_to:     form.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus({ type: 'success', msg: 'Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.' });
      setForm({ nom: '', email: '', organisation: '', sujet: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus({ type: 'error', msg: 'Une erreur est survenue. Veuillez réessayer ou nous écrire directement à fsalliancemena@gmail.com' });
    } finally {
      setSending(false);
    }
  };

  const focusStyle = e => { e.target.style.borderColor = 'var(--vert)'; e.target.style.boxShadow = '0 0 0 3px rgba(61,107,79,0.12)'; e.target.style.background = 'white'; };
  const blurStyle = e => { e.target.style.borderColor = '#dde2e8'; e.target.style.boxShadow = 'none'; e.target.style.background = '#fafafa'; };

  return (
    <div style={{ paddingTop: '80px', background: 'var(--blanc)' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #1a3326 0%, #2d5a3d 55%, #3d6b4f 100%)', padding: '6rem 0 5rem', color: 'white', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,147,58,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(90,143,110,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.07) 1.5px, transparent 1.5px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(200,147,58,0.25)', border: '1px solid rgba(200,147,58,0.4)', color: '#f5d08a', padding: '0.35rem 1.1rem', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Nous joindre</div>
          <h1 style={{ fontFamily: 'Playfair Display', fontSize: 'clamp(2rem,5vw,3.4rem)', maxWidth: 560, lineHeight: 1.2, marginBottom: '1.25rem' }}>Entrons en contact</h1>
          <p style={{ opacity: 0.82, maxWidth: 520, lineHeight: 1.85, fontSize: '1rem' }}>L'Alliance est un espace ouvert et inclusif. Toute organisation ou personne engagée pour la souveraineté alimentaire est la bienvenue.</p>
        </div>
      </section>

      {/* Wave */}
      <div style={{ lineHeight: 0, background: '#1a3326' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="var(--blanc)" />
        </svg>
      </div>

      {/* ── MAIN ── */}
      <section style={{ padding: '5rem 0 6rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3.5rem', alignItems: 'start', maxWidth: 1100, margin: '0 auto' }}>

          {/* ─ Info ─ */}
          <div>
            <h2 style={{ fontFamily: 'Playfair Display', fontSize: '1.9rem', color: 'var(--brun)', marginBottom: '0.5rem' }}>Informations de contact</h2>
            <div style={{ width: 60, height: 3, background: 'var(--ocre)', borderRadius: 2, marginBottom: '1.75rem' }} />
            <p style={{ color: 'var(--gris)', lineHeight: 1.9, marginBottom: '2.5rem', fontSize: '0.97rem' }}>Que vous soyez une organisation de la société civile, un mouvement paysan, un·e chercheur·e ou un individu engagé, n'hésitez pas à nous contacter.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: '📧', label: 'Email', val: 'fsalliancemena@gmail.com', color: '#3d6b4f', bg: 'var(--vert-pale)' },
                { icon: '🌍', label: 'Région', val: 'MENA – 13 pays membres', color: '#c8933a', bg: 'var(--ocre-pale)' },
                { icon: '🗣️', label: 'Langues', val: 'Arabe · Français · Anglais', color: '#5c3d1e', bg: '#f5ede4' },
              ].map(({ icon, label, val, color, bg }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem 1.5rem', borderRadius: '14px', background: bg, border: `1px solid ${color}22`, transition: 'transform 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = `0 4px 16px ${color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                  <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'white', boxShadow: `0 2px 8px ${color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color, fontSize: '0.8rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{label}</div>
                    <div style={{ color: 'var(--texte)', fontSize: '0.95rem', fontWeight: 500 }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2.5rem', padding: '1.75rem', borderLeft: '4px solid var(--vert)', background: 'var(--vert-pale)', borderRadius: '0 12px 12px 0' }}>
              <p style={{ fontStyle: 'italic', fontFamily: 'Playfair Display', color: 'var(--brun)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>"Un cadre collectif ouvert et inclusif, pour des systèmes alimentaires justes et durables dans la région MENA."</p>
            </div>
          </div>

          {/* ─ Form ─ */}
          <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', boxShadow: '0 8px 40px rgba(0,0,0,0.09)', border: '1px solid #f0f0f0' }}>
            <h3 style={{ fontFamily: 'Playfair Display', fontSize: '1.6rem', color: 'var(--brun)', marginBottom: '0.4rem' }}>Envoyez-nous un message</h3>
            <div style={{ width: 50, height: 3, background: 'var(--ocre)', borderRadius: 2, marginBottom: '2rem' }} />
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <Field label="Nom complet" required>
                  <input name="nom" value={form.nom} onChange={handleChange} required style={inputBase} placeholder="Votre nom" onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
                <Field label="Email" required>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputBase} placeholder="votre@email.com" onFocus={focusStyle} onBlur={blurStyle} />
                </Field>
              </div>
              <Field label="Organisation / Structure">
                <input name="organisation" value={form.organisation} onChange={handleChange} style={inputBase} placeholder="Votre organisation (optionnel)" onFocus={focusStyle} onBlur={blurStyle} />
              </Field>
              <Field label="Sujet" required>
                <select name="sujet" value={form.sujet} onChange={handleChange} required style={{ ...inputBase, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236b7280' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }} onFocus={focusStyle} onBlur={blurStyle}>
                  <option value="">Choisir un sujet</option>
                  <option>Adhésion / Rejoindre l'Alliance</option>
                  <option>Partenariat</option>
                  <option>Information générale</option>
                  <option>Presse / Médias</option>
                  <option>Autre</option>
                </select>
              </Field>
              <Field label="Message" required>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} style={{ ...inputBase, resize: 'vertical', lineHeight: 1.7 }} placeholder="Votre message..." onFocus={focusStyle} onBlur={blurStyle} />
              </Field>
              {status && (
                <div style={{ padding: '1rem 1.25rem', borderRadius: '10px', marginBottom: '1.25rem', background: status.type === 'success' ? '#d1fae5' : '#fee2e2', color: status.type === 'success' ? '#065f46' : '#991b1b', fontSize: '0.9rem', border: `1px solid ${status.type === 'success' ? '#6ee7b7' : '#fca5a5'}`, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span>{status.type === 'success' ? '✅' : '❌'}</span><span>{status.msg}</span>
                </div>
              )}
              <button type="submit" disabled={sending} style={{ width: '100%', fontSize: '1rem', padding: '1rem', borderRadius: '10px', background: sending ? 'var(--vert-clair)' : 'var(--vert)', color: 'white', border: 'none', cursor: sending ? 'not-allowed' : 'pointer', fontWeight: 600, fontFamily: 'Inter, sans-serif', letterSpacing: '0.02em', transition: 'background 0.2s', opacity: sending ? 0.8 : 1 }}
                onMouseEnter={e => { if (!sending) e.currentTarget.style.background = 'var(--brun)'; }}
                onMouseLeave={e => { if (!sending) e.currentTarget.style.background = 'var(--vert)'; }}>
                {sending ? '⏳ Envoi en cours...' : 'Envoyer le message →'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
