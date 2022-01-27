
//going to need to ajax or db this data var rarity = fs.readFileSync('json/rarity.json', 'utf8');
//now is the time to fetch retard
/*
fetch('json/rarity.json')
.then(response => response.json())
.then(data => console.log(data));
*/
const  gallery = document.getElementById("gallery");
const ov = document.getElementById("overlay");
let drop = document.getElementById("view");


getRarity = function(input){
    //I'm gonna have to get this live to test it out right
    console.log(input.src);
    //
    fetch(`images/${input.alt}`,{
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

view = function (img){
        
    let content = document.createElement("div");
        /*
        let src = img.src
        let blob = getRarity(img);
        console.log(blob);
        */
    let table = document.createElement("table");
    table.className = "viewer";
    
    let tr = document.createElement("tr");
    
    let imgcolumn = document.createElement("td");
    imgcolumn.className = "img";

    let descolumn = document.createElement("td");
    descolumn.className = "img";

    let pic = document.createElement("img");
    pic.src = "images/"+img.alt;

    pic.className="full";
    imgcolumn.appendChild(pic);
    descolumn.innerHTML = (`<p>hi</p>`);
    tr.appendChild(imgcolumn);
    tr.appendChild(descolumn);
    table.appendChild(tr);
    content.appendChild(table);
    ov.appendChild(content).className = "ovdiv";
    ov.style.display = "block";

}
hideOL = function(){
    ov.style.display = "none";
    ov.innerHTML = "";
}

makeRows = function(rows, cols) {
    gallery.style.setProperty('--grid-rows', rows);
    gallery.style.setProperty('--grid-cols', cols);
    var corrected = 0;
    for (c = 0; c < (rows*cols); c++) {
        let cell = document.createElement("div");
        cell.id = `item${c}`;
        let x = c + 1
        if (x<148){corrected = x + 1;}
        else if (x >= 148 && x < 332){corrected = x + 2;}
        else if (x == 332){corrected = 1;}
        else if (x == 333){corrected = 149;}
      cell.innerHTML = (`<img 
      src = \"thumbs/thumb${corrected}.png\" 
      alt=\"${corrected}.png\" 
      id = \"img${c}\" 
      class = \"full\"
      onclick=\"view(this)\"
      >`);
      gallery.appendChild(cell).className = "grid-item";
    };
  };
  updateGallery = function(){
    gallery.innerHTML = "";
    makeRows(parseInt(drop.value)/9, 9);
  }
 
  updateGallery();
  



