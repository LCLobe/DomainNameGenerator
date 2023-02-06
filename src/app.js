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
  let temporaryString = "";

  for (
    let pronoumIndex = 0;
    pronoumIndex < pronounArray.length;
    pronoumIndex++
  ) {
    for (let adjIndex = 0; adjIndex < adjArray.length; adjIndex++) {
      for (let noumIndex = 0; noumIndex < noumArray.length; noumIndex++) {
        for (
          let domainIndex = 0;
          domainIndex < domainsArray.length;
          domainIndex++
        ) {
          //Compare domain with name:
          domainNameShort = domainsArray[domainIndex].slice(1).toLowerCase();

          temporaryString = noumArray[noumIndex];
          if (temporaryString.endsWith(domainNameShort)) {
            //Provide shorter noum:

            noumShort = noumArray[noumIndex].slice(
              0,
              noumArray[noumIndex].length - domainNameShort.length
            );

            domainName =
              pronounArray[pronoumIndex] +
              adjArray[adjIndex] +
              noumShort +
              domainsArray[domainIndex];
            //console.log(domainName);
            ouputArray.push(domainName);
            continue;
          }
          domainName =
            pronounArray[pronoumIndex] +
            adjArray[adjIndex] +
            noumArray[noumIndex] +
            domainsArray[domainIndex];
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
    stringBtLinesHTML += `<p>${arrayOfDomains[i]}</p>`;
  }

  return stringBtLinesHTML;
}
