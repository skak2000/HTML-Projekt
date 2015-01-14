var grunenhedEnhedsArray = [];// JavaScript Document

var grunEnhedObjekt;
var fraObjekt;
var tilfraObjekt;

Create();
Load();



function ReplaceText()
{	
	//$('span.ui-btn-text').text('A');
	
	//dex = div.getElementsByClassName("ui-btn-text");
	
}

function Replace()
{
	var position = document.getElementById("tilx").innerHTML;	
	var data = '<select id="skiftDataTil"> <option>Select unit</option></select>'; 
	position = data + position;
	
	document.getElementById("tilx").innerHTML = position;
}

function Load()
{
	var list = document.getElementById("testXY");
    
	for (i = 0; i < grunenhedEnhedsArray.length; i++) 
		{
			var option = document.createElement("option");
			option.text = grunenhedEnhedsArray[i].name;
    		list.add(option);	
		}
		SkiftEnhed();
		Calc();
}
		

function Clear()
{
	var selectx = document.getElementById("skiftDataTil");
	var length = selectx.options.length;
	
	for (i = 0; i < length; i++) 
	{		
		selectx.options[0] = null;
  		//selectx.options[0].childNodes.text.data = "Hej nr 2313";
	}
	
	var selectx = document.getElementById("skiftDataFra");
	var length = selectx.options.length;
	
	for (i = 0; i < length; i++) 
	{		
  		selectx.options[0] = null;
	}
}


function SkiftEnhed()
{
	Clear();
	var list = document.getElementById("testXY");	
	list.value;
	for (i = 0; i < grunenhedEnhedsArray.length; i++) 
	{		
		if(grunenhedEnhedsArray[i].name == list.value)
		{
			grunEnhedObjekt = grunenhedEnhedsArray[i];
			
			var fraListe = document.getElementById("skiftDataFra");
			var tilListe = document.getElementById("skiftDataTil");			
			
			
			for (o = 0; o < grunEnhedObjekt.enhedsListe.length; o++) 
			{					
				var option = document.createElement("option");
				option.text = grunEnhedObjekt.enhedsListe[o].name;
    			fraListe.add(option);
								
				option = document.createElement("option");
				option.text = grunEnhedObjekt.enhedsListe[o].name;
				tilListe.add(option);
			}	
			
			//$('div.box1 span').val("v1");
			//$('.id_100 option[value=val2]').attr('selected','selected');
			/*
			fraObjekt = grunEnhedObjekt.enhedsListe[0];
			tilObjekt = grunEnhedObjekt.enhedsListe[1];
			fraListe.selectedIndex = 0;
			tilListe.selectedIndex = 1;	*/	
			/*$("#skiftDataFra").empty();*/			
		}
	}	
}

function Calc()
{
	var inputFelt =  document.getElementById("inputTal");		
	var fra = document.getElementById("skiftDataFra");
	var til = document.getElementById("skiftDataTil");	
	var tilObjekt;
	var fraObjekt;
	
	for (o = 0; o < grunEnhedObjekt.enhedsListe.length; o++) 
			{	
			  if(grunEnhedObjekt.enhedsListe[o].name ==  fra.value)
			  {
				  fraObjekt = grunEnhedObjekt.enhedsListe[o];
			  }
			  
			  if(grunEnhedObjekt.enhedsListe[o].name ==  til.value)
			  {
				  tilObjekt = grunEnhedObjekt.enhedsListe[o];
			  }
			}
	
	
	var resultat = (tilObjekt.value/fraObjekt.value * inputFelt.value);
	
	
	
	
	document.getElementById("lblPrint").innerHTML = resultat;
}

$(document).ready(function() 
{
	
$('#testXY').change(function()
{	
	SkiftEnhed();	
	Calc();
}
);
		
$("#skiftDataFra" ).change(function()
{
	Calc();
}
);

$("#skiftDataTil" ).change(function()
{	
	Calc();	
}
);

$("#inputTal").bind("change paste keyup", function() {
       Calc(); 
    });

});

$("#btnClear" ).click(function(){
			
	var inputFelt =  document.getElementById("inputTal");
	inputFelt.value = "";
	
	
});



