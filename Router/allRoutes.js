import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "/pages/home.html"),
   new Route("/galerie", "Galerie", "/pages/galerie.html"),
   new Route("/signin","connexion","/pages/signin.html"),
   new Route("/signup","inscription","/pages/signup.html"),
   new Route("/account","mon compte","/pages/account.html"),
   new Route("/editPassword","changement de mot de passe","/pages/editPassword.html"),
   new Route("/allResa","Les réservations","/pages/allResa.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Video club gaming";
