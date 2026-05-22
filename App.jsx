import React, { useState, useEffect } from 'react';

// --- PAKISTAN CITIES CHILD COMPONENTS ---

const IslamabadCity = () => (
  <div style={styles.card}>
    <img src="https://picsum.photos/id/1044/400/250" alt="Islamabad" style={styles.cardImage} />
    <div style={styles.cardBody}>
      <span style={styles.badge}>Step 1 • 2s</span>
      <h3 style={styles.cardTitle}>Islamabad</h3>
      <p style={styles.cardText}>The capital city, known for its lush green hills, structured layouts, and the iconic Faisal Mosque.</p>
    </div>
  </div>
);

const LahoreCity = () => (
  <div style={styles.card}>
    <img src="https://picsum.photos/id/1029/400/250" alt="Lahore" style={styles.cardImage} />
    <div style={styles.cardBody}>
      <span style={styles.badge}>Step 2 • 4s</span>
      <h3 style={styles.cardTitle}>Lahore</h3>
      <p style={styles.cardText}>The cultural heart of Pakistan, famous for its rich Mughal history, vibrant food street, and lively spirit.</p>
    </div>
  </div>
);

const KarachiCity = () => (
  <div style={styles.card}>
    <img src="https://picsum.photos/id/1041/400/250" alt="Karachi" style={styles.cardImage} />
    <div style={styles.cardBody}>
      <span style={styles.badge}>Step 3 • 6s</span>
      <h3 style={styles.cardTitle}>Karachi</h3>
      <p style={styles.cardText}>The city of lights and economic hub, located on the Arabian Sea coast, known for its fast-paced life.</p>
    </div>
  </div>
);

const PeshawarCity = () => (
  <div style={styles.card}>
    <img src="https://picsum.photos/id/1053/400/250" alt="Peshawar" style={styles.cardImage} />
    <div style={styles.cardBody}>
      <span style={styles.badge}>Step 4 • 8s</span>
      <h3 style={styles.cardTitle}>Peshawar</h3>
      <p style={styles.cardText}>One of the oldest living cities in South Asia, rich in history, famous for the historic Qissa Khwani Bazaar.</p>
    </div>
  </div>
);

const QuettaCity = () => (
  <div style={styles.card}>
    <img src="https://picsum.photos/id/1068/400/250" alt="Quetta" style={styles.cardImage} />
    <div style={styles.cardBody}>
      <span style={styles.badge}>Step 5 • 10s</span>
      <h3 style={styles.cardTitle}>Quetta</h3>
      <p style={styles.cardText}>The fruit orchard of Pakistan, nestled inside a ring of rugged mountains, famous for its cold winters.</p>
    </div>
  </div>
);


// --- MAIN APP COMPONENT ---

export default function App() {
  // Tracks how many city components are currently allowed to be visible
  const [visibleCount, setVisibleCount] = useState(0);
  const totalComponents = 5;

  useEffect(() => {
    // Stop setting intervals once all 5 cities are displayed
    if (visibleCount >= totalComponents) return;

    // Set up a repeating timer that fires every 2000ms (2 seconds break)
    const interval = setInterval(() => {
      setVisibleCount((prevCount) => prevCount + 1);
    }, 2000);

    // Clean up interval on unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [visibleCount]); 

  return (
    <div style={styles.appContainer}>
      {/* Dynamic Title for Friend's Project */}
      <header style={styles.header}>
        <h1 style={styles.mainTitle}>Urban Landscapes of Pakistan</h1>
        <p style={styles.subtitle}>
          Discover the major cities of Pakistan loading one by one with a sequential 2-second interval break.
        </p>
        <div style={styles.progressTracker}>
          Explored: <strong>{visibleCount}</strong> of {totalComponents} Cities
        </div>
      </header>

      <hr style={styles.divider} />

      {/* Grid Layout for Displaying Cities */}
      <main style={styles.grid}>
        {visibleCount >= 1 && <IslamabadCity />}
        {visibleCount >= 2 && <LahoreCity />}
        {visibleCount >= 3 && <KarachiCity />}
        {visibleCount >= 4 && <PeshawarCity />}
        {visibleCount >= 5 && <QuettaCity />}
      </main>

      {/* Processing Status Block */}
      {visibleCount < totalComponents && (
        <div style={styles.statusBox}>
          <div style={styles.pulseDot}></div>
          <span>Loading next city profiles...</span>
        </div>
      )}
    </div>
  );
}


// --- MODERN CLEAN STYLES ---

const styles = {
  appContainer: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#f1f5f9', // Slightly different background tone for variety
    minHeight: '100vh',
    padding: '50px 20px',
    color: '#0f172a',
  },
  header: {
    textAlign: 'center',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
  },
  mainTitle: {
    fontSize: '2.6rem',
    fontWeight: '800',
    color: '#0f172a',
    margin: '0 0 12px 0',
    letterSpacing: '-0.025em',
  },
  subtitle: {
    fontSize: '1.1rem',
    color: '#475569',
    lineHeight: '1.5',
    margin: '0 0 20px 0',
  },
  progressTracker: {
    display: 'inline-block',
    backgroundColor: '#cbd5e1',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '0.9rem',
    color: '#1e293b',
  },
  divider: {
    border: '0',
    borderTop: '1px solid #cbd5e1',
    maxWidth: '1200px',
    margin: '0 auto 40px auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    animation: 'slideUpFade 0.5s ease-out forwards',
  },
  cardImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    backgroundColor: '#94a3b8',
  },
  cardBody: {
    padding: '20px',
    flexGrow: 1,
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#f1f5f9',
    color: '#475569',
    fontSize: '0.75rem',
    fontWeight: '600',
    padding: '3px 8px',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: '0 0 8px 0',
    color: '#0f172a',
  },
  cardText: {
    fontSize: '0.9rem',
    color: '#475569',
    lineHeight: '1.5',
    margin: 0,
  },
  statusBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    marginTop: '50px',
    color: '#475569',
    fontSize: '0.95rem',
  },
  pulseDot: {
    width: '10px',
    height: '10px',
    backgroundColor: '#10b981', // Emerald green tone for loading accent distinction
    borderRadius: '50%',
    animation: 'pulse 1.5s infinite ease-in-out',
  },
};

// Global CSS animation injector
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = `
    @keyframes slideUpFade {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0%, 100% { transform: scale(0.8); opacity: 0.5; }
      50% { transform: scale(1.2); opacity: 1; }
    }
  `;
  document.head.appendChild(styleSheet);
}