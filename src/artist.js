
//going to need to ajax or db this data var rarity = fs.readFileSync('json/rarity.json', 'utf8');
//now is the time to fetch retard
/*
fetch('json/rarity.json')
.then(response => response.json())
.then(data => console.log(data));
*/
const  gallery = document.getElementById("gallery");
const ov = document.getElementById("overlay");

getRarity = function(input){
    //I'm gonna have to get this live to test it out right
    console.log(input);
    fetch(`images/${input}`,{
        method: 'GET'
    })
    .then(response => response.blob())
    .then(imageBlob => {
        //this is a binary blob, I think I can use this for my metadata, right?
        return imageBlob;

    })

    
/*
https://liddlebit.com/slavettes/ (for now)
var es = png.readFileSync(`images/${input}.png`);
  //split it into chunks
  var elist = png.splitChunk(es);
holy fucking shit i just realized i cant use node modules
unless I have something running on the server 24/7 taking responses
that means the cli program is the perfect root for this
all it needs is the mint number
im going to use node correctly after all this

or somehow I will have to figure how to decode the images up front
*/
return input;
}

view = function (src){
    ov.style.display = "block";
    let content = document.createElement("div");
    /*
    let blob = getRarity(src);
    console.log(blob);
    */
    content.innerHTML = (`<p>hi</p>`);
    ov.appendChild(content).className = "ovdiv";

}
hideOL = function(){
    ov.style.display = "none";
}

makeRows = function(rows, cols) {
    gallery.style.setProperty('--grid-rows', rows);
    gallery.style.setProperty('--grid-cols', cols);
    var corrected = 0;
    for (c = 0; c < (333); c++) {
        let cell = document.createElement("div");
        cell.id = `item${c}`;
        let x = c + 1
        if (x<148){corrected = x + 1;}
        else if (x >= 148 && x < 332){corrected = x + 2;}
        else if (x == 332){corrected = 1;}
        else if (x == 333){corrected = 149;}
      cell.innerHTML = (`<img 
      src = \"images/${corrected}.png\" 
      alt=\"${corrected}.png\" 
      id = \"img${c}\" 
      class = \"full\"
      onclick=\"view(this.alt)\"
      >`);
      gallery.appendChild(cell).className = "grid-item";
    };
  };
  //going to find a better way to do this but it's what i have right now
  makeRows(56, 6);



