import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Material = () => {
  const [code, setCode] = useState('');
  const [marque, setMarque] = useState('');
  const [dateDebut, setDateDebut] = useState('');
  const [categorie, setCategorie] = useState('');
  const [data, showData] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    showData({ code, marque, dateDebut, categorie });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ajouter un Matériel</h1>
      <form onSubmit={handleSubmit} className="border p-4 rounded shadow">
        <div className="form-group">
          <label>Code:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Code..."
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Marque:</label>
          <select
            className="form-control"
            value={marque}
            onChange={(e) => setMarque(e.target.value)}
          >
            <option value="">Select Marque...</option>
            <option value="Hp">Hp</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Dell">Dell</option>
          </select>
        </div>
        <div className="form-group">
          <label>Date début:</label>
          <input
            type="date"
            className="form-control"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Categorie:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Categorie..."
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Confirmer</button>
      </form>

      {data && (
        <div className="mt-4">
          <h2>Recapitulatif des informations:</h2>
          <ul className="list-group">
            <li className="list-group-item"><strong>Code:</strong> {data.code}</li>
            <li className="list-group-item"><strong>Marque:</strong> {data.marque}</li>
            <li className="list-group-item"><strong>Date début:</strong> {data.dateDebut}</li>
            <li className="list-group-item"><strong>Categorie:</strong> {data.categorie}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Material;
