import { supabase } from './supabase.js';

// Haal de data op van tabel CVTable1
async function fetchDataFromCVTable1() {
  try {
    // Geef aan welke naam en zet die in de const tableName
    const tabelNaam = 'CVTable1';

    // Doe een request aan supabase
    const { data, error } = await supabase
      .from(tabelNaam) // De gekozen tabel
      .select('voornaam'); // Hier kies je welke colommen je wilt selecteren

    if (error) {
      throw error;
    }

    console.log('Opgehaalde data: ', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchDataFromCVTable1();
