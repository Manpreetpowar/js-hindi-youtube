const marval_heros = ["thor", "ironman", "spiderman"];

const dc_heros = ["superman", "flash", "batman"];

// marval_heros.push(dc_heros);

// console.log(marval_heros);

// const all_heros = marval_heros.concat(dc_heros);
// const all_new_heros = [...marval_heros, ...dc_heros];
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(2);
console.log(real_another_array);