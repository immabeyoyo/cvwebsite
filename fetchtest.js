import { supabase } from './supabase.js';

async function fetchVoornaamDataFromCVTable1() {
  try {
    const tableName = 'CVTable1';
    const columnName = '*';

    // Perform Supabase query to select the 'voornaam' column
    const { data, error } = await supabase
      .from(tableName)
      .select(columnName);

    console.log('Supabase Response:', { data, error });

    if (error) {
      throw error;
    }

    if (data && data.length > 0) {
      // Extract and log the 'voornaam' values
      const voornaamData = data.map(entry => entry[columnName]);
      console.log('Opgehaalde voornaam data:', voornaamData);
      return voornaamData;
    } else {
      console.log('No voornaam data found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching voornaam data:', error.message);
  }
}

// Call the function to fetch voornaam data
fetchVoornaamDataFromCVTable1();
