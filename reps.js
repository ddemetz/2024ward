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

  {name:'Alex Lee',identification:'alexlee',age:'29',county:'Alameda/Santa Clara County',state:'California',seat:'California State Assembly District 24',photoSrc:'',repreZent:'TRUE',contact:{website:'https://www.votealexlee.com',x:'alex_lee',instagram:'alex_lee',tiktok:'votealexlee',facebook:'votealexlee'},bio:'Alex Lee is a 29 year old Asian American legislator running for California State Assembly District 24. As an incumbent who was the first openly elected bisexual legislator in California history, Alex Lee stands for housing reform, environmental safety, and electoral reform. In his tenure, Alex authored three social housing bills to realize social housing as a human right, created an environmental justice advisory committee for marginalized communities disproportionately impacted by pesticides, and authored several campaign financing reform bills to ban the excessive influence of corporate money in politics. If reelected, he is dedicated to continuing his fight for the families and workers in his district and his work in creating healthcare, housing, and education for all.'},
  {name:'Austin Bruckner Carrillo',identification:'austinbrucknercarrillo',age:'30',county:'Alameda County',state:'California',seat:'LA County Supervisor of District 5',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.Brucknercarrillo.com',x:'abc4husd',instagram:'abc4husd',tiktok:'',facebook:'austin.bruckner.9'},bio:'Austin Bruckner Carrillo is a 30 year old Commissioner on his city’s Community Services Commission. As a young man raised in a Puerto Rican Italian family household who is passionate about his community, Austin’s top priority if elected to the school board is to address the high truancy and low graduation rates. In addition, Austin is passionate about fortifying ctitical mental health services, protecting children from domestic violence, and encouraging student activism. If elected, Austin would put students first to ensure each student gets the opportunity to complete their education safely, happily, and with all needed support.'},
  {name:'Hector Marin',identification:'hectormarin',age:'26',county:'Santa Cruz County',state:'California',seat:'Santa Cruz City Council District 2',photoSrc:'',repreZent:'TRUE',contact:{website:'https://www.hectorforsantacruz.com',x:'',instagram:'hectorforsantacruz',tiktok:'hectorforsantacruz',facebook:'hectorforsantacruz'},bio:'Hector Marin is a 26 year old 2021 Graduate from UC Santa Cruz running for Santa Cruz City Council, District 2. As a young person of color who has a history of working with and building solidarity with unions and community members, Hector is passionate about affordable, inclusive housing, county-wide equity frameworks, and bringing a community-centered approach to politics. If elected, Hector would work to pass an ordinance to organize neighborhood councils and neighborhood affordability plans and create new, accessible homes, rent existing homes at affordable rates, and pool home equity to finance new homes. Additionally, he would partner with UCSC and the City in expanding housing for students. Along with these housing policies, Hector would ensure the environment is central to all discussions of policy to equitably maximize very low-income housing for tenants, working class folx, and the youth.'},
  {name:'Ibraheem Samirah',identification:'ibraheemsamirah',age:'33',county:'Loudoun County',state:'Virginia',seat:'US House of Representatives',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.samirahforstatesenate.com',x:'IbraheemSamirah',instagram:'del.ibraheemsamirah',tiktok:'',facebook:'DelegateIbraheemSamirah'},bio:'Ibraheem Samirah is a 33 year old first generation U.S. citizen, born to Jordanian-Palestinian immigrant parents. He is running for Congress to fight for a Green New Deal, Medicare for All, and a justice-oriented foreign policy that leaves nobody behind. Given what’s happening in Gaza right now, Ibraheem passionately believes that the US needs fighters who will stand up to the foreign policy establishment and deliver solutions that center the plight of the Palestinian people. Having previously served Loudoun County in the House of Delegates, Ibraheem would prioritize the climate crisis, education, and the movement for a permanent ceasefire in Gaza.'},
  {name:'Jennifer Esteen',identification:'jenniferesteen',age:'44',county:'Alameda County',state:'California',seat:'Alameda County Board of Supervisors District 4',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.jenniferesteen.com/',x:'Esteen4CA',instagram:'esteen4ca',tiktok:'esteen4ca',facebook:'Esteen4ca'},bio:'Jennifer Esteen is a 44 union represented nurse, a working mother, and a gay Black woman. While working in Psych Emergency Services, Jennifer witnessed how patients struggled to acquire proper care due to lack of funding. She fought alongside residents of General Hospital’s Behavioral Health Center to save 41 permanent mental health beds in their Adult Residential Facility. Now, she manages a $1 billion dollar budget for the county’s healthcare system and has worked on securing an additional 20 beds for mental health patients. She also serves on the Eden Area Municipal Advisory Council which gives her insight into what county residents need in terms of housing. If elected, Jennifer would look to secure funding for the development of affordable housing, as well as providing meaningful care for the unhoused folx in Alameda. She would also look to expand job training for youth and returning citizens through partnering with unions and community organizations to prevent reincarceration of community. Jennifer will also continue advocating for the county’s residents to have the right to safe and affordable healthcare by prioritizing community-based preventive care. '},
  {name:'Joe Thompson',identification:'joethompson',age:'21',county:'Santa Cruz County',state:'California',seat:'Santa Cruz City Council District 5',photoSrc:'',repreZent:'TRUE',contact:{website:'https://www.votejoethompson.com/',x:'JoeThompsonCA',instagram:'JoeThompsonCA',tiktok:'JoeThompsonCA',facebook:'JoeThompsonCA'},bio:'Joe Thompson is a 21 year old student at UCSC running for Santa Cruz City Council to represent district 5. In 2021, they helped organize and file the first union petition in the state of California for a Starbucks. Since then, they have continued advocating for workers rights. They currently work for SEIU Local 1021, organizing Starbucks and Peets locations in Northern California. If elected, Joe will fight to expand options for low-income housing by redeveloping sites, unused plots, as well as pushing policies that will ensure developers pay their fair share to benefit the community. They believe in combating climate change and would push for such policy to be a top priority of the city’s. Joe will also continue to advocate for Santa Cruz workers by expanding educational resources to inform folkx about topics such as wage theft, misclassification, and other unfair labor practices. They will also work on bringing forward a Project Labor Agreement.'},
  {name:'Qasim Rashid',identification:'qasimrashid',age:'42',county:'Cook County',state:'Illinois',seat:'US Congress in Illinois&rsquo; 11th District',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.qasimrashid.com',x:'qasimrashid',instagram:'qasimrashid',tiktok:'qasim.rashid',facebook:'qasimrashid'},bio:'Qasim Rashid is a 42 year old human rights lawyer, Pakistanian immigrant, and author running for US Congress in Illinois’ 11th District. Qasim is passionate about combatting the climate crisis, protecting workers rights, holding billionaire corporations accountable, and expanding access to health care. If elected, Qasim would fight for debt-free college and trade schools so that people can get the training they need to build their careers, expand Medicare into guaranteed universal healthcare for all people in the country, and support legislation to end Citizens United and prohibit companies from buying their way into the political process. Additionally, he is passionate about fully funding USCIS to meet the demand of American families seeking to ensure their loved ones can immigrate to the United States safely, quickly, and in a documented manner, and supporting the Women’s Health Protection Act of 2023, which would immediately overturn abortion bans nationwide.'},

  {name:'James Coleman',identification:'jamescoleman',age:'25',county:'San Francisco',state:'California',seat:'District 4 City Council',photoSrc:'',repreZent:'TRUE',contact:{website:'votejamescoleman.com',x:'jamescolemanssf',instagram:'jamescolemanssf',tiktok:'',facebook:'JamesColemanSSF'},bio:'James Coleman is a 25 year old affordable housing advocate running for California’s 4th District City Council. He is a strong advocate for affordable housing production as well as tenant protections. If elected, James will fight to address climate change, protect the environment, and hold polluters accountable, as well as fight for universal childcare and quality affordable education. He is passionate about working to make California’s system of public safety work for all, including communities of color. '},
  {name:'Whitney Shanahan',identification:'whitneyshanahan',age:'38',county:'San Diego County',state:'California',seat:'48th Congressional District',photoSrc:'',repreZent:'FALSE',contact:{website:'https://whitneyshanahan.com',x:'prochoiceheart',instagram:'prochoicewithheart',tiktok:'whitneywithheart',facebook:'prochoicewithheart'},bio:'Whitney Shanahan is a 38 year old bisexual activist passionate about abortion rights and gun violence prevention. Whitney is running for California’s 48th Congressional District. As someone who has promised to co-sponsor a ceasefire resolution in congress if one does not already exist, Whitney is also immensely passionate about women’s health. She stands for ending the criminalization of pregnancy worldwide, has held hundreds of protests over the past several years, and collected over 270,000 signatures to defend abortion rights in Washington. In addition, Whitney is dedicated to gun violence reform, from Ethan’s law to red flag laws and the Assault Weapons Ban. If elected, Whitney is committed to implementing nationwide, federal protections to abortion, bodily Autonomy and LGBTQ rights.'},
  {name:'Cecilia Lunaparra',identification:'cecilialunaparra',age:'22',county:'Alameda County',state:'California',seat:'Berkeley City Council District 7',photoSrc:'',repreZent:'TRUE',contact:{website:'https://www.ceciliaforberkeley.com/',x:'ceciliaforberk',instagram:'ceciliaforberkeley',tiktok:'',facebook:''},bio:'Cecilia Lunaparra is a 22 year old Berkeley resident dedicated to advocating for students in a district that is made up of 95% students. Cecilia is passionate about reforming policing, advocating for just labor practices, and providing safe, accessible public transit systems. If elected, not only would Cecilia be the first Latina and first queer woman of color ever elected to the Berkeley City Council, but she would work tirelessly with communtiy organizers and labor unions, advocate for building affordable housing, expand opportunities for students to be involved in Berkeley local government, invest in programs like Berkeley’s Specialized Care Unit and BerkDOT that prevent the root causes of violence, and much more. '},
  {name:'Megan Kocher',identification:'megankocher',age:'25',county:'Luzerne County',state:'Pennsylvania',seat:'State Representative, 119th Legislative District',photoSrc:'',repreZent:'TRUE',contact:{website:'https://megankforpa.com/',x:'MeganKforPA',instagram:'',tiktok:'',facebook:'MeganKforPA'},bio:'Megan Kocher is a 25 year old activist who has worked on advocacy campaigns since she was 18 years old, trying to create change that works for everyone, no matter their race, gender, or class. Having grown up in the 119th district, Megan is passionate about eliminating subsidies for fossil fuels and instead investing in clean energy, investing in affordable healthcare, and protecting reproductive rights. If elected, Megan would support a program to help low-income families invest in clean energy to help them decrease their carbon foot print and decrease their electricity bills, work to increase funding for underfunded schools, and vote in the interest of District 119 residents. '},
  {name:'Susheela Jayapal',identification:'susheelajayapal',age:'62',county:'Multnohmah County ',state:'Oregon',seat:'Oregon&rsquo;s Third Congressional District ',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.susheelaforcongress.com/about ',x:'SusheelaJayapal',instagram:'susheelaforcongress',tiktok:'',facebook:'Susheelaforcongress'},bio:'Susheela is a 62 year old outspoken champion of reproductive rights, education, and economic justice. Prior to entering office, she volunteered for and served on several community boards such as Planned Parenthood Columbia Willamette, Metropolitan Family Service, All Hands Raised, and CASA. Most recently she served on the Multnomah County Commision where she has been advocating for comprehensive solutions to homlessness, rental assistance, a living wage for workers who deal with mental health, survivors of domestic violence, immigrant communities, and community-led crime prevention initiatives. In Congress, Susheela is committed to continue fighting for what the community needs. '},
  {name:'Tara Sreekrishnan',identification:'tarasreekrishnan',age:'31',county:'Ventura County and LA County',state:'California',seat:'California State Assembly District 26',photoSrc:'',repreZent:'FALSE',contact:{website:'www.tarasreekrishnan.com',x:'Taraforassembly',instagram:'Taraforassembly',tiktok:'',facebook:'Tara for Assembly'},bio:'Tara Sreekrishnan is a 31 year old Silicon Valley native and child of immigrants. She is passionate about the challenges her residents face: housing affordability, climate change, traffic congestion, and education. While founding a non-profit organization that empowers students to actively engage in environmental sciences and conservation, Tara also serves a Trustee on the Santa Clara County Board of Education – overseeing 270,000 students and balancing a budget of $300 million. If elected, Tara would take her professional experience from all levels of local government in writing and passing legislation to ban new oil and gas permits, ban fracking and cyclic steam injection, implement a guaranteed basic income for all foster youth and unhoused youth, advocate for universal publicly subsidized childcare waiving all family fees, and institute Single-Payer Healthcare in California.'},
  // {name:'Jen Perelman',identification:'jenperelman',age:'53',county:'',state:'Florida',seat:'Florida’s 25th Congressional District',photoSrc:'',repreZent:'FALSE',contact:{website:'https://www.jen2024.org/',x:'JenForFL25',instagram:'JenForFL25',tiktok:'',facebook:'JenForFL25'},bio:'Jen Perelman is a 53 year old Floridian who is committed to reforming Florida’s politics. As a Jewish and anti-zionist woman, Jen began her legal career by representing marginalized voices and found her way to politics, where she stands for economic reform, redrawing of gerrymandered maps, reforming foreign policy, and more. If elected to Congress, Jen will advocate for a Medicare-for-all single-payer healthcare system, increased taxation for the wealthy, tuition-free education at public universities and trade schools, a federal jobs guarantee, labor law reforms to facilitate unionization, free childcare, electoral reforms to enhance voting accessibility, public financing of elections, criminal justice reform, protection of abortion and reproductive rights, LGBTQ rights, and a swift transition to clean and sustainable energy models.'},
  {name:'Ryan Khojasteh',identification:'ryankhojasteh',age:'31',county:'San Francisco County',state:'California',seat:'San Francisco District Attorney',photoSrc:'',repreZent:'FALSE',contact:{website:'https://ryanforsfda.com',x:'ryankhoj',instagram:'ryankhojasteh',tiktok:'ryankhojasteh',facebook:'Ryan Khojasteh for San Francisco District Attorney'},bio:'Ryan Khojasteh is a career prosecutor who is running for San Francisco District Attorney. In his work, he has  I experience in many different units within the criminal legal system, including: misdemeanors, juvenile delinquency, general felonies, collaborative courts, victim restitution, etc. Facing backlash for his innovative strategies, Ryan firmly believes that every San Franciscan deserves safe neighborhoods, safe streets, and safe communities and feels that collaborating with city and community partners to address the root causes of crime is the way to do this. If elected, Ryan will work to transform the criminal legal system into one that responsibly balances accountability and rehabilitation.'},
  // {name:'Dion C. Quamina',identification:'dionc.quamina',age:'36',county:'',state:'New York',seat:'Member of the State Committee Assembly District 55/District Leader',photoSrc:'',repreZent:'FALSE',contact:{website:'Votefordion.com',x:'votefordion_',instagram:'votefordion',tiktok:'',facebook:'votefordion'},bio:'Dion C. Quamina is a 36 year old community organizer running for District Leader in New York’s 55th district. With a firm belief in her community’s power to hold elected officials accountable, Dion has been boots-on-the-ground, knocking on doors, and listening to the stories, the struggles, and the need for change. As a U.S. Air Force Veteran and former member of the New York State Assembly and Community Board 17, Dion believes in transparency, equity, and engagement within her district. If elected, Quamina would focus on electoral districting reform, bolstering voting rights, and increasing transparency in governance. '},
  {name:'Rue Willis',identification:'ruewillis',age:'23',county:'Norfolk County',state:'Virginia',seat:'Chesapeake School Board',photoSrc:'',repreZent:'TRUE',contact:{website:'https://ruewillis.com',x:'RueMWillis',instagram:'RueMWillis',tiktok:'RueMWillis',facebook:'RueMWillis'},bio:'Rue Willis is a 23 year old educator running for Chesapeake School board. As a former Newport News and current Chesapeake Public Schools employee, Rue has provided safe, nurturing learning environments that have allowed students to flourish. While concluding their at Old Dominion University in International Studies with minors in History & German, Rue became motivated to run for the Chesapeake School Board to ensure that every student in Chesapeake is provided the opportunity to excel. If elected, Rue would focus on transitioning to a disciplinary system that focus on teaching students the skills to de-escalate and problem solve with their peers when issues arise; providing accessible support systems for diagnosing & treating symptoms of mental illness; increasing pay and improving the working conditions for our educators as well as providing pathways to bring in new educators through teaching alongside a seasoned educator in the classroom; and expanding existing tutoring opportunities for students both in-person after school as well as virtual on-demand.'}];


//adding photo sources and identifications
for (let i = 0; i < allReps.length; i++) {
  //☀️Photos HAVE to be the name + jpg!!
  allReps[i].identification = allReps[i].name.replace(/\s/g, '').toLowerCase()

  allReps[i].photoSrc = allReps[i].identification + ".jpg"

  // console.log(allReps[i].photoSrc)
}


// order an array of objects with name
allReps.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(allReps)
