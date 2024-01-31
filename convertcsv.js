function csvToArr(stringVal, splitter) {
  const [keys, ...rest] = stringVal
    // .trim()
    .split("\n")
    .map((item) => item.split(splitter));

  const formedArr = rest.map((item) => {
    const object = {};
    keys.forEach((key, index) => (object[key] = item.at(index)));
    return object;
  });
  console.log(formedArr);

}

csvToArr(csv,",")

  var csv=`
Alex Lee,29,CA,Alameda/Santa Clara,TRUE,"Alex Lee is a 29 year old Asian American legislator running for California State Assembly District 24. As an incumbent who was the first openly elected bisexual legislator in California history, Alex Lee stands for housing reform, environmental safety, and electoral reform. In his tenure, Alex authored three social housing bills to realize social housing as a human right, created an environmental justice advisory committee for marginalized communities disproportionately impacted by pesticides, and authored several campaign financing reform bills to ban the excessive influence of corporate money in politics. If reelected, he is dedicated to continuing his fight for the families and workers in his distrcit and his work in creating healthcare, housing, and education for all.",https://www.votealexlee.com,alex_lee,alex_lee,votealexlee,https://www.facebook.com/votealexlee,
Joe Thompson,21,CA,Santa Cruz,TRUE,Joe Thompson is a 21 year old ,https://votejoethompson.com/,JoeThompsonCA,JoeThompsonCA,,,
Jennifer Esteen,44,CA,Alameda County,FALSE,,https://www.jenniferesteen.com/,,,,,
Hector Marin,26,CA,Santa Cruz,TRUE,"Hector Marin is a 26 year old 2021 Graduate from UC Santa Cruz running for Santa Cruz City Council, District 2. As a young person of color who has a history of working with and building solidarity with unions and community members, Hector is passionate about affordable, inclusive housing, county-wide equity frameworks, and bringing a community-centered approach to politics. If elected, Hector would work to pass an ordinance to organize neighborhood councils and neighborhood affordability plans and create new, accessible homes, rent existing homes at affordable rates, and pool home equity to finance new homes. Additionally, he would partner with UCSC and the City in expanding housing for students. Along with these housing policies, Hector would ensure the environment is central to all discussions of policy to equitably maximize very low-income housing for tenants, working class folx, and the youth.",hectorforsantacruz.com,N/A,hectorforsantacruz,hectorforsantacruz,https://www.facebook.com/hectorforsantacruz,
`