exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { name: 'SnoopyFan', password: 'WoodstockRock$2020' },
    { name: 'CharlieBrown', password: 'RedHairRock$2020' },
    { name: 'SallyBrown', password: 'LinusRock$2020' },
  ]);
};