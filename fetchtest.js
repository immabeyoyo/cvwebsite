import { supabase } from './supabase.js' // Importeer de key en url van supabase

try {
  let { data: CVTable1, error } = await supabase
      .from('CVTable1') // Van welke tabel wil je het selecteren
      .select('*'); // Welke column?

  if (error) {
      console.error('Error fetching data:', error); // Gooit een error in de console als hij data niet kan ophalen
  } else {
      // Als hij de data wel kan ophalen, zet het dan in de div met de id dataContainer.
      const dataContainer = document.getElementById('dataContainer');
      
      // Als er al iets in de container is haal het dan weg.
      dataContainer.innerHTML = '';

      // Een loop die over elk item in de column gaat, convert dan de data uit de CVTable1 array naar een JSON string en er dan een div van maakt en die div in de dataContainer div zet.
      CVTable1.forEach(item => {
          const listItem = document.createElement('div');
          listItem.textContent = JSON.stringify(item);
          dataContainer.appendChild(listItem);
      });
  }
} catch (err) {
  console.error('An error occurred:', err); // Als er een error is in deze try functie, dan kom het bericht: An error occured: in de console.
}
