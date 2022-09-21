import Todo from "../components/Todo";

export default function Nearby() {
  return (
    <div>
      <h1 className="Heading">What to do Nearby</h1>
      <h2 className="SubHeading">Restaurants</h2>
      <Todo
        name="Pizza Union"
        image="static/image/pizza-union.jpg"
        alttext="Picture of restaurant Pizza Union"
        desc="A lovely itialian style pizza bar, Fire-Baked roman style pizza's, come in a variety 
        of thin and crispy 12inch and superfeast all day!"
        info="Address: 29 Leman St, London E1 8PT,
        Hours: Mon-Sun 11am-11pm"
      />
      <Todo
        name="Steak & Co"
        image="static\image\steak&co.jpg"
        alttext="Picture of the restaurant Steak & Co"
        desc="At Steak & Co, quality is out number 1 priority, we are proud of everything we do.
         All our suts are high quality from the farmlands and are directly sourced vino from the vineyards. 
         Exceptional service in london making us the perfect spot for you meal."
        info="Address: Square, 3-5 Irving Street Leicester
        Hours: Mon-Sat 10am-9pm"
      />
      <h2 className="SubHeading">Drinks</h2>
      <Todo
        name="Prosecco House"
        image="static/image/prosecco-house.png"
        alttext="Picture of the bar prosecco house"
        desc="Prosecco House is a specialised wine bar. 
        Prosecco House stocks DOCG Prosecco, the premium prosecco from Veneto, the home of the drink. 
        At Prosecco House you can taste 28 types of premium Prosecco, alongside wines, champagne, cocktails, 
        spirits and beers"
        info="Address:1 Crown Square One Tower Bridge
        Hours: Mon-Sat 11am-12pm"
      />
      <Todo
        name="Moonshine Saloon"
        image="static\image\moonshine-saloon.jpg"
        alttext="Picture of the bar moonshine saloon"
        desc="Behind the swinging doors, things are not exactly what they might seem
        Within the saloon, new outlaws can rub shoulders witht he locals, and try thier lucks at 
        cards/dice games or just simply enjoy a barrel load of cocktails."
        info="Address: 28-30 Houndsditch
        Hours: Mon-Sat 10am-12pm"
      />
      <h2 className="SubHeading">Attractions</h2>
      <Todo
        name="Tower Of London"
        image="static\image\tower-of-london.avif"
        alttext="Picture of the Tower of London"
        desc="The Tower of London, officially His Majesty's Royal Palace and Fortress of the Tower of London, 
        is a historic castle on the north bank of the River Thames in central London."
        info="Address:  London EC3N 4AB
        Hours: Mon-Sat 9am-5pm"
      />
      <Todo
        name="Bridge Theatre"
        image="static\image\bridge-theatre.jpg"
        alttext="Picture of Bridge Theatre"
        desc="New Theatre for London, with view of Tower Bridge this theatre features new plays and the occasional classic."
        info="Address: 3 Potters Flds Pk, London SE1 2SG
        Hours: Mon-Sat 12am-9pm"
      />
    </div>
  );
}
