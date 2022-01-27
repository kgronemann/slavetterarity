
//going to need to ajax or db this data var rarity = fs.readFileSync('json/rarity.json', 'utf8');
//now is the time to fetch retard
/*
fetch('json/rarity.json')
.then(response => response.json())
.then(data => console.log(data));
*/
const  gallery = document.getElementById("gallery");
const ov = document.getElementById("overlay");
const drop = document.getElementById("view");
const sort = document.getElementById("sort");
const pgs = document.getElementById("pbuttons");

const rarity = [191,9,332,92,303,13,328,329,233,84,70,76,184,265,165,280,118,295,293,5,304,125,148,286,28,315,179,203,249,272,160,8,35,63,251,306,216,237,305,73,90,275,217,297,147,101,74,117,186,19,189,183,206,136,185,200,201,208,29,59,256,259,176,248,327,314,225,15,46,254,149,281,294,80,321,1,98,129,196,268,230,126,319,166,159,207,226,122,11,137,241,150,212,69,111,187,54,302,79,20,250,154,221,96,310,169,114,72,313,51,330,56,77,307,95,278,288,91,215,162,134,40,219,262,232,78,326,213,144,81,127,323,66,322,210,260,264,106,94,194,109,244,284,247,220,239,211,245,3,16,17,290,298,252,300,52,48,331,257,209,58,291,31,236,299,135,235,55,253,285,242,263,283,318,50,164,83,271,67,243,292,270,181,37,192,279,199,276,10,229,145,205,121,103,198,190,132,142,195,289,161,274,119,296,222,140,102,82,57,85,171,324,266,177,41,18,153,325,258,193,228,124,202,188,36,100,156,287,311,44,108,141,110,312,224,255,47,99,45,174,261,60,157,131,240,301,151,25,317,309,178,168,12,7,65,167,112,182,138,163,139,204,133,14,23,34,62,273,32,269,71,246,155,158,43,53,97,282,214,238,152,277,128,316,197,123,227,223,333,113,115,42,231,308,68,320,180,33,267,88,21,86,39,61,105,234,27,49,93,146,22,26,24,30,87,120,64,4,89,173,75,175,38,218,107,130,104,172,6,143,170,2,116]

isMobile = function() {
    var check = false;
    (function(a){
      if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) 
        check = true;
    })(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};
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
return input;
};

view = function (img, x, y){
        
    let content = document.createElement("div");
    content.className = "viewer"
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
    descolumn.className = "dsc";

    let pic = document.createElement("img");
    pic.src = "images/"+img.alt;

    pic.className="disp";
    imgcolumn.appendChild(pic);
    descolumn.innerHTML = (`<div class = \"galdesc\"><p class = \"gallery\">
                        Mint#: ${x}
                        Rarity#: ${y}
                        </p></div>`);
    tr.appendChild(imgcolumn);
    tr.appendChild(descolumn);
    table.appendChild(tr);
    content.appendChild(table);
    ov.appendChild(content).className = "ovdiv";
    ov.style.display = "block";

};
hideOL = function(){
    ov.style.display = "none";
    ov.innerHTML = "";
};
makeRows = function(rows, cols, page) {
    gallery.style.setProperty('--grid-rows', rows);
    gallery.style.setProperty('--grid-cols', cols);
    var corrected = 0;
    for (u = 0; u < (rows*cols); u++) {
        let cell = document.createElement("div");
        let poffset = ((page-1)*drop.value);
        let c = u + poffset;
        cell.id = `item${c}`;
        console.log(c);
        //indexOf(c) would find mint from rarity
        if (!(c>332)){
            if (sort.value == "mint"){
                var x = c + 1;
                var y = rarity[c];
            }else if (sort.value == "rarity"){
                var y = c + 1;
                var x = rarity.indexOf(y)+1;
            };
            if (x<148){corrected = x + 1;}
            else if (x >= 148 && x < 332){corrected = x + 2;}
            else if (x == 332){corrected = 1;}
            else if (x == 333){corrected = 149;}
            cell.innerHTML = (`<div height=\"85%\"><img 
            src = \"thumbs/thumb${corrected}.png\" 
            alt=\"${corrected}.png\" 
            id = \"img${c}\" 
            class = \"full\"
            onclick=\"view(this,${x},${y})\"
            ></div>`);
            cell.innerHTML += (`<div height=\"15%\"><p>
            Mint# ${x}</br>Rank# ${y}
            </p></div>`);
            gallery.appendChild(cell).className = "grid-item";
        };
    };
};

drawPagebuttons = function(pages){
    pgs.innerHTML = "";
    for (q = 0; q < pages; q++){
        pgs.innerHTML += `
        <button 
        value=\"${q+1}\"
        onclick=\"updateGallery(this.value)\"
        >
        ${q+1}
        </button>
        `
    }
return true;
};
updateGallery = function(val){
    gallery.innerHTML = "";
    let pages = Math.ceil(333/drop.value);
    drawPagebuttons(pages);
    if (isMobile()){
    var k = 3
    }else{
    var k = 9
    };
    makeRows(parseInt(drop.value)/k, k, val)
};
 
updateGallery(1);
  //console.log(isMobile());



