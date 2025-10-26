const laws = {
  alabama: { name : "Alabama", ageOfConsent: 16, hasExemption: true, closeInAge: 2, minAgeForExemption: 14 },
  alaska: {name : "Alaska", ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 13 },
  arizona: { name:"Arizona", ageOfConsent: 18, hasExemption: false},
  arkansas: { name:"Arkansas",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 14 },
  california: { name:"California",ageOfConsent: 18, hasExemption: false },
  colorado: { name:"Colorado",ageOfConsent: 17, hasExemption: true, closeInAge: 4, minAgeForExemption: 15 },
  connecticut: { name:"Connecticut",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 13 },
  delaware: { name:"Delaware",ageOfConsent: 18, hasExemption: true, closeInAge: 3, minAgeForExemption: 16 },
  florida: { name:"Florida",ageOfConsent: 18, hasExemption: true, closeInAge: 4, minAgeForExemption: 16 },
  georgia: { name:"Georgia",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  hawaii: { name:"Hawaii",ageOfConsent: 16, hasExemption: true, closeInAge: 5, minAgeForExemption: 14 },
  idaho: { name:"Idaho",ageOfConsent: 18, hasExemption: true, closeInAge: 3, minAgeForExemption: 16 },
  illinois: { name:"Illinois",ageOfConsent: 17, hasExemption: true, closeInAge: 5, minAgeForExemption: 13 },
  indiana: { name:"Indiana",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  iowa: { name:"Iowa",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  kansas: { name:"Kansas",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  kentucky: { name:"Kentucky",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  louisiana: { name:"Louisiana",ageOfConsent: 17, hasExemption: true, closeInAge: 3, minAgeForExemption: 15 },
  maine: { name:"Maine",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  maryland: { name:"Maryland",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  massachusetts: { name:"Massachusetts",ageOfConsent: 16, hasExemption: false},
  michigan: { name:"Michigan",ageOfConsent: 16, hasExemption: true, closeInAge: 5, minAgeForExemption: 13 },
  minnesota: { name:"Minnesota",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 13 },
  mississippi: { name:"Mississippi",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 14 },
  missouri: { name:"Missouri",ageOfConsent: 17, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  montana: { name:"Montana",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  nebraska: { name:"Nebraska",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 14 },
  nevada: { name:"Nevada",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  new_hampshire: { name:"New Hampshire",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 13 },
  new_jersey: { name:"New Jersey",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 13 },
  new_mexico: { name:"New Mexico",ageOfConsent: 17, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  new_york: { name:"New York",ageOfConsent: 17, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  north_carolina: { name:"North Carolina",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  north_dakota: { name:"North Dakota",ageOfConsent: 18, hasExemption: true, closeInAge: 3, minAgeForExemption: 15 },
  ohio: { name:"Ohio",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 13 },
  Oklahoma: { name:"Oklahoma",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 14 },
  oregon: { name:"Oregon",ageOfConsent: 18, hasExemption: true, closeInAge: 3, minAgeForExemption: 16 },
  pennsylvania: { name:"Pennsylvania",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 13 },
  rhode_island: { name:"Rhode Island",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  south_carolina: { name:"South Carolina",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  south_dakota: { name:"South Dakota",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 14 },
  tennessee: {name:"Tennessee",ageOfConsent: 18, hasExemption: true, closeInAge: 4, minAgeForExemption: 16 },
  texas: { name:"Texas",ageOfConsent: 17, hasExemption: true, closeInAge: 3, minAgeForExemption: 14 },
  utah: { name:"Utah",ageOfConsent: 18, hasExemption: true, closeInAge: 3, minAgeForExemption: 16 },
  vermont: { name:"Vermont",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 13 },
  virginia: { name:"Virginia",ageOfConsent: 18, hasExemption: true, closeInAge: 3, minAgeForExemption: 15 },
  washington: { name:"Washington",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  west_virginia: { name:"West Virginia",ageOfConsent: 16, hasExemption: true, closeInAge: 4, minAgeForExemption: 14 },
  wisconsin: { name:"Wisconsin",ageOfConsent: 18, hasExemption: false},
  wyoming: { name:"Wyoming",ageOfConsent: 16, hasExemption: true, closeInAge: 3, minAgeForExemption: 13 }
};

function calculate(){
    let rules = [];
    let state = document.getElementById("state").value.toLowerCase();
    const ageI = Number(document.getElementById("ageI").value);
    const ageII = Number(document.getElementById("ageII").value);
    const higher = Math.max(ageI, ageII);
    const lower = Math.min(ageI, ageII);
    state = state.replace(" ", "_");
    const law = laws[state];
    let isLegal="Illegal:("
    if (state==""||ageI==""||ageII==""){
        isLegal = "*Please fill all required fields";
    }
    else if (!law) {
        isLegal = "Error: State not found";
    }
    else if (isNaN(ageI)||isNaN(ageII)||ageI<0||ageII<0){
        isLegal = "Error: Invalid age";
    }
    else if (
    (
    lower >= law.ageOfConsent || // both above or equal to age of consent
    (
      law.hasExemption &&         // has a Romeo & Juliet exemption
      higher - lower <= law.closeInAge &&        // within allowed age gap
      lower < law.ageOfConsent    // but younger partner still under consent age
    )
    )
    && lower >= law.minAgeForExemption // younger partner not below exemption limit
    ){
        isLegal="Legal :)"
    }
    else if (!law.hasExemption&&lower>=law.ageOfConsent){
        isLegal="Legal :)"
    }

    // Display the result on the webpage
    const container = document.getElementById("container");
    
    // Check if result paragraph already exists
    let resultPara = document.getElementById("result");
    if (!resultPara) {
        resultPara = document.createElement("p");
        resultPara.id = "result";
        container.appendChild(resultPara);
    }
    resultPara.textContent = isLegal;

    const rulesUL = document.getElementById("rules");
    //Printing rules
    if (law){
    rulesUL.innerHTML = ""; // clear previous rules

    rules.push("The relationship must be consensual.");
    rules.push("Neither person can be a registered sex offender or in a position of authority over the other (such as a teacher, coach, or guardian).");
    rules.push(`The age of consent is ${law.ageOfConsent}.`);

    if (law.hasExemption) {
        rules.push(`The older person must be no more than ${law.closeInAge} years older than the younger person (applies if the younger person is under the age of consent).`);
        rules.push(`The younger person must be at least ${law.minAgeForExemption} years old to participate in sexual activity (even if the other person is also a minor).`);
    }
    else{
        rules.push("There are no close-in-age exemptions, so any sexual activity under the age of consent is technically illegal.")
    }
    // Add each rule as a list item
    rules.forEach(ruleText => {
        const li = document.createElement("li");
        li.textContent = ruleText;
        rulesUL.appendChild(li);
    });

    let fixedSubtitle = document.getElementById("addStateName");
    if (!fixedSubtitle) {
        fixedSubtitle = document.createElement("h3");
        fixedSubtitle.id = "addStateName";
        container.appendChild(fixedSubtitle);
    }
    // Update subtitle text with state name
    fixedSubtitle.textContent = `${law.name} Laws Reference:`;
}

    //sound effects
    if (isLegal == "Illegal:(") {
        //const audio = new Audio("downer_noise.mp3"); // replace with your file path
        const audio = new Audio("studio-audience-awwww-sound-fx.mp3");
        audio.play();
    }
    else if (isLegal == "Legal :)"){
        const audio = new Audio("children-saying-yay-praise-and-worship-jesus-299607.mp3"); // replace with your file path
        audio.play();
    }
}