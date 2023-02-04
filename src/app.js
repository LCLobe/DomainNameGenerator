/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  const renderParagraph = document.querySelector("#domains");
  renderParagraph.innerHTML = setTextArrayByLinesString(render());
};

function render() {
  const pronounArray = ["the", "our", "your", "every", "one", "such"];
  const adjArray = [
    "great",
    "big",
    "adventurous",
    "arrogant",
    "charming",
    "creepy",
    "grotesque",
    "hungry"
  ];
  const noumArray = ["jogger", "racoon", "sitcom", "lotus", "cubes", "planet"];
  const domainsArray = [".com", ".net", ".us", ".io", ".es", ".shop"];

  let domainName = "";
  let domainNameShort = "";
  let noumBackSearchPosition = 0;
  let noumShort = "";
  let ouputArray = [];

  for (let i = 0; i <= pronounArray.length - 1; i++) {
    for (let j = 0; j <= adjArray.length - 1; j++) {
      for (let k = 0; k <= noumArray.length - 1; k++) {
        for (let l = 0; l <= domainsArray.length - 1; l++) {
          //Compare domain with name:
          domainNameShort = domainsArray[l]
            .slice(1, domainsArray[l].length - 1)
            .toLowerCase();

          if (noumArray[k].length - domainNameShort.length > 0) {
            noumBackSearchPosition =
              noumArray[k].length - domainNameShort.length - 1;
          } else {
            noumBackSearchPosition = 0;
          }

          if (
            noumArray[k]
              .toLowerCase()
              .includes(domainNameShort, noumBackSearchPosition)
          ) {
            //Provide shorter noum:
            noumShort = noumArray[k].slice(0, noumBackSearchPosition);

            domainName =
              pronounArray[i] + adjArray[j] + noumShort + domainsArray[l];
            //console.log(domainName);
            ouputArray.push(domainName);
            continue;
          }
          domainName =
            pronounArray[i] + adjArray[j] + noumArray[k] + domainsArray[l];
          //console.log(domainName);
          ouputArray.push(domainName);
        }
      }
    }
  }
  return ouputArray;
}
//thegreatracoon.shop,thegreatsit.com,thegreatsitcom.net
function setTextArrayByLinesString(arrayOfDomains) {
  let stringBtLinesHTML = `This are your awesome <strong>${arrayOfDomains.length}</strong> results:`;

  for (let i = 0; i <= arrayOfDomains.length - 1; i++) {
    stringBtLinesHTML += "<br>";
    stringBtLinesHTML += arrayOfDomains[i];
  }

  return stringBtLinesHTML;
}
