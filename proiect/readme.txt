Proiectul este un site de blogging legat de fitness

Functionalitati: 
-pagina principala cu bloguri minimizate
-pagina de editor in care se pot uploada banner si poze + text si se creeaza blogul
-salvarea blogurilor in baza de date(firebase)
-pagina de about cu formular si API de google maps



STRUCTURA:

Fisierele sunt clasate in foldere cu nume specifice atribuirii lor(fisere ".css" in "css", etc)



DIAGRAMA DE ARHITECTURA:

Utilizator-->Front-end--> }Back-end(fisierele javascript) }-->DataBase
					  --> }Server-->Back-end	



PROCEDURA DE INSTALARE:
Se deschide fisierul in visual studio code, se verifica cu npm list daca toate dependentele sunt instalate:
├── @playwright/test@1.49.1
├── express-fileupload@1.5.1
├── express.js@1.0.0
├── firebase@11.1.0
├── firebaseui@6.1.0
├── firestore@1.1.6
└── nodemon@3.1.9
Se porneste un terminam si se ruleaza comanda "npm start"
Se intra pe url-ul "http://localhost:3000/" pe un browser la alegere					  
														
