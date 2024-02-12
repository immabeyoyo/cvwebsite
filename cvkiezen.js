import {supabase} from './supabase.js'



let chosenCV = "";

document.getElementsByClassName("hoi").addEventListener("click", sendImageToSupa)

async function sendImageToSupa() {
// Veronderstel dat je een afbeelding hebt in de variabele "image" en dat je SupabaseClient hebt geïnitialiseerd.

// Upload de afbeelding naar Storage
const { data, error } = await supabase.storage.from('bucket_name').upload('image_name', image);

if (error) {
    console.error('Error uploading image:', error.message);
    return;
}

// Krijg de URL van de geüploade afbeelding
const imageUrl = data.url;

// Sla de URL van de afbeelding op in de database
const { data: insertData, error: insertError } = await supabase
  .from('images')
  .insert([{ image_url: imageUrl }]);
  
if (insertError) { 
    console.error('Error inserting image URL into database:', insertError.message);
    return;
}

console.log('Image URL inserted into database:', imageUrl);

}


chosenCV = cv;
alert(cv + " is gekozen!");

document.getElementById("Kies1").addEventListener("click", function() {
  kiesCV("cv1");
});

document.getElementById("Kies2").addEventListener("click", function() {
  kiesCV("cv2");
});

document.getElementById("Kies3").addEventListener("click", function() {
  kiesCV("cv3");
});
