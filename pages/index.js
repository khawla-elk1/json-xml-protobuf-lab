import { useState } from 'react';

export default function Home() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSerialize = async () => {
    setLoading(true);
    setResults(null);
    setError(null);
    
    try {
      // 1. Appel API pour la sérialisation
      const response = await fetch('/api/serialize', {
        method: 'POST',
      });

      if (!response.ok) {
        // Tente de lire le message d'erreur du body si l'API le fournit
        const errorText = await response.text();
        throw new Error(`Erreur ${response.status} lors de la sérialisation : ${errorText}`);
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getComparisonText = (jsonSize, protoSize) => {
    if (jsonSize && protoSize) {
      const difference = jsonSize - protoSize;
      const percentage = ((difference / jsonSize) * 100).toFixed(2);
      
      if (difference > 0) {
          return `Protobuf est **${difference} octets** plus petit, soit une réduction de **${percentage}%** par rapport à JSON.`;
      } else if (difference < 0) {
          return `Protobuf est **${Math.abs(difference)} octets** plus grand que JSON.`;
      } else {
          return "Protobuf et JSON ont la même taille.";
      }
    }
    return "Les données de taille ne sont pas disponibles pour la comparaison.";
  };

  return (
    <div className="container">
      <header>
        <h1>🔬 Labo de Sérialisation</h1>
        <p>
          Ce labo compare la taille d'une liste d'employés sérialisée en **JSON**, **XML** et **Protobuf** (Binaire). Les fichiers sont sauvegardés sur le serveur pour inspection.
        </p>
      </header>
      
      <button 
        onClick={handleSerialize} 
        disabled={loading} 
        className="primary-button"
      >
        {loading ? '⏳ Sérialisation en cours...' : '🚀 Exécuter la Sérialisation et la Sauvegarde'}
      </button>

      {error && (
        <div className="error-message">
          <p>🛑 Erreur: {error}</p>
        </div>
      )}

      {results && (
        <div className="results-panel">
          <h2>Résultats de la Comparaison de Taille</h2>
          
          {/* Table de comparaison */}
          <table>
            <thead>
              <tr>
                <th>Format</th>
                <th>Taille du Fichier (Octets)</th>
                <th>Lien de Téléchargement</th>
              </tr>
            </thead>
            <tbody>
              {/* JSON Row */}
              <tr className="json-row">
                <td>**JSON**</td>
                <td>**{results.json?.size}**</td>
                <td>
                  <a href={`/serialized/${results.json?.fileName}`} target="_blank" rel="noopener noreferrer">
                    {results.json?.fileName}
                  </a>
                </td>
              </tr>
              {/* XML Row */}
              <tr className="xml-row">
                <td>**XML**</td>
                <td>**{results.xml?.size}**</td>
                <td>
                  <a href={`/serialized/${results.xml?.fileName}`} target="_blank" rel="noopener noreferrer">
                    {results.xml?.fileName}
                  </a>
                </td>
              </tr>
              {/* Protobuf Row (Highlight) */}
              <tr className="protobuf-row">
                <td>**Protobuf (Binaire)**</td>
                <td>**{results.protobuf?.size}**</td>
                <td>
                  <a href={`/serialized/${results.protobuf?.fileName}`} target="_blank" rel="noopener noreferrer">
                    {results.protobuf?.fileName}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          
          {/* Conclusion */}
          <div className="conclusion-card">
            <h3>⚖️ Conclusion Protobuf vs. JSON</h3>
            <p dangerouslySetInnerHTML={{ __html: getComparisonText(results.json?.size, results.protobuf?.size) }} />
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx global>{`
        body { 
          margin: 0; 
          background: #f4f7f9; 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
      `}</style>

      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 30px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        header h1 {
          color: #333;
          border-bottom: 2px solid #0070f3;
          padding-bottom: 10px;
          margin-top: 0;
        }

        header p {
          color: #555;
          line-height: 1.6;
        }

        /* --- Bouton --- */
        .primary-button {
          padding: 12px 25px;
          font-size: 16px;
          cursor: pointer;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 6px;
          transition: background-color 0.2s, transform 0.1s;
          margin-bottom: 30px;
        }

        .primary-button:hover:not(:disabled) {
          background-color: #005bb5;
        }

        .primary-button:disabled {
          background-color: #a0c4f8;
          cursor: not-allowed;
        }

        /* --- Messages d'état --- */
        .error-message {
          color: #d93025;
          background: #fde8e7;
          border: 1px solid #d93025;
          padding: 15px;
          border-radius: 6px;
          margin-top: 20px;
        }
        
        .results-panel h2 {
            color: #333;
            margin-top: 30px;
        }

        /* --- Tableau de Résultats --- */
        table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin-top: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden; /* Important pour les coins arrondis */
        }

        th, td {
          padding: 15px;
          text-align: left;
        }

        th {
          background-color: #0070f3;
          color: white;
          font-weight: 600;
        }
        
        tr:nth-child(even) {
            background-color: #f8f8f8;
        }
        
        tr:hover {
            background-color: #f0f0f0;
        }

        /* Ligne Protobuf mise en évidence */
        .protobuf-row {
            background-color: #e6ffe6; /* Vert clair */
            font-weight: bold;
        }
        
        .protobuf-row:hover {
            background-color: #d4fcd4;
        }

        td a {
          color: #0070f3;
          text-decoration: none;
          font-weight: 500;
        }

        td a:hover {
          text-decoration: underline;
        }
        
        /* --- Carte de Conclusion --- */
        .conclusion-card {
            margin-top: 40px;
            padding: 20px;
            background-color: #f0f8ff; /* Bleu très clair */
            border-left: 5px solid #0070f3;
            border-radius: 8px;
        }
        
        .conclusion-card h3 {
            color: #0070f3;
            margin-top: 0;
            margin-bottom: 10px;
        }
        
        .conclusion-card p {
            font-size: 1.1em;
            color: #333;
        }
        
        /* Assurer que le style de gras est appliqué dans le paragraphe généré */
        .conclusion-card p :global(strong) {
            color: #005bb5;
        }
      `}</style>
    </div>
  );
}