import {supabase} from './supabase.js'


const user = supabase.auth.user;

if (user) {
  // User is logged in
  console.log('User is logged in:', user);
} else {
  // User is not logged in
  console.log('User is not logged in');
}

function toIndex() {
    window.location.href = 'cvkiezen.html';
}
