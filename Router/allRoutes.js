import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "/pages/home.html"),
   new Route("/galerie", "Galerie", "/pages/galerie.html"),
   new Route("/signin","connexion","/pages/signin.html","/js/auth/signin.js"),
   new Route("/signup","inscription","/pages/signup.html","/js/auth/signup.js"),
   new Route("/account","mon compte","/pages/account.html"),
   new Route("/editPassword","changement de mot de passe","/pages/editPassword.html"),
   new Route("/allResa","Les réservations","/pages/allResa.html"),
   new Route("/reserver","Réserver","/pages/reserver.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Video club gaming";