function Create()
{
	var enhed = new ClsGrundEnhed("Computer Data Storage");
	/*enhed.addClsEnhed("bit",8589934592,"bit");*/
	/*enhed.addClsEnhed("byte",1073741824,"B");*/
	enhed.addClsEnhed("kilobit",8388608,"Kbit");
	enhed.addClsEnhed("kilobyte",1048576,"KB");
	enhed.addClsEnhed("megabit",8192,"Mbit");
	enhed.addClsEnhed("megabyte",1024,"MB");
	enhed.addClsEnhed("gigabit",8,"Gbit");
	enhed.addClsEnhed("gigabyte",1,"GB");
	enhed.addClsEnhed("terabit",0.0078125,"Tbit");
	enhed.addClsEnhed("terabyte",0.0009765625,"TB");
	enhed.addClsEnhed("petabit",7.6293945E-06,"Pbit");
	enhed.addClsEnhed("petabyte",9.5367431640625E-07,"PB");
	grunenhedEnhedsArray.push(enhed);
	
	var enhed = new ClsGrundEnhed("Area");
	enhed.addClsEnhed("are",0.01,"a");
	enhed.addClsEnhed("barn",1E+28,"b");
	enhed.addClsEnhed("hectare",0.0001,"ha");
	enhed.addClsEnhed("homestead",1.5444086341698E-06,"homestead");
	enhed.addClsEnhed("rood",0.00098842152586866,"rood");
	enhed.addClsEnhed("square centimeter",10000,"cm²");
	enhed.addClsEnhed("square foot",10.76391041671,"ft²");
	enhed.addClsEnhed("square inch",1550.0031000062,"in²");
	enhed.addClsEnhed("square kilometer",1E-06,"km²");
	enhed.addClsEnhed("square meter",1,"m²");
	enhed.addClsEnhed("square mile",3.8610215854245E-07,"square mile");
	enhed.addClsEnhed("square millimeter",1000000,"mm²");
	enhed.addClsEnhed("square rod",0.039536861034746,"square rod");
	enhed.addClsEnhed("square yard",1.1959900463011,"yd²");
	enhed.addClsEnhed("township",1.0725059959512E-08,"twp");
	grunenhedEnhedsArray.push(enhed);
	
	var enhed = new ClsGrundEnhed("Weight");
	enhed.addClsEnhed("carat",5000,"metric");
	enhed.addClsEnhed("cental",0.022046226218488,"cental");
	enhed.addClsEnhed("centigram",100000,"centigram");
	enhed.addClsEnhed("dekagram",100,"dekagram");
	enhed.addClsEnhed("dram",564.38339119329,"dr");
	enhed.addClsEnhed("grain",15432.358352941,"gr");
	enhed.addClsEnhed("gram",1000,"g");
	enhed.addClsEnhed("hundredweight UK",0.019684130552221,"hw UK");
	enhed.addClsEnhed("kilogram",1,"kg");
	enhed.addClsEnhed("microgram",1000000000,"µg");
	enhed.addClsEnhed("milligram",1000000,"mg");
	enhed.addClsEnhed("newton",9.80665,"Earth");
	enhed.addClsEnhed("ounce",35.27396194958,"oz");
	enhed.addClsEnhed("pennyweight",643.01493137256,"dwt");
	enhed.addClsEnhed("pound",2.2046226218488,"lb");
	enhed.addClsEnhed("quarter",0.078736522208885,"quarter");
	enhed.addClsEnhed("stone",0.15747304441777,"stone");
	enhed.addClsEnhed("ton (UK, long)",0.00098420652761106,"ton (UK)");
	enhed.addClsEnhed("ton (US, short)",0.0011023113109244,"ton (US)");
	enhed.addClsEnhed("tonne",0.001,"t");
	enhed.addClsEnhed("troy ounce",32.150746568628," short");
	grunenhedEnhedsArray.push(enhed);
	
	var enhed = new ClsGrundEnhed("Volume");
	enhed.addClsEnhed("barrel - petroleum",6.2898107704321,"bbl, bo");
	enhed.addClsEnhed("bushel (UK)",27.496156037386,"bu");
	enhed.addClsEnhed("bushel (US dry)",28.377593258402,"bu");
	enhed.addClsEnhed("centiliter",100000,"cl");
	enhed.addClsEnhed("cubic centimeter",1000000,"cc, cm³");
	enhed.addClsEnhed("cubic decimeter",1000,"dm³");
	enhed.addClsEnhed("cubic foot",35.314666721489,"ft³, cu ft");
	enhed.addClsEnhed("cubic inch",61023.744094732,"in³, cu in");
	enhed.addClsEnhed("cubic meter",1,"m³");
	enhed.addClsEnhed("cubic millimeter",1000000000,"mm³");
	enhed.addClsEnhed("cubic yard",1.3079506193144,"yd³");
	enhed.addClsEnhed("dekaliter",100,"dal");
	enhed.addClsEnhed("fluid dram",270512.18161474,"fl dr");
	enhed.addClsEnhed("fluid ounce",33814.022701843,"fl oz");
	enhed.addClsEnhed("fluid ounce (UK)",35195.079727854,"fl oz");
	enhed.addClsEnhed("gallon (fluid)",264.17205235815,"gal");
	enhed.addClsEnhed("gallon (UK)",219.96924829909,"gal");
	enhed.addClsEnhed("gill",8453.5056754608,"gi");
	enhed.addClsEnhed("hectoliter",10,"hl");
	enhed.addClsEnhed("kiloliter",1,"kl");
	enhed.addClsEnhed("liter",1000,"l");
	enhed.addClsEnhed("microliter",1000000000,"µl");
	enhed.addClsEnhed("milliliter",1000000,"ml");
	enhed.addClsEnhed("minim",16230730.896885,"min");
	enhed.addClsEnhed("peck (US dry)",113.51037303361,"pk");
	enhed.addClsEnhed("pint (fluid)",2113.3764188652,"pt");
	enhed.addClsEnhed("pint (UK)",1759.7539863927,"pt");
	enhed.addClsEnhed("pint (US dry)",1816.1659685377,"pt");
	enhed.addClsEnhed("quart (fluid)",1056.6882094326,"qt");
	enhed.addClsEnhed("quart (UK)",879.87699319635,"qt");
	enhed.addClsEnhed("quart (US dry)",908.08298426886,"qt");
	grunenhedEnhedsArray.push(enhed);
}

function ClsGrundEnhed(grundEnhedsName)
{
	this.enhedsListe = [];
   	this.name 	= grundEnhedsName;

	
	this.addClsEnhed = function(name, kurs, forkortelse) 
  {
	  var clsEnhed = new ClsEnhed(forkortelse, name, kurs);	  
	  this.enhedsListe.push(clsEnhed);
  };
}


function ClsEnhed(forkortelse, name, value)
{
	this.forkortelse = forkortelse;
    this.name 	= 	name;
    this.value  =	value;		
}

