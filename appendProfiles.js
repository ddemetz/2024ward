var pRep
var repreZent = ""

var queryString = window.location.search.substring(1);
console.log(queryString)

var wrap = $("#wrap")

for (let i = 0; i < allReps.length; i++){
  
if (allReps[i].identification==queryString){

  pRep = allReps[i]
  socialBadgeArray = []

  if (pRep.contact.website !== "") {
    socialBadgeArray.push(`<a href="${pRep.contact.website}"><img src="assets/socialIcons/website.png" alt="${pRep.name}'s Website'"></a>`)
  }

// `<div class="hoverme">
//     <a href="x.com/${pRep.contact.x}"><img src="assets/socialIcons/x.png" alt="X"></a>

//       <p class="text">@${pRep.contact.x}</p>

//   </div>`


  z = `<img src='assets/z.png' alt='part of RepreZent' class='z-sticker' style='transform: rotate(${z}deg);'>`

  if(pRep.age <= 35){
    repreZent = Math.random() * 20-10
    repreZent = `<img src="assets/reprezentsticker.png" alt="reprezent" class="profile-sticker" id="profile-reprezent" style="transform: rotate(${repreZent}deg);">`
  }
  
  if (pRep.contact.x !== "") {
    socialBadgeArray.push(`<a href="x.com/${pRep.contact.x}"><img src="assets/socialIcons/x.png" alt="X"></a>`)
  }

  if (pRep.contact.instagram !== "") {
    socialBadgeArray.push(`<a href="instagram.com/${pRep.contact.instagram}"><img src="assets/socialIcons/instagram.png" alt="Instagram"></a>`)
  }

  if (pRep.contact.tiktok !== "") {
    socialBadgeArray.push(`<a href="tiktok.com/${pRep.contact.tiktok}"><img src="assets/socialIcons/tiktok.png" alt="TikTok"></a>`)}

    if (pRep.contact.facebook !== "") {
      socialBadgeArray.push(`<a href="facebook.com/${pRep.contact.facebook}"><img src="assets/socialIcons/facebook.png" alt="Facebook"></a>`)
  }

  socialBadges = socialBadgeArray.toString().replace(/,/g, " ");

//   //these should match the image names sans ext
// var statementBadges = ["gnd", "freecollege"]

//   var statementArray = []

//   for (let i = 0; i < pRep.statements.length; i++) {

//     statementArray.push(`<article> <img class= "statement-badge" src="assets/qualificationIcons/${statementBadges[i]}.png"><section><h2>${pRep.statements[i].name}</h2>
//         <p>${pRep.statements[i].statement}</p></section></article>`)
    
//     statementList = statementArray.toString().replace(/,/g, " ");
    
    
    
 // }
  document.title = pRep.name
  wrap.empty()
  wrap.append(`

  <img src="assets/2024ward.png" id="rep-page-logo">
  <a href="endorsements.html">&#8592;All Reps</a>
  <section id="profile">
    <article id="profile-images">
      <img src="${pRep.photoSrc}" id="profile-headshot">
      <img src="assets/endorsement.png" alt="Endorsed by Gen-Z for Change" class="profile-sticker" id="profile-gzendorsement" >
      ${repreZent}
    </article>
    <section id="profile-about">
      <h1 id="profile-name">${pRep.name}, ${pRep.age}</h1>
      <article id=profile-location>
        <img src="assets/pin.png" alt="pin" id="pin">
        <h6>${pRep.county}, ${pRep.state}</h6>
      </article>
      <p>${pRep.bio}</p>
      <article id="profile-socials">
        ${socialBadges}
      </article>
    </section>
  </section>

  `)}
 else{
   if (i==0){
   wrap.append("<div id='missing'><h3>404 :( Oh nooo this page is missing, please double check the url or click the back arrow to see all representatives</h3><img src='assets/404.gif'></div>")}
 }

  
}
