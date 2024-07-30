/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

//co

const template = () => {return {name: 'rowValue1', description: 'very cool', beach: boo(), mountain: boo(), forest: boo(), downtown: boo(), countryside: boo(), suburbia: boo(), meal: boo(), entertainment: boo(), social: boo(), before_sunrise: boo(), late_morning: boo(), noon: boo(), afternoon: boo(), evening: boo(), night: boo()}}

const boo = () => {
  //let number = Math.round(Math.random())
  return Math.round(Math.random()) == 1 ? true : false
}
const randDesc = ['very cool', 'much wow', 'many amaze', 'such recommend', 'many great', 'such so']
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activities').del()
  await knex('activities').insert([
    {name: 'Wade\'s Home Gym', description: 'Very shitty home gym located in his garage. $500 for a day pass (not worth it)', beach: false, mountain: false, forest: false, downtown: false, countryside: false, suburbia: true, meal: false, entertainment: true, social: true, before_sunrise: false, late_morning: false, noon: true, afternoon: true, evening: true, night: false},
    {name: 'Dominick\'s Clubs', description: 'Very tidy. He cleans 4x a year', beach: false, mountain: true, forest: true, downtown: true, countryside: false, suburbia: false, meal: true, entertainment: true, social: false, before_sunrise: true, late_morning: true, noon: false, afternoon: false, evening: false, night: true},
    {name: 'Zach\'s closet', description: 'Rumor says he\'s still in there', beach: true, mountain: false, forest: true, downtown: false, countryside: false, suburbia: false, meal: true, entertainment: true, social: false, before_sunrise: true, late_morning: false, noon: false, afternoon: false, evening: true, night: true},
    {name: 'Peterson\'s Public Bath House', description: 'Don\'t go in there', beach: true, mountain: true, forest: true, downtown: false, countryside: false, suburbia: true, meal: false, entertainment: true, social: true, before_sunrise: true, late_morning: true, noon: true, afternoon: true, evening: true, night: true},
    {name: 'Jacob\'s "Peaceful Protest"', description: 'Definitely not going to be a riot or looting', beach: true, mountain: true, forest: true, downtown: true, countryside: true, suburbia: true, meal: false, entertainment: true, social: true, before_sunrise: false, late_morning: true, noon: true, afternoon: true, evening: true, night: true},
    {name: 'DJ\'s Cyber Camp Hub', description: 'Definately not just a call center', beach: false, mountain: false, forest: false, downtown: true, countryside: false, suburbia: false, meal: false, entertainment: false, social: true, before_sunrise: true, late_morning: true, noon: true, afternoon: true, evening: true, night: true},
    {name: 'Mike\' TisBooked HQ', description: 'Not Travelocity', beach: boo(), mountain: boo(), forest: boo(), downtown: boo(), countryside: boo(), suburbia: boo(), meal: boo(), entertainment: boo(), social: boo(), before_sunrise: boo(), late_morning: boo(), noon: boo(), afternoon: boo(), evening: boo(), night: boo()},
    {name: 'Yang\'s "Aquarium" Aquarium', description: 'Just an aquarium, "No guilt involved whatsoever"', beach: boo(), mountain: boo(), forest: boo(), downtown: boo(), countryside: boo(), suburbia: boo(), meal: boo(), entertainment: boo(), social: boo(), before_sunrise: boo(), late_morning: boo(), noon: boo(), afternoon: boo(), evening: boo(), night: boo()},
    {...template(), name: 'Yang\'s "Voodoo" Aquariam', description: '???????????'},
    {...template(), name: 'Yang\'s "Dating Sim" Aquarium', description: 'Lots of tentacles here'},
    {...template(), name: 'Yang\'s "Christian" Aquarium', description: 'Not alot of tentacles here, just a pinch of guilt'},
    {...template(), name: "Paintball", description: 'Local paintball arena where you can shoot you friends without catching a felony'},
    {...template(), name: "Night Club", description: 'Black listed for military member for too many felonies being issued from this fine establishment. Otherwise a nice night life activity for drinking and dancing'},
    {...template(), name: "Chucky Cheese", description: 'Arcade'},
    {...template(), name: "Dave and Busters", description: 'More expensive Arcade'},
    {...template(), name: "Golden Corral", description: 'Totally healthy food for the typical american'},
    {...template(), name: "Cinamark", description: 'Movie theater'},
    {...template(), name: "Ark of the Covenant", description: 'Totally legit and not a fake made by David Blaine'},
    {...template(), name: "Your local baseball team", description: 'Let\'s go brandon!'},
    {...template(), name: "Dick\'s Diner", description: 'Dinner'},
    {...template(), name: "Waffle House", description: 'Eat some waffles for cheap and get into a fight for free'},
    {...template(), name: "Tammy\'s Tofu", description: 'Taco Tuesday'},
    {...template(), name: "Rick\'s Biscuits", description: 'Biscuit Time!'},
    {...template(), name: "Cool Ice Arena", description: 'Ice skating, Hockey, Figure skating, swim lessons (Olympic level)'},
    {...template(), name: "Royal Flush", description: 'Toilet Store'},
    {...template(), name: "Pirate Bay", description: 'Children\'s Amusement park'},
    {...template(), name: "Blue Robin", description: 'Made in Bangladesh'},
    {...template(), name: "Morrowind", description: 'don\'t touch the red rocks'},
    {...template(), name: "Library of Congress", description: 'Library'}
  ]);
};
