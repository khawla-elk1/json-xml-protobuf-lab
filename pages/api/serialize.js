import fs from 'fs';
import path from 'path';
import xmljs from 'xml-js';
import { employeeData } from '../../lib/data';
// Importation du code généré par Protobuf
// In pages/api/serialize.js
import { EmployeeList } from '../../lib/employee_pb'; // Target import path
// Chemin pour sauvegarder les fichiers dans le dossier public
const outputDir = path.join(process.cwd(), 'public', 'serialized');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 1. Assurer que le répertoire de sortie existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    
  }

  const results = {};

  // --- Sérialisation JSON ---
  try {
    const jsonString = JSON.stringify({ employees: employeeData }, null, 2);
    const jsonPath = path.join(outputDir, 'employees.json');
    fs.writeFileSync(jsonPath, jsonString);
    results.json = { 
      size: fs.statSync(jsonPath).size, 
      fileName: 'employees.json' 
    };
  } catch (error) {
    console.error("JSON Error:", error);
    results.json = { error: "Failed to serialize JSON" };
  }

  // --- Sérialisation XML ---
  try {
    const xmlData = {
      _declaration: { _attributes: { version: '1.0', encoding: 'utf-8' } },
      EmployeeList: {
        Employee: employeeData.map(emp => ({
          id: { _text: emp.id },
          name: { _text: emp.name },
          department: { _text: emp.department },
          salary: { _text: emp.salary }
        }))
      }
    };
    const xmlString = xmljs.js2xml(xmlData, { compact: true, spaces: 2 });
    const xmlPath = path.join(outputDir, 'employees.xml');
    fs.writeFileSync(xmlPath, xmlString);
    results.xml = { 
      size: fs.statSync(xmlPath).size, 
      fileName: 'employees.xml' 
    };
  } catch (error) {
    console.error("XML Error:", error);
    results.xml = { error: "Failed to serialize XML" };
  }

  // --- Sérialisation Protobuf ---
  try {
    // 1. Créer une instance du message EmployeeList
    const message = EmployeeList.create({ employees: employeeData });

    // 2. Encoder le message en un buffer binaire (Uint8Array)
    const buffer = EmployeeList.encode(message).finish();

    const protoPath = path.join(outputDir, 'employees.bin');
    fs.writeFileSync(protoPath, buffer);
    results.protobuf = { 
      size: fs.statSync(protoPath).size, 
      fileName: 'employees.bin' 
    };
  } catch (error) {
    console.error("Protobuf Error:", error);
    results.protobuf = { error: "Failed to serialize Protobuf" };
  }
  
  // 3. Retourner les résultats
  res.status(200).json(results);
}