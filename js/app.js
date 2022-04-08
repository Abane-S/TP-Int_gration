document.addEventListener("DOMContentLoaded", () => {

    let ab = document.getElementsByName("password")[0];
    let email = document.getElementsByName("email")[0];
    let msg = document.querySelector("main form p:first-of-type")
   
    const User = {
      mail: "abanesebiane@outlook.fr",
      pwd: `abane`,

    }

    localStorage.setItem('mail', User.mail);
    localStorage.setItem('password', User.pwd);
    const emails = localStorage.getItem('mail', User.mail);
    const mdp = localStorage.getItem('password', User.pwd);

    let btn = document.querySelector("main form button");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      ab.value == mdp && email.value == emails ? alert("Connexion réussi") : msg.innerHTML= `<p>E-Mail manquant ou invalide !</p>`;
      console.log(btn);
    })
});