import { supabase } from './supabase.js'

try {
  let { data: CVTable1, error } = await supabase
      .from('CVTable1')
      .select('*');

  if (error) {
      console.error('Error fetching data:', error);
  } else {
      // Assuming CVTable1 is an array of objects, you can format and display it in the dataContainer
      const dataContainer = document.getElementById('dataContainer');
      
      // Clear previous content in the container
      dataContainer.innerHTML = '';

      // Iterate over the data and create HTML elements for each entry
      CVTable1.forEach(item => {
          const listItem = document.createElement('div');
          listItem.textContent = JSON.stringify(item);
          dataContainer.appendChild(listItem);
      });
  }
} catch (err) {
  console.error('An error occurred:', err);
}
