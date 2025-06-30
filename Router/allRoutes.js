import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
   new Route("/", "Accueil", "/pages/home.html", []),
   new Route("/galerie", "Galerie", "/pages/galerie.html", []),
   new Route("/signin","connexion","/pages/signin.html", ["disconnected"],"/js/auth/signin.js"),
   new Route("/signup","inscription","/pages/signup.html", ["disconnected"],"/js/auth/signup.js"),
   new Route("/account","mon compte","/pages/account.html", ["client,admin"]),
   new Route("/editPassword","changement de mot de passe","/pages/editPassword.html", ["clent,admin"]),
   new Route("/allResa","Les réservations","/pages/allResa.html", ["client"]),
   new Route("/reserver","Réserver","/pages/reserver.html", ["client"]),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Video club gaming";
