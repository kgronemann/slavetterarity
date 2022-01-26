//This simple program reads PNG metadata from Slavettes
//you must 'npm install png-metadata'
var png = require('png-metadata');
var fs = require('fs');
//var excel = require('excel4node');
//var workbook = new excel.Workbook();

var rarity = fs.readFileSync('json/rarity.json', 'utf8');
//var request = require('request');
var parseRarity = JSON.parse(rarity);


const readline = require("readline");
//const { excelColor } = require('excel4node/distribution/lib/types');
var cli = {};
cli.getRarity = function(input){
  var es = png.readFileSync(`images/${input}.png`);
  //split it into chunks
  var elist = png.splitChunk(es);
  //pop the lid
  var iend = elist.pop();

  //"fdata" here is your full metadata with the PNG chunk wrapper
  var fdata = elist.pop();

  //In order to retrieve our data we must parse our imbedded data packet 
  var parseData = JSON.parse(fdata.data);

  //This will print only your saved metadata
  console.log(parseData);

  //This is how you would just print the attributes and their value
  var overallRarity = 1.00;
  var returnal = [];
  for (x = 0; x < parseData.attributes.length; x++){
    //console.log(`${parseData.attributes[x].trait_type}: ${parseData.attributes[x].value}`);
    var trait = parseData.attributes[x].trait_type;
    var value = parseData.attributes[x].value;
    //console.log(parseRarity[trait]);
    for (i = 0; i < parseRarity[trait].length; i++){
      if (parseRarity[trait][i]["trait"] == value){
        //console.log(`${value}`);
        //console.log(`${parseRarity[trait][i]["occurrence"]}`);
        var occ = parseRarity[trait][i]["occurrence"];
        var sub = occ.substring(occ.indexOf('(')+1,occ.indexOf('%'));
        //console.log(sub);
        overallRarity = overallRarity * (parseFloat(sub)/100);
        returnal.push({"attr":value, "val":parseFloat(sub)});
      }
    }
  }
  return([overallRarity*1000000000,returnal]);

}

cli.init = function(){
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  

  var loop = 0;
  var max = 333;
  var arrayOfInputs = [];
  cli.getUserInput = function(){
    //var worksheet = workbook.addWorksheet('Sheet 1');
    rl.question("Enter Mint # ", function (answer) {
      var input = parseInt(answer);
      var corrected = 0;
      
      
      //while (loop < max)
      
      if(input > 0 && input < 334){
        if (input<148){
          corrected = input + 1;
          
        }
        else if (input >= 148 && input < 332){
          corrected = input + 2;
          
        }
        else if (input == 332){
          corrected = 1;
          
        }
        else if (input == 333){
          corrected = 149;
          
        }
        else{
          console.log("unable to get number")
        }

        
        var rare = cli.getRarity(corrected);
        var score = rare[0];
        var val2 = rare[1];
        //console.log(val2);
        
        arrayOfInputs.push([{"mint":input, "gen":corrected, "rarity":score}]);
        /*
        worksheet.cell(input,1).number(input);
        worksheet.cell(input,2).number(corrected);
        var offset = 0;
        for (k = 0; k < val2.length; k++){
          //console.log("hi");
          
          worksheet.cell(input,3+offset).string(val2[k].attr);
          worksheet.cell(input,4+offset).number(val2[k].val);
          offset+=2;
        }
        worksheet.cell(input,25).number(score);
        */
        loop++;
        //input++;
        if (loop < max){
        cli.getUserInput();
        }
        
        
        
      }else{
       console.log("out of range")
       loop = max;
       
      }
    
    //console.log(arrayOfInputs);
    //workbook.write('Excel.xlsx');
    });

  };
  cli.getUserInput();
};
cli.init()
