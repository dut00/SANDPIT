
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<shiporder orderid="889923"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:noNamespaceSchemaLocation="shiporder.xsd">
  <orderperson>John Smith</orderperson>
  <shipto>
    <name>Ola Nordmann</name>
    <address>Langgt 23</address>
    <city>4000 Stavanger</city>
    <country>Norway</country>
  </shipto>
  <item>
    <title>Empire Burlesque</title>
    <note>Special Edition</note>
    <quantity>1</quantity>
    <price>10.90</price>
  </item>
  <item>
    <title>Hide your heart</title>
    <quantity>1</quantity>
    <price>9.90</price>
  </ite`;


let xml_length = xml.length;
console.log(xml_length);

let open = '';
let end = '';

let arr_open = [];

for (let i = 0; i < xml_length; i++) {
    if (xml[i]=='<'){
        i++;

        if(xml[i]==='?') {
            do {
                i++;
            } while (xml[i]==='>');
            continue;
        }

        while (xml[i]!==' ' && xml[i]!=='>') {
          open = open + xml[i++];
          // i++;
          if (i>=xml_length) break;
        }
        arr_open.push(open);
        // console.log(open);
        open = '';
    }

 }
console.log(arr_open);
// console.log(arr_open[0]);
// console.log('\/' + arr_open[1]);

// let arr_lenght = arr_open.length;
// let i = 0;
// do {
//   if (arr_open[i] === ('\/' + arr_open[i+1])){
//     arr_open = arr_open.splice(i,2);
//   }
//   i++;
// } while (i < arr_lenght);


let n = 0;
let arr_n = [];

arr_open.forEach(element => {
  if (!element.toString().startsWith('\/')){
    n++;
    arr_n.push(n);
  } else  {
    arr_n.push(n);
    n--;
  }
});

console.log(arr_n);

function closeTags(arr){
  if (!arr[0].startsWith('\/')){
    
  }
}