import { supabase } from './supabase.js';

  try {
    let { data: CVTable1, error } = await supabase
    .from('CVTable1')
    .select('*')

  if (error) {
    console.error('Error met data ophalen', error);
  } else {
    const dataContainer = document.getElementById('div1');

    dataContainer.innerHTML = '';

    CVTable1.forEach(item => {
      const listItem = document.createElement('div');
      listItem.textContent = JSON.stringify(item);
      dataContainer.appendChild(listItem);
    });
  }
  } catch (err) {
    console.error('An error occurred:', err);
  }
