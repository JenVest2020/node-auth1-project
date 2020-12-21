exports.seed = function (knex, Promise) {
  return knex('users').insert([
    { username: 'SnoopyFan', password: 'WoodstockRock$2020' },
    { username: 'CharlieBrown', password: 'RedHairRock$2020' },
    { username: 'SallyBrown', password: 'LinusRock$2020' },
  ]);
};