var allReps = [
  // {
  //   identification:"AUTO ADDED DO NOT ADD",
  //   name: "",
  //   age: "",
  //   county: "",
  //   state: "",
  //   photoSrc: "AUTO ADDED DO NOT ADD",
  //   repreZent: "AUTO ADDED DO NOT ADD",
  //   contact:
  //     {
  //     website: "",
  //     x: "",
  //     instagram: "",
  //     tiktok: ""
  //   },
  //   bio:""
  //]
  // },
  // {
  //   identification: "AUTO ADDED DO NOT ADD",
  //   name: "Phoebe the Cat",
  //   age: ".3",
  //   county: "Orange County",
  //   state: "California",
  //   photoSrc: "AUTO ADDED DO NOT ADD",
  //   repreZent: "AUTO ADDED DO NOT ADD",
  //   contact: {
  //     website: "google.com",
  //     x: "phoebex",
  //     instagram: "phoebegram",
  //     tiktok: "phoebetok",
  //     facebook: "phoebebook",
  //   },
  //   bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet congue lectus. Mauris nunc ligula, bibendum eget consectetur id, aliquet at libero. Pellentesque porttitor congue dui eu fringilla. Pellentesque venenatis ligula nec rutrum porta. Sed non mauris sed libero tempor convallis. Cras tincidunt bibendum blandit. Mauris in dolor nec magna elementum aliquam. Maecenas sagittis ultricies pretium. Proin at neque in nisl vestibulum fringilla in vitae orci. Suspendisse maximus ac elit vitae pulvinar. Curabitur accumsan eros non turpis efficitur, interdum malesuada purus dictum. Nulla nisi nibh, fringilla sit amet leo ut, porttitor fermentum ligula.",
  // },

  {name:'Alex Lee',identification:'alexlee',age:'29',county:'Alameda/Santa Clara',state:'California',seat:'California State Assembly District 24',photoSrc:'',repreZent:'TRUE',contact:{website:'https://www.votealexlee.com',x:'alex_lee',instagram:'alex_lee',tiktok:'votealexlee',facebook:'votealexlee'},bio:'Alex Lee is a 29 year old Asian American legislator running for California State Assembly District 24. As an incumbent who was the first openly elected bisexual legislator in California history, Alex Lee stands for housing reform, environmental safety, and electoral reform. In his tenure, Alex authored three social housing bills to realize social housing as a human right, created an environmental justice advisory committee for marginalized communities disproportionately impacted by pesticides, and authored several campaign financing reform bills to ban the excessive influence of corporate money in politics. If reelected, he is dedicated to continuing his fight for the families and workers in his district and his work in creating healthcare, housing, and education for all.'},
  {name:'Austin Bruckner Carillo',identification:'austinbrucknercarillo',age:'30',county:'Alameda',state:'California',seat:'LA County Supervisor of District 5',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.Brucknercarrillo.com',x:'abc4husd',instagram:'abc4husd',tiktok:'',facebook:'austin.bruckner.9'},bio:'Austin Bruckner Carillo is a 30 year old Commissioner on his city’s Community Services Commission. As a young man raised in a Puerto Rican Italian family household who is passionate about his community, Austin’s top priority if elected to the school board is to address the high truancy and low graduation rates. In addition, Austin is passionate about fortifying ctitical mental health services, protecting children from domestic violence, and encouraging student activism. If elected, Austin would put students first to ensure each student gets the opportunity to complete their education safely, happily, and with all needed support.'},
  {name:'Hector Marin',identification:'hectormarin',age:'26',county:'Santa Cruz',state:'California',seat:'Santa Cruz City Council District 2',photoSrc:'',repreZent:'TRUE',contact:{website:'https://www.hectorforsantacruz.com',x:'',instagram:'hectorforsantacruz',tiktok:'hectorforsantacruz',facebook:'hectorforsantacruz'},bio:'Hector Marin is a 26 year old 2021 Graduate from UC Santa Cruz running for Santa Cruz City Council, District 2. As a young person of color who has a history of working with and building solidarity with unions and community members, Hector is passionate about affordable, inclusive housing, county-wide equity frameworks, and bringing a community-centered approach to politics. If elected, Hector would work to pass an ordinance to organize neighborhood councils and neighborhood affordability plans and create new, accessible homes, rent existing homes at affordable rates, and pool home equity to finance new homes. Additionally, he would partner with UCSC and the City in expanding housing for students. Along with these housing policies, Hector would ensure the environment is central to all discussions of policy to equitably maximize very low-income housing for tenants, working class folx, and the youth.'},
  {name:'Ibraheem Samirah',identification:'ibraheemsamirah',age:'33',county:'Loudoun County',state:'Virginia',seat:'US House of Representatives',photoSrc:'',repreZent:'FALSE',contact:{website:'',x:'IbraheemSamirah',instagram:'del.ibraheemsamirah',tiktok:'',facebook:'DelegateIbraheemSamirah'},bio:'Ibraheem Samirah is a 33 year old first generation U.S. citizen, born to Jordanian-Palestinian immigrant parents. He is running for Congress to fight for a Green New Deal, Medicare for All, and a justice-oriented foreign policy that leaves nobody behind. Given what’s happening in Gaza right now, Ibraheem passionately believes that the US needs fighters who will stand up to the foreign policy establishment and deliver solutions that center the plight of the Palestinian people. Having previously served Loudoun County in the House of Delegates, Ibraheem would prioritize the climate crisis, education, and the movement for a permanent ceasefire in Gaza.'},
  {name:'Jennifer Esteen',identification:'jenniferesteen',age:'44',county:'Alameda County',state:'California',seat:'Alameda County Board of Supervisors District 4',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.jenniferesteen.com/',x:'Esteen4CA',instagram:'esteen4ca',tiktok:'esteen4ca',facebook:'Esteen4ca'},bio:'Jennifer Esteen is a 44 union represented nurse, a working mother, and a gay Black woman. While working in Psych Emergency Services, Jennifer witnessed how patients struggled to acquire proper care due to lack of funding. She fought alongside residents of General Hospital’s Behavioral Health Center to save 41 permanent mental health beds in their Adult Residential Facility. Now, she manages a $1 billion dollar budget for the county’s healthcare system and has worked on securing an additional 20 beds for mental health patients. She also serves on the Eden Area Municipal Advisory Council which gives her insight into what county residents need in terms of housing. If elected, Jennifer would look to secure funding for the development of affordable housing, as well as providing meaningful care for the unhoused folx in Alameda. She would also look to expand job training for youth and returning citizens through partnering with unions and community organizations to prevent reincarceration of community. Jennifer will also continue advocating for the county’s residents to have the right to safe and affordable healthcare by prioritizing community-based preventive care. '},
  {name:'Joe Thompson',identification:'joethompson',age:'21',county:'5th District',state:'California',seat:'Santa Cruz Ciy Council District 5',photoSrc:'',repreZent:'TRUE',contact:{website:'https://votejoethompson.com/',x:'JoeThompsonCA',instagram:'JoeThompsonCA',tiktok:'JoeThompsonCA',facebook:'JoeThompsonCA'},bio:'Joe Thompson is a 21 year old student at UCSC running for Santa Cruz City Council to represent district 5. In 2021, they helped organize and file the first union petition in the state of California for a Starbucks. Since then, they have continued advocating for workers rights. They currently work for SEIU Local 1021, organizing Starbucks and Peets locations in Northern California. If elected, Joe will fight to expand options for low-income housing by redeveloping sites, unused plots, as well as pushing policies that will ensure developers pay their fair share to benefit the community. They believe in combating climate change and would push for such policy to be a top priority of the city’s. Joe will also continue to advocate for Santa Cruz workers by expanding educational resources to inform folkx about topics such as wage theft, misclassification, and other unfair labor practices. They will also work on bringing forward a Project Labor Agreement.'},
  {name:'Qasim Rashid',identification:'qasimrashid',age:'42',county:'11th District',state:'Illinois',seat:'US Congress in Illinois 11th District',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.qasimrashid.com',x:'qasimrashid',instagram:'qasimrashid',tiktok:'qasim.rashid',facebook:'qasimrashid'},bio:'Qasim Rashid is a 42 year old human rights lawyer, Pakistanian immigrant, and author running for US Congress in Illinois’ 11th District. Qasim is passionate about combatting the climate crisis, protecting workers rights, holding billionaire corporations accountable, and expanding access to health care. If elected, Qasim would fight for debt-free college and trade schools so that people can get the training they need to build their careers, expand Medicare into guaranteed universal healthcare for all people in the country, and support legislation to end Citizens United and prohibit companies from buying their way into the political process. Additionally, he is passionate about fully funding USCIS to meet the demand of American families seeking to ensure their loved ones can immigrate to the United States safely, quickly, and in a documented manner, and supporting the Women’s Health Protection Act of 2023, which would immediately overturn abortion bans nationwide.'}
];


//adding photo sources and identifications
for (let i = 0; i < allReps.length; i++) {
  //☀️Photos HAVE to be the name + jpg!!
  allReps[i].identification = allReps[i].name.replace(/\s/g, '').toLowerCase()

  allReps[i].photoSrc = allReps[i].identification + ".jpg"

  console.log(allReps[i].photoSrc)
}

 // reps[0].items.sort((a,b) => a.state > b.state ? 1 : -1)