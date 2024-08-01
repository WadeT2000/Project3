/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const template = (id) => {return {activity_name: names(id), price: price(), address: `9218 NE 38th St, Yarrow Point, WA 98004`, participants: participants(), family_friendly: boo(1.3), restrictions: restrict(), dress_code: dress(), aquarium: boo(10), lodging: boo(), event_length: event(), security: sec()}}

const names = (id) => {
  const namesArray = [
    "Wade's Home Gym", "Dominick's Clubs", "Zach's closet", "Peterson's Public Bath House", "Jacob's \"Peaceful Protest\"",
    "DJ's Cyber Camp Hub", "Mike's TisBooked HQ", "Yang's \"Aquarium\" Aquarium", "Yang's \"Voodoo\" Aquarium", 
    "Yang's \"Dating Sim\" Aquarium", "Yang's \"Christian\" Aquarium", "Paintball", "Night Club", "Chucky Cheese", 
    "Dave and Busters", "Golden Corral", "Cinamark", "Ark of the Covenant", "Your local baseball team", "Dick's Diner", 
    "Waffle House", "Tammy's Tofu", "Rick's Biscuits", "Cool Ice Arena", "Royal Flush", "Pirate Bay", "Blue Robin", 
    "Morrowind", "Library of Congress"
  ];
  return namesArray[id % namesArray.length];
};

const price = () =>{
  return Math.floor(Math.random()*Math.random()*Math.random()*10000)
}
const participants = ()=>{
  var low = Math.ceil(Math.random()*2)
  var high = Math.ceil(Math.random()*30)+3
  return `Minimum participants: ${low} \n Maximum participants: ${high}`
}
const boo = (int)=> {
  const res = Math.round(Math.random()*int)
  return res > 1 ? true : false
}

const restrict = () =>{
  const options = [`No shoes, no service`, `BYOB`, `No inhalers`, `Service animals not allowed`, `Do not feed other patrons`, `Automatic weapons required`, `No harassing`, `No shirt, no service`, `Please keep hands and feet inside the venue at all times`, `Follow common hygiene practices`, `No fighting the inmates`, `Harassing mandatory`]
  let allrestrict = []
  if(Math.floor(Math.random()*2)>1){
    return `No restrictions`
  } else{
    restrictrecurs(options, allrestrict)
    return allrestrict
  }
}
const restrictrecurs = (options, allrestrict)=>{
  let buildrestrict = allrestrict
  const int = Math.floor(Math.random()*options.length)
  buildrestrict.push(options[int])
  if (Math.round(Math.random())) {
    restrictrecurs(options, buildrestrict)
  } else {
    return buildrestrict
  }
}
const dress = ()=>{
  const options = [`socks only`,`tuxedo`, `hat`, 'tie only', 'chaps', 'a full 3-piece-suit', 'birthday suit']
  if(Math.floor(Math.random()*3)>1){
    return `No dress requirements`
  } else{
    const int = Math.floor(Math.random()*options.length)
    return options[int]
  }
}
const event = ()=>{
  return Math.floor(Math.random()*Math.random()*Math.random()*100)
}
const sec = ()=>{
  const options = [`FBI`, `CIA`, `MP`, `KGB`, `Bouncers`, `NSA`, `Contracted Police`, `Popo`, `The Pope`, `Dominick`, `Dad`, `Paw Patrol`, `Alarm system`, `Mob boss guards`, `Mafia`, `Red tape`, `blue tape`, `Steve`, `Fence`, `John Madden`, `John Wick`, `Liam Neeson`, `Kevin McAlister`, `General Grievous`, `Two-Kids in a Trenchcoat`]
  return options[Math.floor(Math.random()*options.length)];
}



exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('activity_details').del();
  
  const data = Array.from({ length: 29 }, (_, index) => template(index));

  await knex('activity_details').insert(data);
};