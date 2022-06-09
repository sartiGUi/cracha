
    const socialMedia = {
        
        github: "sartigui",
        youtube: "wsartoric",
        facebook: "sartoric",
        instagram: "sartoric",
        twitter: "sartoric" 
}

function changeSocialMediaLinks() {
   //document.getElementById('userName').textContent = "Olívia";
   //userName.textContent = "Olívia";
   for (let li of socialLinks.children) {
       const social = li.getAttribute('class')
       //alert(li.children.href)
       li.children[0].href = `https://${social}.com/${socialMedia[social]}`
       //alert(li.children[0].href)
   }
}

changeSocialMediaLinks();


function getGitHubProfileInfos () {
    const url = `https://api.github.com/users/${socialMedia.github}`
    //alert(url)

    fetch(url)
    .then(response => response.json())
    .then(data => { 
        userName.textContent = data.name;
        userBio.textContent = data.bio;
        userLink.href = data.html_url;
        userImage.src = data.avatar_url;
        userLogin.textContent = data.login;

} )

}
getGitHubProfileInfos()

    //fetch: acessa a url e recebe a resposta
    //then = promessa. 
    //Buscou? Deu certo? Então...
    //Response é só uma variável para receber o valor
    //Converte os dados para json