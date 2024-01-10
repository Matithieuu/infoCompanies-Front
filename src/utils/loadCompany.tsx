import Company from "../data/company";

export function loadCompanyFromLocalStorage(key: any) {
    const companyData = localStorage.getItem(key);
    if (!companyData && companyData === "" && companyData === null) {
        return null;
    }

    if (companyData != "undefined" && companyData != undefined && companyData != null) {
        const companyObjs: any[] = JSON.parse(companyData);
        return companyObjs.map(companyObj => new Company(
            companyObj.id,
            companyObj.denomination,
            companyObj.siren,
            companyObj.nic,
            companyObj.formeJuridique,
            companyObj.codeAPE,
            companyObj.adresse,
            companyObj.codePostal,
            companyObj.ville,
            companyObj.region,
            companyObj.dateImmatriculation,
            companyObj.dateRadiation,
            companyObj.checked,
            companyObj.dateClotureExercice1_2019,
            companyObj.CA1_2019,
            companyObj.resultat1_2019,
            companyObj.dateClotureExercice2_2019,
            companyObj.CA2_2019,
            companyObj.resultat2_2019,
            companyObj.dateClotureExercice3_2019,
            companyObj.CA3_2019,
            companyObj.resultat3_2019,
            companyObj.dateClotureExercice1_2020,
            companyObj.CA1_2020,
            companyObj.resultat1_2020,
            companyObj.dateClotureExercice2_2020,
            companyObj.CA2_2020,
            companyObj.resultat2_2020,
            companyObj.dateClotureExercice3_2020,
            companyObj.CA3_2020,
            companyObj.resultat3_2020,
            companyObj.dateClotureExercice1_2021,
            companyObj.CA1_2021,
            companyObj.resultat1_2021,
            companyObj.dateClotureExercice2_2021,
            companyObj.CA2_2021,
            companyObj.resultat2_2021,
            companyObj.dateClotureExercice3_2021,
            companyObj.CA3_2021,
            companyObj.resultat3_2021,
            companyObj.dateClotureExercice1_2022,
            companyObj.CA1_2022,
            companyObj.resultat1_2022,
            companyObj.dateClotureExercice2_2022,
            companyObj.CA2_2022,
            companyObj.resultat2_2022,
            companyObj.dateClotureExercice3_2022,
            companyObj.CA3_2022,
            companyObj.resultat3_2022,
            companyObj.dateClotureExercice1_2023,
            companyObj.CA1_2023,
            companyObj.resultat1_2023,
            companyObj.dateClotureExercice2_2023,
            companyObj.CA2_2023,
            companyObj.resultat2_2023,
            companyObj.dateClotureExercice3_2023,
            companyObj.CA3_2023,
            companyObj.resultat3_2023,
            companyObj.dateClotureExercice1,
            companyObj.CA1,
            companyObj.resultat1,
            companyObj.dateClotureExercice2,
            companyObj.CA2,
            companyObj.resultat2,
            companyObj.dateClotureExercice3,
            companyObj.CA3,
            companyObj.resultat3,
            companyObj.secteurActivite,
            companyObj.phone,
            companyObj.website,
            companyObj.reviews,
            companyObj.schedule,
            companyObj.instagram,
            companyObj.facebook,
            companyObj.twitter,
            companyObj.linkedin,
            companyObj.youtube,
            companyObj.email,
            companyObj.dateOfScrapping
        ));
    } else {
        console.log("Invalid user data format");
        return null;
    }
}