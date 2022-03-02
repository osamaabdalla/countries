import { readFile } from 'fs/promises';
const countries = JSON.parse(
  await readFile(
    new URL('./countries.json', import.meta.url)
  )
);

// Getting parameters using default process.argv
var args = process.argv.slice(2);
// Check if no params passed
if(args.length === 0){
    console.error('Translation parameter is missing from the cli');
    process.exit();
}

var lang = args[0];
// Getting countries with the entered translations parameter
var filtered_countries = countries.filter(country => country.translations[lang]);
if(filtered_countries.length === 0){
  console.error('Translation key does not exist');
  process.exit();
}

// Printing countries official names with the entered translations
for (let index = 0; index < filtered_countries.length; index++) {
  const country = filtered_countries[index];
  console.log(country.translations[lang].official);
}

// Bye
process.exit();